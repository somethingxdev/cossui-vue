---
preview: command-1
---

## Usage

```ts
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandDialog,
  CommandDialogPopup,
  CommandDialogTrigger,
  CommandEmpty,
  CommandFooter,
  CommandGroup,
  CommandGroupLabel,
  CommandInput,
  CommandItem,
  CommandList,
  CommandPanel,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command'
```

```vue
<script setup lang="ts">
const items = [
  { value: 'linear', label: 'Linear' },
  { value: 'figma', label: 'Figma' },
  { value: 'slack', label: 'Slack' },
]
</script>

<template>
  <CommandDialog>
    <CommandDialogTrigger :as="Button" variant="outline">
      Open Command Palette
    </CommandDialogTrigger>

    <CommandDialogPopup aria-label="Command palette">
      <Command>
        <CommandInput aria-label="Search" placeholder="Search..." />
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandList>
          <CommandItem v-for="item in items" :key="item.value" :value="item.value">
            {{ item.label }}
          </CommandItem>
        </CommandList>
      </Command>
    </CommandDialogPopup>
  </CommandDialog>
</template>
```

Items are written in the template and filter themselves as the user types; there is no `items` render
function and no `CommandCollection`. `@action` on `Command` reports the value of the command that ran, by
Enter or by a click.

## API Reference

### Command

The root component. It wraps the UI SDK `Command` with `filter="contains"` as the default. The first command
is highlighted from the start, and the best match as the user types.

| Prop            | Type                                                         | Default      | Description                                      |
| --------------- | ------------------------------------------------------------ | ------------ | ------------------------------------------------ |
| `filter`        | `'contains' \| 'startsWith' \| 'fuzzy' \| function \| false` | `'contains'` | How typing narrows the list                      |
| `autoHighlight` | `boolean`                                                    | `true`       | Controls automatic highlighting of items         |
| `@action`       | `(value: string) => void`                                    | -            | Runs when a command runs, with its value         |
| `class`         | `string`                                                     | -            | Additional CSS classes to apply to the component |
| `...props`      | UI SDK Command props                                         | -            | All UI SDK Command props are supported           |

### CommandDialog

A wrapper component that provides the dialog root functionality. It's an alias for `Dialog` from UI SDK.

| Prop           | Type                | Description                                |
| -------------- | ------------------- | ------------------------------------------ |
| `v-model:open` | `boolean`           | Controls whether the dialog is open        |
| `@open-change` | `function`          | Callback fired when the open state changes |
| `...props`     | UI SDK Dialog props | All dialog props are supported             |

`CommandCreateHandle` is `createDialogController`: pass its result as `controller` to open the palette from a
trigger outside `CommandDialog`.

### CommandDialogTrigger

The trigger button that opens the command dialog. Renders as a button by default.

| Prop       | Type                        | Description                            |
| ---------- | --------------------------- | -------------------------------------- |
| `as`       | `string \| Component`       | Component to render as the trigger     |
| `...props` | UI SDK Dialog Trigger props | All dialog trigger props are supported |

### CommandDialogPopup

The popup content container that displays the command palette inside a dialog. It renders its backdrop.

| Prop       | Type                        | Description                                      |
| ---------- | --------------------------- | ------------------------------------------------ |
| `class`    | `string`                    | Additional CSS classes to apply to the component |
| `...props` | UI SDK Dialog Content props | All dialog content props are supported           |

### CommandInput

The search input field with an integrated search icon, sized `lg`.

| Prop          | Type             | Description                                      |
| ------------- | ---------------- | ------------------------------------------------ |
| `placeholder` | `string`         | The placeholder text for the input               |
| `class`       | `string`         | Additional CSS classes to apply to the component |
| `...props`    | Input attributes | All input attributes are supported               |

### CommandList

A scrollable container for command items.

### CommandPanel

A container component that provides styling for command content outside of dialogs. Useful when building standalone command interfaces with a bordered, elevated appearance.

### CommandEmpty

Displays a message when no results are found.

### CommandGroup

Groups related command items together. It disappears when filtering leaves it empty.

### CommandGroupLabel

Displays a label for a command group.

### CommandItem

An individual selectable command item.

| Prop       | Type                      | Description                                                    |
| ---------- | ------------------------- | -------------------------------------------------------------- |
| `value`    | `string`                  | The value of the item, reported by `@action`                   |
| `label`    | `string`                  | The text the search matches, when the content isn't plain text |
| `keywords` | `string[]`                | More words the search matches                                  |
| `class`    | `string`                  | Additional CSS classes to apply to the component               |
| `...props` | UI SDK Command Item props | All command item props are supported                           |

### CommandSeparator

A visual separator between command groups or items. Includes default vertical spacing with `my-2`.

### CommandShortcut

Displays keyboard shortcuts in a styled `kbd` element.

### CommandFooter

A footer section for displaying hints or additional keyboard shortcuts. Renders as a styled `div` with padding and border.

## Examples

### With Keyboard Shortcut

You can add a keyboard shortcut to open the command palette:

```ts
import { useEventListener } from '@vueuse/core'

useEventListener('keydown', (event: KeyboardEvent) => {
  if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
    event.preventDefault()
    open.value = !open.value
  }
})
```

### With Grouped Items

```vue
<script setup lang="ts">
const groupedItems = [
  {
    value: 'Suggestions',
    items: [
      { value: 'linear', label: 'Linear' },
      { value: 'figma', label: 'Figma' },
    ],
  },
  {
    value: 'Commands',
    items: [
      { value: 'clipboard', label: 'Clipboard History' },
      { value: 'settings', label: 'System Preferences' },
    ],
  },
]
</script>

<template>
  <Command>
    <CommandInput aria-label="Search" placeholder="Search..." />
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandList>
      <template v-for="group in groupedItems" :key="group.value">
        <CommandGroup>
          <CommandGroupLabel>{{ group.value }}</CommandGroupLabel>
          <CommandItem v-for="item in group.items" :key="item.value" :value="item.value">
            {{ item.label }}
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
      </template>
    </CommandList>
  </Command>
</template>
```

### Standalone Command (Without Dialog)

You can use the Command component without a dialog wrapper:

```vue
<Command>
  <CommandInput aria-label="Command" placeholder="Type a command..." />
  <CommandEmpty>No results found.</CommandEmpty>
  <CommandList>
    <CommandItem v-for="item in items" :key="item.value" :value="item.value">
      {{ item.label }}
    </CommandItem>
  </CommandList>
</Command>
```
