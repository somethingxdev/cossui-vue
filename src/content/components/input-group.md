---
preview: input-group-1
---

## Usage

```ts
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from '@/components/ui/input-group'
```

```vue
<InputGroup>
  <InputGroupInput type="email" placeholder="Email" />
  <InputGroupAddon>
    <MailIcon />
  </InputGroupAddon>
</InputGroup>
```

## API Reference

This is a custom component built with plain elements around `Input` and `Textarea`.

### InputGroup

The main component that wraps inputs and addons.

| Prop    | Type     | Description                                      |
| ------- | -------- | ------------------------------------------------ |
| `class` | `string` | Additional CSS classes to apply to the component |

### InputGroupAddon

A container for addons like icons, text, buttons, and other elements. Can be positioned at the start or end (inline), or top or bottom (block) of the input.

| Prop    | Type                                                             | Default          | Description                                                                                                                                    |
| ------- | ---------------------------------------------------------------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `align` | `"inline-start" \| "inline-end" \| "block-start" \| "block-end"` | `"inline-start"` | The position of the addon relative to the input. Use `inline-start` or `inline-end` for inputs, and `block-start` or `block-end` for textareas |
| `class` | `string`                                                         | -                | Additional CSS classes to apply to the component                                                                                               |

Note: For proper focus navigation, the `InputGroupAddon` component should be placed after the input in the DOM order.

### InputGroupText

A text container component for displaying text content within an `InputGroupAddon`. Automatically styles text with muted foreground color and handles icon sizing.

### InputGroupInput

A specialized input component for use within `InputGroup`. It's essentially an unstyled `Input` component that inherits styling from the parent `InputGroup`. All props of `Input` are supported, including `type`, `placeholder`, `disabled`, etc.

### InputGroupTextarea

A specialized textarea component for use within `InputGroup`. It's essentially an unstyled `Textarea` component that inherits styling from the parent `InputGroup`. All props of `Textarea` are supported, including `placeholder`, `disabled`, `rows`, etc.

## Examples

### With End Icon

<ComponentPreview name="input-group-2" />

### With Start Text

<ComponentPreview name="input-group-3" />

### With End Text

<ComponentPreview name="input-group-4" />

### With Start and End Text

<ComponentPreview name="input-group-5" />

### With Tooltip

<ComponentPreview name="input-group-6" />

### With Icon Button

<ComponentPreview name="input-group-7" />

### With Button

<ComponentPreview name="input-group-8" />

### With Badge

<ComponentPreview name="input-group-9" />

### With Keyboard Shortcut

<ComponentPreview name="input-group-10" />

### With Inner Label

<ComponentPreview name="input-group-11" />

### Small Size

<ComponentPreview name="input-group-12" />

### Large Size

<ComponentPreview name="input-group-13" />

### Disabled

<ComponentPreview name="input-group-14" />

### Loading

<ComponentPreview name="input-group-15" />

### With Number Field

<ComponentPreview name="input-group-16" />

### With Textarea

<ComponentPreview name="input-group-17" />
