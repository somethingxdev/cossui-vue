<script setup lang="ts">
import type { Component, HTMLAttributes } from 'vue'
import type { ComposerTokenPart } from './document'
import { unrefElement, useEventListener, useResizeObserver } from '@vueuse/core'
import { computed, onUpdated, shallowRef, useTemplateRef, watch } from 'vue'
import { cn } from '../../../lib/utils'
import { ScrollArea } from '../scroll-area'
import ComposerToken from './ComposerToken.vue'
import { useComposerEditor } from './editor'

interface Props {
  as?: string | Component
  placeholder?: string
  class?: HTMLAttributes['class']
}

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<Props>(), { as: 'div' })

defineSlots<{
  token?: (props: { token: ComposerTokenPart }) => unknown
}>()

const editor = useComposerEditor()
const scroll = useTemplateRef('scroll')
const input = shallowRef<HTMLElement | null>(null)
const textarea = computed(() => editor?.isTextarea.value ?? false)

function setInput(element: unknown): void {
  input.value = element as HTMLElement | null
  if (editor)
    editor.inputEl.value = input.value
}

const hostIds = new WeakMap<HTMLSpanElement, number>()
let nextHostId = 0
const tokens = computed(() => (editor?.tokenHosts.value ?? []).flatMap((host) => {
  const node = host.parentElement
  if (!node)
    return []
  if (!hostIds.has(host))
    hostIds.set(host, ++nextHostId)
  const { composerToken, id = '', label = '', trigger = '@', kind, data, text } = node.dataset
  const token: ComposerTokenPart = {
    type: composerToken === 'action'
      ? 'action'
      : 'mention',
    id,
    label,
    trigger,
    ...(kind
      ? { kind }
      : {}),
    ...(data !== undefined
      ? { data }
      : {}),
    ...(text !== undefined
      ? { text }
      : {}),
  }
  return [
    {
      host,
      key: hostIds.get(host),
      token,
    },
  ]
}))

watch(tokens, (items) => {
  for (const { host } of items) {
    const fallback = host.previousElementSibling
    if (fallback instanceof HTMLElement)
      fallback.hidden = true
  }
}, { flush: 'post' })

// Sizes the scroll area from the input's real line height, and moves the actions of the adaptive layout
// below the input once the draft needs a second line.
const controls = shallowRef<HTMLElement[]>([])
let animationFrame: number | null = null

function scheduleMeasure(): void {
  animationFrame ??= requestAnimationFrame(() => {
    animationFrame = null
    measure()
  })
}

function measure(): void {
  const scrollEl = unrefElement(scroll) as HTMLElement | null | undefined
  const inputEl = input.value
  if (!scrollEl || !inputEl)
    return
  const frame = scrollEl.closest<HTMLElement>('[data-slot="composer"]')
  // The groups themselves: their wrapper has no box in the compact layout.
  const nextControls = Array.from(frame?.querySelectorAll<HTMLElement>(
    ':scope > [data-slot="composer-actions"] > [data-slot="composer-action-group"]',
  ) ?? [])
  if (nextControls.length !== controls.value.length || nextControls.some((control, index) => control !== controls.value[index]))
    controls.value = nextControls
  const style = getComputedStyle(inputEl)
  const lineHeight = Number.parseFloat(style.lineHeight) || Number.parseFloat(style.fontSize) * 1.2
  const padding = Number.parseFloat(style.paddingTop) + Number.parseFloat(style.paddingBottom)
  for (const [property, value] of [
    ['--composer-line-height', `${lineHeight}px`],
    ['--composer-input-padding', `${padding}px`],
  ] as const) {
    if (scrollEl.style.getPropertyValue(property) !== value)
      scrollEl.style.setProperty(property, value)
  }
  if (!frame || frame.dataset.layout !== 'adaptive' || !controls.value.length) {
    frame?.removeAttribute('data-multiline')
    return
  }
  if (Number.parseFloat(style.getPropertyValue('--composer-min-rows')) > 1) {
    frame.toggleAttribute('data-multiline', true)
    return
  }
  // Measure at the narrow, one-line width even after the actions move below.
  // This keeps the layout from oscillating when full-width text fits one line.
  frame.removeAttribute('data-multiline')
  const minHeight = inputEl.style.getPropertyValue('min-height')
  const minHeightPriority = inputEl.style.getPropertyPriority('min-height')
  inputEl.style.setProperty('min-height', '0px', 'important')
  const contentHeight = inputEl.scrollHeight
  if (minHeight)
    inputEl.style.setProperty('min-height', minHeight, minHeightPriority)
  else inputEl.style.removeProperty('min-height')
  frame.toggleAttribute('data-multiline', contentHeight > lineHeight * 1.5 + padding)
}

useResizeObserver(
  () => [
    input.value,
    input.value?.closest<HTMLElement>('[data-slot="composer"]'),
    ...controls.value,
  ],
  scheduleMeasure,
)
useEventListener(input, 'input', scheduleMeasure)
useEventListener(window, 'resize', scheduleMeasure)
useEventListener(() => document.fonts, 'loadingdone', scheduleMeasure)
// Controlled drafts, the layout prop and conditional actions change without an input event.
watch(() => [input.value, editor?.value.value, editor?.layout.value], () => measure(), { flush: 'post' })
onUpdated(scheduleMeasure)

defineExpose({ element: input })
</script>

<template>
  <ScrollArea
    ref="scroll"
    data-slot="composer-scroll-area"
    class="in-[[data-layout=adaptive][data-multiline]]:col-span-full in-[[data-layout=adaptive][data-multiline]]:col-start-1 in-data-[layout=adaptive]:col-start-2 in-data-[layout=adaptive]:row-start-1 flex h-auto! min-h-0 min-w-0 flex-col in-[[data-layout=adaptive][data-multiline]]:self-stretch in-[[data-layout=adaptive]:not([data-multiline])]:rounded-none rounded-t-[inherit] text-base [--composer-scroll-padding:var(--composer-padding)] in-[[data-layout=adaptive]:not([data-multiline])]:[--composer-scroll-padding:0px] **:data-[slot=scroll-area-viewport]:h-auto! **:data-[slot=scroll-area-viewport]:max-h-[min(var(--composer-max-height,calc(var(--composer-max-rows,8)*var(--composer-line-height,1lh)+var(--composer-input-padding,--spacing(2))+var(--composer-scroll-padding))),50dvh)] **:data-[slot=scroll-area-viewport]:min-h-0 **:data-[slot=scroll-area-content]:pt-[max(0px,calc(var(--composer-scroll-padding)-1px))] **:data-[slot=scroll-area-viewport]:pb-0! md:text-sm"
    overscroll-contain
    scroll-fade
  >
    <!-- No children: the editor owns the content of the element. Listeners in $attrs run before the editor's. -->
    <component
      :is="props.as"
      :ref="setInput"
      data-slot="composer-input"
      :data-empty="!textarea && editor?.isEmpty.value && !editor.isComposing.value ? '' : undefined"
      :placeholder="textarea ? props.placeholder : undefined"
      :data-placeholder="props.placeholder"
      :aria-placeholder="editor ? props.placeholder : undefined"
      :class="cn(
        'field-sizing-content wrap-anywhere relative block min-h-[calc(var(--composer-min-rows,1)*1lh+--spacing(2))] w-full min-w-0 resize-none whitespace-pre-wrap border-0 bg-transparent in-[[data-layout=adaptive]:not([data-multiline])]:px-1 px-[calc(--spacing(3)-1px)] py-1 outline-none placeholder:text-muted-foreground/72 data-empty:before:pointer-events-none data-empty:before:absolute data-empty:before:text-muted-foreground/72 data-empty:before:content-[attr(data-placeholder)] md:in-data-[layout=adaptive]:min-h-[calc(var(--composer-min-rows,1)*1lh+--spacing(2))] md:min-h-[calc(var(--composer-min-rows,2)*1lh+--spacing(2))]',
        props.class,
      )"
      v-bind="{ ...editor?.inputAttrs.value, ...$attrs }"
      v-on="editor?.inputListeners ?? {}"
    />
  </ScrollArea>
  <Teleport v-for="item in tokens" :key="item.key" :to="item.host">
    <slot name="token" :token="item.token">
      <ComposerToken :token="item.token" />
    </slot>
  </Teleport>
</template>
