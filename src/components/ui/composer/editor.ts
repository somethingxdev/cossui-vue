/* eslint-disable sonarjs/cognitive-complexity -- the handlers follow coss ui's editor line for line */
import type { ComputedRef, InjectionKey, ShallowRef } from 'vue'
import type {
  ActiveQuery,
  ComposerItemValue,
  ComposerQuery,
  ComposerSelection,
  ComposerSnapshot,
  ComposerTrigger,
  ComposerValue,
} from './document'
import { useEventListener } from '@vueuse/core'
import { computed, inject, nextTick, provide, shallowReactive, shallowRef, useId, watch } from 'vue'
import { COMPOSER_CLIPBOARD_TYPE, parseComposerClipboard } from './clipboard'
import {
  currentQuery,
  equalValue,
  getComposerText,
  getFilteredItems,
  hasVisibleItems,
  insertItem,
  insertPlainText,
  readSelection,
  readValue,
  restoreSelection,
  writeValue,
} from './document'

export interface ComposerChangeDetails {
  reason: 'input' | 'selection' | 'history' | 'reset'
}

export interface ComposerEditorProps {
  value?: ComposerValue
  defaultValue?: ComposerValue
  triggers?: readonly ComposerTrigger[]
  disabled?: boolean
  readOnly?: boolean
  submitDisabled?: boolean
  allowEmpty?: boolean
  submitOnEnter?: 'desktop' | 'always' | 'never'
  submitOnEmptySuggestions?: boolean
  layout?: 'stacked' | 'adaptive'
  getSuggestionsAnnouncement?: (count: number) => string
  onAction?: (item: ComposerItemValue, query: ComposerQuery) => void
}

interface ComposerEditorCallbacks {
  onValueChange: (value: ComposerValue, details: ComposerChangeDetails) => void
  onSubmit: (value: ComposerValue) => void
  onQueryChange: (query: ComposerQuery | null) => void
}

interface RegisteredItem {
  element: HTMLElement
  disabled: boolean
}

export interface ComposerEditor {
  value: ComputedRef<ComposerValue>
  isEmpty: ComputedRef<boolean>
  canSubmit: ComputedRef<boolean>
  disabled: ComputedRef<boolean>
  readOnly: ComputedRef<boolean>
  status: ComputedRef<'ready' | 'loading' | 'error'>
  layout: ComputedRef<'stacked' | 'adaptive'>
  isTextarea: ComputedRef<boolean>
  isComposing: ShallowRef<boolean>
  rootEl: ShallowRef<HTMLElement | null>
  inputEl: ShallowRef<HTMLElement | null>
  tokenHosts: ShallowRef<HTMLSpanElement[]>
  inputAttrs: ComputedRef<Record<string, unknown>>
  inputListeners: Record<string, (event: any) => void>
  submit: () => void
  insertTrigger: (character: string) => void
  reset: () => void
  onFormSubmit: (event: Event) => void
  open: ComputedRef<boolean>
  onOpenChange: (open: boolean) => void
  items: ComputedRef<readonly ComposerItemValue[]>
  listId: string
  listEl: ShallowRef<HTMLElement | null>
  highlightedId: ComputedRef<string | undefined>
  announcement: ComputedRef<string>
  registerItem: (id: string, item: RegisteredItem | null) => void
  highlightItem: (value: ComposerItemValue) => void
  selectItem: (value: ComposerItemValue) => void
}

const composerKey: InjectionKey<ComposerEditor> = Symbol('composer')

export function useComposerEditor(): ComposerEditor | null {
  return inject(composerKey, null)
}

export function useComposerContext(): Pick<
  ComposerEditor,
  'value' | 'isEmpty' | 'canSubmit' | 'disabled' | 'readOnly' | 'status' | 'submit' | 'insertTrigger' | 'reset'
> {
  const context = useComposerEditor()
  if (!context)
    throw new Error('useComposerContext must be used within Composer.')
  const { value, isEmpty, canSubmit, disabled, readOnly, status, submit, insertTrigger, reset } = context
  return {
    value,
    isEmpty,
    canSubmit,
    disabled,
    readOnly,
    status,
    submit,
    insertTrigger,
    reset,
  }
}

/** Stands in for Base UI's `useFilter`: matching that ignores case and accents by default. */
export function useComposerFilter(options: Intl.CollatorOptions & { locale?: Intl.LocalesArgument } = {}): {
  contains: (text: string, query: string) => boolean
  startsWith: (text: string, query: string) => boolean
  endsWith: (text: string, query: string) => boolean
} {
  const { locale, ...collatorOptions } = options
  const collator = new Intl.Collator(locale, { usage: 'search', sensitivity: 'base', ...collatorOptions })
  const same = (a: string, b: string): boolean => collator.compare(a, b) === 0
  const normalize = (text: string): string => text.normalize('NFC')
  return {
    contains(text, query) {
      if (!query)
        return true
      const item = normalize(text)
      const search = normalize(query)
      for (let start = 0; start + search.length <= item.length; start++) {
        if (same(item.slice(start, start + search.length), search))
          return true
      }
      return false
    },
    startsWith(text, query) {
      const search = normalize(query)
      return !search || same(normalize(text).slice(0, search.length), search)
    },
    endsWith(text, query) {
      const search = normalize(query)
      return !search || same(normalize(text).slice(-search.length), search)
    },
  }
}

function defaultAnnouncement(count: number): string {
  return `${count} suggestion${count === 1
    ? ''
    : 's'} available. Use the up and down arrow keys to navigate.`
}

function freshHistory(value: ComposerValue) {
  return {
    current: { value, selection: null } as ComposerSnapshot,
    past: [] as ComposerSnapshot[],
    future: [] as ComposerSnapshot[],
    inputType: '',
    timestamp: 0,
  }
}

function selectionInside(input: HTMLElement, requireRange: boolean): Selection | null {
  const selection = window.getSelection()
  if (
    !selection?.rangeCount
    || (requireRange && selection.isCollapsed)
    || !input.contains(selection.anchorNode)
    || !input.contains(selection.focusNode)
  ) {
    return null
  }
  return selection
}

export function provideComposerEditor(props: ComposerEditorProps, callbacks: ComposerEditorCallbacks): ComposerEditor {
  const inputEl = shallowRef<HTMLElement | null>(null)
  const rootEl = shallowRef<HTMLElement | null>(null)
  const uncontrolled = shallowRef<ComposerValue>(props.defaultValue ?? [])
  const value = computed(() => props.value ?? uncontrolled.value)
  const triggers = computed(() => props.triggers ?? [])
  const disabled = computed(() => Boolean(props.disabled))
  const readOnly = computed(() => Boolean(props.readOnly))
  const locked = computed(() => disabled.value || readOnly.value)
  const isTextarea = computed(() => inputEl.value?.tagName === 'TEXTAREA')
  const isComposing = shallowRef(false)
  const query = shallowRef<ActiveQuery | null>(null)
  const tokenHosts = shallowRef<HTMLSpanElement[]>([])

  let history = freshHistory(value.value)
  let pendingInput = { type: '', selection: null as ComposerSelection | null }
  let lastSelection: ComposerSelection | null = null
  let compositionValue = value.value
  let ignoreCompositionInput = false
  let dismissedQuery: string | null = null

  const { contains } = useComposerFilter()
  const trigger = computed(() => triggers.value.find(item => item.character === query.value?.character))
  const options = computed(() => getFilteredItems(trigger.value, query.value, contains))
  const open = computed(() =>
    !isTextarea.value
    && !isComposing.value
    && !locked.value
    && Boolean(query.value)
    && hasVisibleItems(trigger.value, options.value),
  )
  const isEmpty = computed(() => !getComposerText(value.value))
  const canSubmit = computed(() =>
    !isComposing.value
    && !locked.value
    && !props.submitDisabled
    && (Boolean(props.allowEmpty) || Boolean(getComposerText(value.value).trim())),
  )

  function setValue(next: ComposerValue, details: ComposerChangeDetails): void {
    if (props.value === undefined)
      uncontrolled.value = next
    callbacks.onValueChange(next, details)
  }

  function syncTokenHosts(input: HTMLElement): void {
    const next = Array.from(input.querySelectorAll<HTMLSpanElement>('[data-slot="composer-token-renderer"]'))
    const previous = tokenHosts.value
    if (previous.length !== next.length || previous.some((host, index) => host !== next[index]))
      tokenHosts.value = next
  }

  // Brings the DOM back to the draft: an external value, or an edit the controlled owner did not accept.
  function reconcile(): void {
    const input = inputEl.value
    if (!input || isComposing.value)
      return
    const text = getComposerText(value.value)
    const textValue: ComposerValue = text
      ? [
          { type: 'text', text },
        ]
      : []
    const expected = input instanceof HTMLTextAreaElement
      ? textValue
      : value.value
    if (!equalValue(history.current.value, expected)) {
      lastSelection = null
      history = freshHistory(expected)
    }
    if (!equalValue(readValue(input), expected)) {
      const selection = readSelection(input)
      writeValue(input, expected)
      restoreSelection(input, selection)
      query.value = null
      dismissedQuery = null
    }
    syncTokenHosts(input)
    if (input instanceof HTMLTextAreaElement) {
      input.disabled = disabled.value
      input.readOnly = readOnly.value
    }
  }

  watch([value, inputEl, disabled, readOnly], reconcile, { flush: 'post' })

  watch(
    () => query.value && { character: query.value.character, text: query.value.text, key: query.value.key },
    (next, previous) => {
      if (next?.key !== previous?.key || next?.text !== previous?.text || next?.character !== previous?.character)
        callbacks.onQueryChange(next)
    },
  )

  watch([locked, query, triggers], () => {
    if (query.value && (locked.value || !triggers.value.some(item => item.character === query.value?.character)))
      query.value = null
  })

  function updateQuery(): void {
    const input = inputEl.value
    const next = input
      && !isComposing.value
      && document.activeElement === input
      && triggers.value.length > 0
      && !locked.value
      && !(input instanceof HTMLTextAreaElement)
      ? currentQuery(input, triggers.value)
      : null
    if (!next || next.key !== dismissedQuery)
      dismissedQuery = null
    const active = next?.key === dismissedQuery
      ? null
      : next
    const previous = query.value
    if (previous?.key !== active?.key || previous?.node !== active?.node)
      query.value = active
  }

  function dismissSuggestions(): void {
    dismissedQuery = query.value?.key ?? null
    query.value = null
  }

  function publish(reason: ComposerChangeDetails['reason'] = 'input'): void {
    const input = inputEl.value
    if (!input || isComposing.value || locked.value)
      return
    const next = readValue(input)
    if (!(input instanceof HTMLTextAreaElement)) {
      if (!equalValue(history.current.value, next)) {
        const before = pendingInput
        const now = Date.now()
        const group = reason === 'input'
          && /^(?:insertText|deleteContentBackward|deleteContentForward)$/.test(before.type)
          && history.inputType === before.type
          && now - history.timestamp < 1000
          && before.selection?.anchor === history.current.selection?.anchor
          && before.selection?.focus === history.current.selection?.focus
        if (!group)
          history.past.push({ ...history.current, selection: before.selection })
        if (history.past.length > 100)
          history.past.shift()
        history.future = []
        history.current = {
          value: next,
          selection: readSelection(input),
        }
        history.inputType = before.type
        history.timestamp = now
      }
      pendingInput = { type: '', selection: null }
    }
    if (!equalValue(next, value.value))
      setValue(next, { reason })
    nextTick(reconcile)
    syncTokenHosts(input)
    dismissedQuery = null
    updateQuery()
  }

  function selectSuggestion(suggestion: ComposerItemValue): void {
    const input = inputEl.value
    const active = query.value
    if (locked.value || isComposing.value || suggestion.disabled || !active || !input?.contains(active.node))
      return
    pendingInput = {
      type: 'selection',
      selection: readSelection(input),
    }
    if (suggestion.type === 'action' && props.onAction) {
      const range = document.createRange()
      range.setStart(active.node, active.start)
      range.setEnd(active.node, active.end)
      range.deleteContents()
      range.collapse(true)
      const selection = window.getSelection()
      selection?.removeAllRanges()
      selection?.addRange(range)
      publish('selection')
      query.value = null
      props.onAction(suggestion, active)
      return
    }
    insertItem(input as HTMLDivElement, active, suggestion)
    publish('selection')
    query.value = null
  }

  function insertTrigger(character: string): void {
    const input = inputEl.value
    if (
      !input
      || input instanceof HTMLTextAreaElement
      || locked.value
      || isComposing.value
      || !triggers.value.some(item => item.character === character)
    ) {
      return
    }
    const text = getComposerText(readValue(input))
    const selection = readSelection(input) ?? lastSelection ?? { anchor: text.length, focus: text.length }
    input.focus({ preventScroll: true })
    restoreSelection(input, selection)
    const start = Math.min(selection.anchor, selection.focus)
    const end = Math.max(selection.anchor, selection.focus)
    const preceding = text.slice(0, start)
    const following = text.slice(end)
    const prefix = preceding && !/\s$/u.test(preceding)
      ? ' '
      : ''
    const suffix = following && !/^\s/u.test(following)
      ? ' '
      : ''
    pendingInput = {
      type: 'trigger',
      selection: readSelection(input),
    }
    insertPlainText(input, `${prefix}${character}${suffix}`)
    if (suffix) {
      const caret = start + prefix.length + character.length
      restoreSelection(input, { anchor: caret, focus: caret })
    }
    publish()
    lastSelection = readSelection(input)
  }

  function historyAction(direction: 'undo' | 'redo'): void {
    const input = inputEl.value
    if (!input || input instanceof HTMLTextAreaElement || locked.value || isComposing.value)
      return
    const source = direction === 'undo'
      ? history.past
      : history.future
    const destination = direction === 'undo'
      ? history.future
      : history.past
    const snapshot = source.pop()
    if (!snapshot)
      return
    destination.push({
      value: readValue(input),
      selection: readSelection(input),
    })
    history.current = snapshot
    history.inputType = ''
    writeValue(input, snapshot.value)
    restoreSelection(input, snapshot.selection)
    setValue(snapshot.value, { reason: 'history' })
    nextTick(reconcile)
    syncTokenHosts(input)
    dismissSuggestions()
  }

  function performSubmit(): void {
    if (!canSubmit.value)
      return
    dismissSuggestions()
    callbacks.onSubmit(value.value)
  }

  function submit(): void {
    if (!canSubmit.value)
      return
    const root = rootEl.value
    if (root instanceof HTMLFormElement)
      root.requestSubmit()
    else performSubmit()
  }

  function reset(): void {
    const next = props.defaultValue ?? []
    lastSelection = null
    history = freshHistory(next)
    dismissSuggestions()
    setValue(next, { reason: 'reset' })
    nextTick(reconcile)
  }

  useEventListener(document, 'selectionchange', () => {
    const input = inputEl.value
    if (input && document.activeElement === input && !isComposing.value) {
      lastSelection = readSelection(input)
      updateQuery()
    }
  })

  useEventListener(() => rootEl.value?.closest('form'), 'reset', (event) => {
    queueMicrotask(() => {
      if (!event.defaultPrevented)
        reset()
    })
  })

  // Suggestions

  const listId = useId()
  const listEl = shallowRef<HTMLElement | null>(null)
  const highlightedValue = shallowRef<string>()
  const registered = shallowReactive(new Map<string, RegisteredItem>())
  const enabledItems = computed(() => options.value.filter(item =>
    !item.disabled && registered.has(item.id) && !registered.get(item.id)?.disabled,
  ))
  const highlightedId = computed(() =>
    enabledItems.value.find(item => item.id === highlightedValue.value)?.id ?? enabledItems.value[0]?.id,
  )

  function selectItem(item: ComposerItemValue): void {
    const enabled = enabledItems.value.find(candidate => candidate.id === item.id)
    if (!open.value || !enabled)
      return
    selectSuggestion(enabled)
    dismissSuggestions()
    highlightedValue.value = undefined
  }

  function onSuggestionsKeydown(event: KeyboardEvent): void {
    if (!open.value || event.defaultPrevented || event.isComposing || event.keyCode === 229)
      return
    if (event.key === 'Escape') {
      event.preventDefault()
      event.stopPropagation()
      dismissSuggestions()
      highlightedValue.value = undefined
    }
    else if (event.key === 'Tab' || (event.key === 'Enter' && event.shiftKey)) {
      dismissSuggestions()
    }
    else if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault()
      const items = enabledItems.value
      if (!items.length)
        return
      const direction = event.key === 'ArrowDown'
        ? 1
        : -1
      const index = items.findIndex(item => item.id === highlightedId.value)
      const item = items[(index + direction + items.length) % items.length]
      if (!item)
        return
      highlightedValue.value = item.id
      registered.get(item.id)?.element.scrollIntoView({ block: 'nearest' })
    }
    else if (event.key === 'Enter') {
      if (!enabledItems.value.length && props.submitOnEmptySuggestions)
        return
      event.preventDefault()
      const item = enabledItems.value.find(candidate => candidate.id === highlightedId.value)
      if (item)
        selectItem(item)
    }
  }

  function onEditorKeydown(event: KeyboardEvent): void {
    if (event.defaultPrevented || isComposing.value || event.isComposing || event.keyCode === 229)
      return
    const key = event.key.toLowerCase()
    if (
      !(event.currentTarget instanceof HTMLTextAreaElement)
      && (event.metaKey || event.ctrlKey)
      && !event.altKey
      && (key === 'z' || (event.ctrlKey && key === 'y'))
    ) {
      event.preventDefault()
      historyAction(event.shiftKey || key === 'y'
        ? 'redo'
        : 'undo')
      return
    }
    const submitOnEnter = props.submitOnEnter ?? 'always'
    if (
      event.key === 'Enter'
      && !event.shiftKey
      && (submitOnEnter === 'always' || (submitOnEnter === 'desktop' && window.matchMedia('(pointer: fine)').matches))
    ) {
      event.preventDefault()
      submit()
    }
  }

  // Copies the selected part of the draft as text and as tokens; false when there is nothing of ours to copy.
  function copySelection(event: ClipboardEvent): Selection | null {
    const input = event.currentTarget as HTMLElement
    if (event.defaultPrevented || input instanceof HTMLTextAreaElement)
      return null
    const selection = selectionInside(input, true)
    if (!selection)
      return null
    const fragment = document.createElement('div')
    fragment.append(selection.getRangeAt(0).cloneContents())
    const copiedValue = readValue(fragment, false)
    event.clipboardData?.setData('text/plain', getComposerText(copiedValue))
    event.clipboardData?.setData(COMPOSER_CLIPBOARD_TYPE, JSON.stringify(copiedValue))
    event.preventDefault()
    return selection
  }

  const inputListeners: ComposerEditor['inputListeners'] = {
    keydown(event: KeyboardEvent) {
      onSuggestionsKeydown(event)
      onEditorKeydown(event)
    },
    keyup(event: KeyboardEvent) {
      if (!event.defaultPrevented && !isComposing.value)
        updateQuery()
    },
    click: updateQuery,
    focus(event: FocusEvent) {
      const input = event.currentTarget as HTMLElement
      if (input instanceof HTMLTextAreaElement || locked.value || isComposing.value || readValue(input).length > 0)
        return
      // Before focusin, so Safari doesn't pan to reveal the empty editor's caret inside a drawer.
      input.ownerDocument.getSelection()?.setBaseAndExtent(input, 0, input, 0)
    },
    blur(event: FocusEvent) {
      lastSelection = readSelection(event.currentTarget as HTMLElement) ?? lastSelection
      dismissSuggestions()
    },
    beforeinput(event: InputEvent) {
      const input = event.currentTarget as HTMLElement
      if (event.defaultPrevented || input instanceof HTMLTextAreaElement)
        return
      if (locked.value || event.inputType.startsWith('format')) {
        event.preventDefault()
      }
      else if (event.inputType === 'historyUndo' || event.inputType === 'historyRedo') {
        event.preventDefault()
        historyAction(event.inputType === 'historyUndo'
          ? 'undo'
          : 'redo')
      }
      else if (!isComposing.value) {
        pendingInput = {
          type: event.inputType,
          selection: readSelection(input),
        }
      }
    },
    input() {
      if (!ignoreCompositionInput)
        publish()
    },
    compositionstart() {
      pendingInput = {
        type: 'composition',
        selection: inputEl.value
          ? readSelection(inputEl.value)
          : null,
      }
      isComposing.value = true
      compositionValue = value.value
      query.value = null
    },
    compositionend() {
      isComposing.value = false
      ignoreCompositionInput = true
      queueMicrotask(() => {
        ignoreCompositionInput = false
      })
      if (equalValue(compositionValue, value.value))
        publish()
      nextTick(reconcile)
    },
    copy: copySelection,
    cut(event: ClipboardEvent) {
      const selection = copySelection(event)
      if (!selection || locked.value || isComposing.value)
        return
      pendingInput = {
        type: 'cut',
        selection: readSelection(event.currentTarget as HTMLElement),
      }
      selection.getRangeAt(0).deleteContents()
      publish()
    },
    paste(event: ClipboardEvent) {
      const input = event.currentTarget as HTMLElement
      if (event.defaultPrevented || input instanceof HTMLTextAreaElement)
        return
      event.preventDefault()
      if (locked.value || isComposing.value)
        return
      pendingInput = {
        type: 'paste',
        selection: readSelection(input),
      }
      const pastedValue = parseComposerClipboard(event.clipboardData?.getData(COMPOSER_CLIPBOARD_TYPE) ?? '')
      if (pastedValue) {
        const selection = selectionInside(input, false)
        if (!selection)
          return
        const range = selection.getRangeAt(0)
        range.deleteContents()
        const fragment = document.createElement('div')
        writeValue(fragment, pastedValue)
        const nodes = Array.from(fragment.childNodes).filter(node =>
          !(node instanceof HTMLElement && node.hasAttribute('data-composer-placeholder')),
        )
        const last = nodes.at(-1)
        for (const node of nodes.reverse())
          range.insertNode(node)
        if (last)
          range.setStartAfter(last)
        range.collapse(true)
        selection.removeAllRanges()
        selection.addRange(range)
      }
      else {
        insertPlainText(input, event.clipboardData?.getData('text/plain') ?? '')
      }
      publish()
    },
    drop(event: DragEvent) {
      const input = event.currentTarget as HTMLElement
      if (event.defaultPrevented || input instanceof HTMLTextAreaElement)
        return
      event.preventDefault()
      if (locked.value || isComposing.value)
        return
      const text = event.dataTransfer?.getData('text/plain')
      if (!text)
        return
      const documentWithCaret = document as Document & {
        caretPositionFromPoint?: (x: number, y: number) => { offsetNode: Node, offset: number } | null
        caretRangeFromPoint?: (x: number, y: number) => Range | null
      }
      const position = documentWithCaret.caretPositionFromPoint?.(event.clientX, event.clientY)
      const range = documentWithCaret.caretRangeFromPoint?.(event.clientX, event.clientY)
      const node = position?.offsetNode ?? range?.startContainer
      const offset = position?.offset ?? range?.startOffset
      if (!node || offset === undefined || !input.contains(node))
        return
      const token = (node instanceof Element
        ? node
        : node.parentElement)?.closest('[data-composer-token]')
      if (token) {
        const afterToken = document.createRange()
        afterToken.setStartAfter(token)
        afterToken.collapse(true)
        const selection = window.getSelection()
        selection?.removeAllRanges()
        selection?.addRange(afterToken)
      }
      else {
        window.getSelection()?.collapse(node, offset)
      }
      input.focus({ preventScroll: true })
      pendingInput = {
        type: 'drop',
        selection: readSelection(input),
      }
      insertPlainText(input, text)
      publish()
    },
  }

  const suggestionsEnabled = computed(() =>
    triggers.value.length > 0 && !isTextarea.value && !isComposing.value && !locked.value,
  )

  const editor: ComposerEditor = {
    value,
    isEmpty,
    canSubmit,
    disabled,
    readOnly,
    status: computed(() => trigger.value?.status ?? 'ready'),
    layout: computed(() => props.layout ?? 'stacked'),
    isTextarea,
    isComposing,
    rootEl,
    inputEl,
    tokenHosts,
    inputAttrs: computed(() => {
      const enabled = suggestionsEnabled.value || undefined
      const highlighted = open.value && listEl.value && highlightedId.value
        ? registered.get(highlightedId.value)?.element.id
        : undefined
      return {
        'contenteditable': isTextarea.value
          ? undefined
          : !locked.value,
        'role': 'textbox',
        'tabindex': disabled.value
          ? -1
          : 0,
        'aria-disabled': disabled.value || undefined,
        'aria-readonly': readOnly.value || undefined,
        'aria-multiline': true,
        'aria-autocomplete': enabled && 'list',
        'aria-haspopup': enabled && 'listbox',
        'aria-controls': (open.value && listEl.value?.id) || undefined,
        'aria-activedescendant': highlighted || undefined,
      }
    }),
    inputListeners,
    submit,
    insertTrigger,
    reset,
    onFormSubmit(event) {
      if (event.defaultPrevented || event.target !== event.currentTarget)
        return
      event.preventDefault()
      performSubmit()
    },
    open,
    onOpenChange(nextOpen) {
      if (nextOpen)
        return
      highlightedValue.value = undefined
      dismissSuggestions()
    },
    items: options,
    listId,
    listEl,
    highlightedId,
    announcement: computed(() =>
      open.value && listEl.value && enabledItems.value.length
        ? (props.getSuggestionsAnnouncement ?? defaultAnnouncement)(enabledItems.value.length)
        : '',
    ),
    registerItem(id, item) {
      if (item)
        registered.set(id, item)
      else registered.delete(id)
    },
    highlightItem(item) {
      highlightedValue.value = item.id
    },
    selectItem,
  }

  provide(composerKey, editor)
  return editor
}

export function focusComposerInput(event: MouseEvent, preventDefault: boolean): void {
  const root = event.currentTarget as HTMLElement
  if (event.defaultPrevented || !(event.target instanceof Element))
    return
  const interactive = event.target.closest(
    'button, a, input, select, textarea, label, summary, [data-slot=\'composer-input\'], [contenteditable], [role=\'button\'], [role=\'combobox\'], [role=\'menuitem\'], [tabindex]:not([tabindex=\'-1\'])',
  )
  if (interactive && interactive !== root && root.contains(interactive))
    return
  const input = root.querySelector<HTMLElement>('[data-slot="composer-input"]')
  if (!input || input.matches(':disabled, [aria-disabled=\'true\']'))
    return
  if (preventDefault)
    event.preventDefault()
  input.focus()
}
