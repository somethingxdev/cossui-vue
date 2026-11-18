---
preview: composer-1
---

## Usage

```vue
<script setup lang="ts">
import { ArrowUpIcon } from '@lucide/vue'
import { Button } from '@/components/ui/button'
import {
  Composer,
  ComposerActionGroup,
  ComposerActions,
  ComposerInput,
  ComposerSubmit,
} from '@/components/ui/composer'
</script>

<template>
  <Composer @submit="handleSend">
    <ComposerInput aria-label="Message" placeholder="Write a message…" />
    <ComposerActions>
      <ComposerActionGroup><!-- Optional leading buttons --></ComposerActionGroup>
      <ComposerActionGroup align="end">
        <ComposerSubmit :as="Button" aria-label="Send message" size="icon">
          <ArrowUpIcon aria-hidden="true" />
        </ComposerSubmit>
      </ComposerActionGroup>
    </ComposerActions>
  </Composer>
</template>
```

`Composer` submits on Enter and inserts a line break on Shift+Enter by default. `@submit` always receives a structured draft, for either input. Use `getComposerText` when your application needs a string. The submit button automatically disables for empty drafts.

```vue
<script setup lang="ts">
import type { ComposerValue } from '@/components/ui/composer'
import { ArrowUpIcon } from '@lucide/vue'
import { shallowRef } from 'vue'
import { Button } from '@/components/ui/button'
import {
  Composer,
  ComposerActionGroup,
  ComposerActions,
  ComposerInput,
  ComposerSubmit,
  getComposerText,
} from '@/components/ui/composer'

const emit = defineEmits<{ send: [message: string] }>()
const value = shallowRef<ComposerValue>([])

function send(draft: ComposerValue) {
  emit('send', getComposerText(draft))
  value.value = []
}
</script>

<template>
  <Composer v-model:value="value" @submit="send">
    <ComposerInput as="textarea" aria-label="Message" placeholder="Write a message…" />
    <ComposerActions>
      <ComposerActionGroup align="end">
        <ComposerSubmit :as="Button" aria-label="Send message" size="icon">
          <ArrowUpIcon aria-hidden="true" />
        </ComposerSubmit>
      </ComposerActionGroup>
    </ComposerActions>
  </Composer>
</template>
```

Omit `v-model:value` for an uncontrolled draft. Submission does not clear the message automatically. For controlled drafts, update `value` synchronously in `@value-change` (as `v-model:value` does); debounce fetching or saving separately.

### Submission and custom controls

Set `submit-disabled` on `Composer` while sending or whenever your application cannot accept the message. It blocks both Enter and the submit button while leaving the draft editable. Use `disabled` to disable the input as well, or `read-only` to keep text selectable without allowing edits or submission.

```vue
<Composer :submit-disabled="sending" :allow-empty="attachments.length > 0" @submit="handleSend">
  <!-- Input and actions -->
</Composer>
```

`allow-empty` lets you send an attachment without text. `ComposerSubmit` renders as a custom button through `as`; choose its label, icon, size, and variant. Its own `disabled` prop only controls that button. Use `submit-disabled` on `Composer` for a rule that must also apply to Enter.

### Inside another form

Render `Composer` as a div to avoid nested forms. `name` adds the canonical message text to the containing form's `FormData`, for either input.

```vue
<form @submit="handleSave">
  <Composer as="div" name="message" submit-on-enter="never">
    <ComposerInput aria-label="Message" />
  </Composer>
  <Button type="submit">
    Save
  </Button>
</form>
```

In this composition, the outer form owns saving. If you also add `ComposerSubmit` or enable Enter submission, those emit the Composer's own `submit`; they do not submit the outer form. Standalone `Composer` renders a form and runs native constraint validation before it emits `submit`. Required-field validation is available on a rendered textarea; contenteditable does not support native `required` validation.

Resetting the containing form restores `default-value` (or an empty draft). Controlled owners receive `@value-change` with `reason: "reset"` and decide whether to accept it. For custom controls within Composer, `useComposerContext()` exposes the draft, `canSubmit`, `submit()`, `insertTrigger()`, and `reset()`.

### Input size

Set row limits with CSS variables on `Composer`. They apply to both the default contenteditable input and a rendered textarea. By default, the input starts at one row below `md` and two rows from `md` upward. It grows to four rows below `md` and eight rows from `md` upward. Longer drafts scroll while the controls stay visible. The maximum also stays within half the viewport height. Add attachment, microphone, or other buttons inside `ComposerActions`.

Use responsive classes to change the limits at each breakpoint:

```vue
<Composer class="[--composer-min-rows:2] [--composer-max-rows:3] md:[--composer-min-rows:3] md:[--composer-max-rows:6]">
  <ComposerInput as="textarea" aria-label="Message" />
  <ComposerActions><!-- Buttons --></ComposerActions>
</Composer>
```

Here the input shows two to three rows below `md` and three to six rows from `md` upward. Keep the minimum at or below the maximum at each breakpoint. Set these variables on `Composer` so both the input and its scroll area inherit them.

### Controls beside a short message

Set `layout="adaptive"` to place controls beside a one-line draft. When text wraps or you add a line break, the input takes the full width and the controls move below it. Both layouts use the same composition: `ComposerInput` followed by `ComposerActions`, with action groups aligned to `start` and `end`. Only the `layout` prop changes.

The adaptive layout starts at one visible row; setting `--composer-min-rows` above one keeps the controls below. Keyboard focus follows the same order in both layouts: input, leading actions, then trailing actions.

<ComponentPreview name="composer-2" />

For a native textarea, use the same layout and render the textarea in `ComposerInput`:

<ComponentPreview name="composer-3" />

## Mentions and actions

The same `Composer` composition supports mentions and slash actions.

<ComponentPreview name="composer-4" />

To extend the anatomy above, pass `:triggers="triggers"` to `Composer` and insert these parts immediately after `ComposerInput`. The demo's Code tab shows the complete composition.

```vue
<ComposerPopup>
  <ComposerList>
    <template #item="{ item }">
      <ComposerItem :value="item">
        {{ item.label }}
      </ComposerItem>
    </template>
  </ComposerList>
</ComposerPopup>
```

Configure only the triggers you need. Queries can contain spaces: `@sam r` finds Sam Rivera. A space immediately after the trigger closes the suggestions. By default, selecting an item inserts a token into the draft; it does not send the message or execute an action. Supply `@action` to handle items with `type: "action"` as commands: Composer removes the active query and calls your handler without inserting a token or submitting. Your application owns execution.

To open a trigger from a button inside `ComposerActions`, call `useComposerContext().insertTrigger("@")` or `insertTrigger("/")`. The trigger is inserted at the caret and opens the same suggestions as typing it.

```ts
const triggers: ComposerTrigger[] = [
  {
    character: '@',
    items: [
      { id: 'sam', label: 'Sam Rivera' }
    ]
  },
  {
    character: '/',
    items: [
      { id: 'summarize', label: 'Summarize', type: 'action' }
    ]
  },
]
```

Omit `triggers` and the popup parts for plain contenteditable text. Use `v-model:value` for a controlled draft, or `default-value` for an uncontrolled draft. Submission does not clear the structured draft automatically.

### Token appearance

By default, selected mentions and actions appear as `text-primary font-medium` text with their trigger (`@Sam Rivera` or `/Summarize`). To change their appearance, render each selected token in the `token` slot of `ComposerInput`. This example uses the same people, teams, and actions as the one above, but gives them rounded chips with different icons.

<ComponentPreview name="composer-5" />

The selected item's `kind` reaches the `token` slot, so a person and a team selected from the same `@` menu can use different icons or styles. The structured draft keeps `type`, `kind`, `id`, `label`, `trigger`, and optional `data` and `text`; `getComposerText(value)` returns the explicit `text` or defaults to text such as `@Sam Rivera`, even when a chip hides the trigger visually. An item's `icon` is available to the suggestion list but is not stored in the draft. A native textarea remains plain text and does not render tokens.

### Custom filtering

The default filter ignores case and accents. Set a trigger's `filter` to customize matching. `useComposerFilter` gives `contains`, `startsWith`, and `endsWith` helpers with the same matching.

<ComponentPreview name="composer-6" />

### Emoji

Give an item `type: "text"` to replace the query with its `text` as ordinary characters, instead of inserting a token. This demo uses it for Slack-style emoji: typing `:thu` suggests 👍, and selecting it replaces `:thu` with the emoji and a space. The emoji is plain draft text, so backspace, copy, undo, and `getComposerText` treat it like any typed character.

<ComponentPreview name="composer-7" />

The Composer doesn’t ship emoji data. The demo holds a curated list of about 140 common emoji, each with an `emoji`, a `shortcode`, and `keywords`, and ranks matches in `@query-change`: shortcode prefixes first, then keyword prefixes, then substrings, up to eight results. Queries shorter than two characters return no items, so the popup stays closed. Because `:` opens only after a space or at the start of the draft, times such as `10:30` and URLs such as `https://` never open it.

```vue
<script setup lang="ts">
const emoji = shallowRef<ComposerItemValue[]>([])
const triggers = computed<ComposerTrigger[]>(() => [
  { character: ':', items: emoji.value, filter: null }
])

function onQueryChange(query: ComposerQuery | null) {
  emoji.value = query?.character === ':'
    ? searchEmoji(query.text)
    : []
}
</script>

<template>
  <Composer :triggers="triggers" @query-change="onQueryChange">
    <!-- Input, popup and actions -->
  </Composer>
</template>
```

Each `searchEmoji` result is `{ id: "thumbsup", label: "thumbsup", text: "👍", type: "text" }`, so the list can show `item.text` beside `:{item.label}:`.

### Async results

Fetch results in response to `@query-change`. Use `filter: null` for prefiltered results and `itemsFor` to identify their query text. For caret-sensitive results, return the opaque `ComposerQuery.key` as the trigger’s `queryKey`; results from a different query position cannot be selected even when the text matches. Do not persist or parse the key.

A completed query with no matches closes the popup by default. Set `showEmpty: true` to keep it open and render an empty state with `ComposerStatus`. `maxQueryLength` optionally limits the query text after the trigger. When a popup has no selectable results, Enter is blocked by default; `submit-on-empty-suggestions` lets Enter follow the normal submission policy, including during loading or error states.

<ComponentPreview name="composer-8" />

### Keyboard shortcuts

While suggestions are open, ↑ and ↓ navigate, Enter selects, Escape dismisses, and Tab moves focus normally. Shift+Enter dismisses suggestions and inserts a line break. Otherwise, Enter submits and Shift+Enter inserts a line break in the native contenteditable input or textarea. Set `submit-on-enter="desktop"` to submit only with a fine pointer, or `"never"` to let Enter insert a line break.

## In a drawer

Place the composer after the scrolling `DrawerPanel` so it stays visible. Set the drawer height in your composition. Leave the Composer free to shrink in the drawer: its input scrolls in the remaining space while the action row stays visible.

<ComponentPreview name="composer-9" />

## API Reference

The editor is coss ui's own: a contenteditable element with its draft, history and clipboard handling, ported to Vue. Only `ComposerPopup` wraps a UI SDK part (`PopoverContent`).

### Composer

The styled frame and state owner for one input. It renders a form by default and works without any state props. Use `as="div"` when embedding it inside another form.

| Prop                         | Type                                                             | Default                                  | Description                                                                                           |
| ---------------------------- | ---------------------------------------------------------------- | ---------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `@submit`                    | `(value: ComposerValue) => void`                                 | -                                        | Receives the draft when submission is allowed; does not clear it                                      |
| `value` / `v-model:value`    | `ComposerValue`                                                  | -                                        | Controlled draft for either input                                                                     |
| `defaultValue`               | `ComposerValue`                                                  | `[]`                                     | Initial uncontrolled draft                                                                            |
| `@value-change`              | `(value: ComposerValue, details: ComposerChangeDetails) => void` | -                                        | Called with the next draft and the change reason                                                      |
| `triggers`                   | `readonly ComposerTrigger[]`                                     | `[]`                                     | Suggestion sources for contenteditable; omit for plain text                                           |
| `@query-change`              | `(query: ComposerQuery \| null) => void`                         | -                                        | Active suggestion query                                                                               |
| `@action`                    | `(item: ComposerItemValue, query: ComposerQuery) => void`        | -                                        | Removes the query and reports an action selection without inserting a token or submitting             |
| `submitOnEmptySuggestions`   | `boolean`                                                        | `false`                                  | Allows Enter to follow the submission policy when the open popup has no selectable results            |
| `submitOnEnter`              | `"desktop" \| "always" \| "never"`                               | `"always"`                               | Enter behavior for either input                                                                       |
| `layout`                     | `"stacked" \| "adaptive"`                                        | `"stacked"`                              | Keep actions below the input, or place them beside a one-line draft and move them below when it wraps |
| `disabled`                   | `boolean`                                                        | `false`                                  | Disables editing, suggestions, and submission                                                         |
| `readOnly`                   | `boolean`                                                        | `false`                                  | Allows selection and copying, but prevents editing and submission                                     |
| `submitDisabled`             | `boolean`                                                        | `false`                                  | Blocks all submission while allowing editing                                                          |
| `allowEmpty`                 | `boolean`                                                        | `false`                                  | Allows submission without text, for example with an attachment                                        |
| `name`                       | `string`                                                         | -                                        | Adds the plain-text draft to the containing form's data                                               |
| `getSuggestionsAnnouncement` | `(count: number) => string`                                      | English result count and navigation hint | Customizes or translates the suggestion announcement; return an empty string to silence it            |
| `as`                         | `string \| Component`                                            | `form`                                   | Replaces the frame; a div supports embedding in another form                                          |
| `class`                      | `string`                                                         | -                                        | Additional classes on the form                                                                        |
| `...attrs`                   | Form attributes                                                  | -                                        | Other native form attributes                                                                          |

### ComposerInput

The editable input with an internal ScrollArea. It connects to its parent Composer automatically. Give it an accessible name with `aria-label` or `aria-labelledby`.

| Prop                 | Type                  | Default               | Description                                                       |
| -------------------- | --------------------- | --------------------- | ----------------------------------------------------------------- |
| `as`                 | `string \| Component` | Contenteditable `div` | `"textarea"` replaces the default element with a native textarea  |
| `placeholder`        | `string`              | -                     | Placeholder for the input                                         |
| `#token="{ token }"` | slot                  | `ComposerToken`       | Renders each selected token in the contenteditable input          |
| `class`              | `string`              | -                     | Additional classes on the editable element                        |
| `...attrs`           | Element attributes    | -                     | Other attributes and listeners, forwarded to the editable element |

Set the following CSS variables on `Composer` using `class`. Row counts follow the input's actual line height, including the change from `text-base` below `md` to `text-sm` on larger screens. Vertical padding is included automatically. A rendered textarea does not need a native `rows` attribute.

| CSS variable            | Default                                               | Description                                                                           |
| ----------------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `--composer-min-rows`   | `1` below `md`, `2` from `md`; `1` in adaptive layout | Minimum visible text rows                                                             |
| `--composer-max-rows`   | `4` below `md`, `8` from `md`                         | Maximum visible text rows before scrolling                                            |
| `--composer-padding`    | `--spacing(2)`                                        | Top content spacing and bottom control spacing; the top spacing scrolls with the text |
| `--composer-max-height` | Calculated from maximum rows and padding              | Optional CSS height that replaces the row-based maximum                               |

The maximum height is also capped at `50dvh`. The four-row mobile default leaves more room for surrounding content, such as a conversation inside a drawer.

The default div has multiline textbox semantics. A rendered textarea uses the same parent-owned draft and submission policy. Use one `ComposerInput` per `Composer`.

### ComposerToken

A presentational token for the `token` slot or read-only previews. Pass the selected token and choose its appearance per item.

```vue
<ComposerInput>
  <template #token="{ token }">
    <ComposerToken :token="token" variant="chip">
      <template #icon>
        <UsersRoundIcon v-if="token.kind === 'team'" />
        <UserRoundIcon v-else />
      </template>
    </ComposerToken>
  </template>
</ComposerInput>
```

| Prop         | Type                  | Default     | Description                                                     |
| ------------ | --------------------- | ----------- | --------------------------------------------------------------- |
| `variant`    | `"default" \| "chip"` | `"default"` | Text with trigger, or rounded chip without a visible trigger    |
| `token`      | `ComposerTokenPart`   | required    | Selected token, including its trigger, label, and optional kind |
| `#icon`      | slot                  | -           | Optional icon in the chip variant                               |
| default slot | slot                  | token label | Overrides the visible label                                     |
| `class`      | `string`              | -           | Additional classes on the token                                 |

### ComposerActions

Contains the action groups in either layout. Place it after `ComposerInput` so controls remain outside the scrolling draft. The standard layout always shows a bottom row; the adaptive layout places its groups beside short drafts and below longer ones. Apply button spacing and appearance to the groups and buttons.

### ComposerActionGroup

A group of controls within `ComposerActions`. Put the leading group first and the trailing group after it in both layouts.

| Prop    | Type               | Default   | Description                                                                                                             |
| ------- | ------------------ | --------- | ----------------------------------------------------------------------------------------------------------------------- |
| `align` | `"start" \| "end"` | `"start"` | Places the group on the leading or trailing side of the input in the compact layout, or of the bottom row when expanded |
| `class` | `string`           | -         | Additional classes on the group                                                                                         |

### ComposerSubmit

A submit control that renders a native button by default. Pass `Button` through `as` to choose its appearance, icon, and accessible name. It uses the parent's submission policy for either input. Setting `disabled` changes this button's state; it never bypasses the parent submission gate.

| Prop       | Type                  | Default       | Description                                                                                                         |
| ---------- | --------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------- |
| `as`       | `string \| Component` | Native button | Replaces the button element, for example with `Button`                                                              |
| `disabled` | `boolean`             | `!canSubmit`  | Overrides this button’s disabled state; use `submitDisabled` on Composer to block Enter too                         |
| `...attrs` | Button attributes     | -             | Native button attributes, including `aria-label`; type is `"button"`; clicking requests submission through Composer |

### ComposerPopup

A styled UI SDK `PopoverContent`. `Composer` controls its visibility.

| Prop          | Type                         | Default            | Description                                 |
| ------------- | ---------------------------- | ------------------ | ------------------------------------------- |
| `anchor`      | Popover anchor               | The Composer frame | Element used to position and size the popup |
| `side`        | Popover side                 | `"top"`            | Preferred side of the anchor                |
| `align`       | Popover align                | `"start"`          | Alignment along the anchor                  |
| `sideOffset`  | `number`                     | `4`                | Space between popup and anchor              |
| `alignOffset` | `number`                     | -                  | Alignment adjustment                        |
| `class`       | `string`                     | -                  | Additional classes on the popup             |
| `...props`    | UI SDK Popover Content props | -                  | Other popup props                           |

The popup anchors to the Composer frame and preserves editor focus automatically. Pass `anchor` to override its position.

### ComposerList

A scrollable result surface. It supplies listbox semantics and renders its `item` slot for each current suggestion.

| Prop                      | Type                  | Default | Description                                                                          |
| ------------------------- | --------------------- | ------- | ------------------------------------------------------------------------------------ |
| `#item="{ item, index }"` | slot                  | -       | A renderer for the current suggestions; without it, the default slot holds the items |
| `as`                      | `string \| Component` | `div`   | Replaces the list element                                                            |
| `class`                   | `string`              | -       | Additional classes on the list element                                               |

### ComposerItem

A styled button for a result. Pass `value` to connect selection and keyboard highlighting in its parent `Composer`.

| Prop       | Type                  | Default  | Description                          |
| ---------- | --------------------- | -------- | ------------------------------------ |
| `value`    | `ComposerItemValue`   | -        | Candidate item to select in the list |
| `disabled` | `boolean`             | `false`  | Prevents selection                   |
| `as`       | `string \| Component` | `button` | Replaces the button element          |
| `class`    | `string`              | -        | Additional classes on the item       |

The item sets `data-highlighted` and `data-disabled`, and passes `highlighted` and `disabled` to its default slot.

### ComposerStatus

A status message inside a popup, such as loading feedback. Its role is `"status"`.

| Prop    | Type                  | Default | Description                      |
| ------- | --------------------- | ------- | -------------------------------- |
| `as`    | `string \| Component` | `div`   | Replaces the status element      |
| `class` | `string`              | -       | Additional classes on the status |

## Drafts and triggers

### Draft and trigger types

```ts
type ComposerValue = readonly ComposerPart[]

type ComposerPart
  = | { type: 'text', text: string }
    | { type: 'mention' | 'action', id: string, label: string, trigger: string, kind?: string, data?: string, text?: string }

type ComposerTokenPart = Exclude<ComposerPart, { type: 'text' }>

interface ComposerItemValue {
  id: string
  label: string
  disabled?: boolean
  description?: string
  icon?: Component
  type?: 'mention' | 'action' | 'text'
  kind?: string
  data?: string
  text?: string
}

interface ComposerQuery { character: string, text: string, key: string }
```

Item IDs must be unique within each trigger. Set `disabled: true` on an item to skip it during keyboard navigation and prevent selection. `type` defaults to `"mention"`; set `"action"` for slash actions, or `"text"` to insert the item’s `text` (or its `label`) as plain characters instead of a token. Use `kind` for your own categories, such as `"person"` and `"team"`, even when both come from `@`. The selected part retains `kind`. `getComposerText(value)` uses a token’s optional `text` field, or falls back to its trigger and label. Optional `data` is an opaque string preserved through editing, undo/redo, and supported structured copy/paste; the editor never interprets it as HTML. Keep domain validation and authorization in your application.

`ComposerTrigger` configures one source:

| Field            | Type                                 | Default              | Description                                                                                           |
| ---------------- | ------------------------------------ | -------------------- | ----------------------------------------------------------------------------------------------------- |
| `character`      | `string`                             | required             | Trigger, such as `"@"` or `"/"`                                                                       |
| `items`          | `readonly ComposerItemValue[]`       | required             | Candidate results                                                                                     |
| `filter`         | `((item, query) => boolean) \| null` | label contains query | Custom matching; `null` uses prefiltered results                                                      |
| `itemsFor`       | `string`                             | -                    | Query the async items belong to                                                                       |
| `queryKey`       | `string`                             | -                    | Opaque query identity returned by `@query-change`; mismatched results cannot be selected              |
| `showEmpty`      | `boolean`                            | `false`              | Keeps the popup open when there are no ready matches                                                  |
| `maxQueryLength` | `number`                             | Unlimited            | Maximum query text length after the trigger                                                           |
| `status`         | `"ready" \| "loading" \| "error"`    | `"ready"`            | Loading/error feedback keeps the popup open; zero ready matches hide it unless `showEmpty` is enabled |

### Draft lifecycle

Copying or cutting includes the token’s `text`, or its trigger and label by default, in plain text. It also writes `application/x-coss-composer` data so compatible composers can preserve tokens and metadata. Structured paste validates the document shape and accepts at most 1,000 parts and 100,000 serialized characters; unsupported or invalid structured data falls back to plain text. External text, HTML, and dropped text do not acquire mention IDs. Clipboard metadata is untrusted input and never grants access to application records. Display icons are not part of the submitted document.

Contenteditable edits have a local undo history, including token insertion, paste, and cut. Replacing the draft externally or resetting it starts a new history. Selection is preserved and clamped to the updated draft. If an external value changes during IME composition, it is applied after composition finishes. A native textarea keeps its browser editing history.

`ComposerChangeDetails.reason` is `"input"`, `"selection"` (selecting a suggestion), `"history"` (contenteditable undo/redo), or `"reset"`.

### useComposerContext

Import this composable from the same Composer module and use it inside a descendant component to build custom controls. The state values are refs.

```vue
<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { useComposerContext } from '@/components/ui/composer'

const { isEmpty, reset } = useComposerContext()
</script>

<template>
  <Button type="button" :disabled="isEmpty" @click="reset">
    Reset
  </Button>
</template>
```

| Return value               | Description                                                                                                                                                       |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `value`                    | Current `ComposerValue`                                                                                                                                           |
| `isEmpty`                  | Whether the draft contains no text or tokens                                                                                                                      |
| `canSubmit`                | Whether the shared submission policy permits sending                                                                                                              |
| `disabled`                 | Whether the Composer is disabled                                                                                                                                  |
| `readOnly`                 | Whether editing is read-only                                                                                                                                      |
| `status`                   | Active trigger's loading state                                                                                                                                    |
| `submit()`                 | Requests submission, including native validation for a form frame                                                                                                 |
| `insertTrigger(character)` | Inserts a configured trigger at the caret, separating it from surrounding text when needed, then opens its suggestions. Available with the contenteditable input. |
| `reset()`                  | Restores the initial draft, or requests a reset from the controlled owner                                                                                         |

Listeners you set on `ComposerInput` run before Composer's handlers. Call `event.preventDefault()` to override a supported keyboard or clipboard action. Keep application business rules on Composer so they apply to both keyboard and pointer submission.
