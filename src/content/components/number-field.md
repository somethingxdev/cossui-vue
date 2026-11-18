---
preview: number-field-1
---

## Usage

```ts
import {
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
  NumberFieldScrubArea,
} from '@/components/ui/number-field'
```

```vue
<NumberField :default-value="0">
  <NumberFieldScrubArea label="Quantity" />
  <NumberFieldGroup>
    <NumberFieldDecrement />
    <NumberFieldInput />
    <NumberFieldIncrement />
  </NumberFieldGroup>
</NumberField>
```

## API Reference

### NumberField

Root component. Styled wrapper for `NumberInput` from [UI SDK](https://ui-sdk.dev/docs/components/number-input). Supports `v-model:value` (`number`, or `null` when empty) and the `@value-change` and `@value-commit` events. `id` goes to the input, so an external label can point at it.

| Prop   | Type                        | Default     | Description                                           |
| ------ | --------------------------- | ----------- | ----------------------------------------------------- |
| `size` | `"sm" \| "default" \| "lg"` | `"default"` | Controls the size of all child components via context |

### NumberFieldGroup

Container for the input and buttons. Styled wrapper for `NumberInputGroup` from UI SDK.

### NumberFieldInput

Input element for the number value. Styled wrapper for `NumberInputControl` from UI SDK.

### NumberFieldIncrement

Button to increment the value. Styled wrapper for `NumberInputIncrement` from UI SDK with plus icon.

### NumberFieldDecrement

Button to decrement the value. Styled wrapper for `NumberInputDecrement` from UI SDK with minus icon.

### NumberFieldScrubArea

Draggable area for scrubbing the value. Styled wrapper for `NumberInputScrubArea` and `NumberInputScrubAreaCursor` from UI SDK.

| Prop    | Type     | Default | Description                            |
| ------- | -------- | ------- | -------------------------------------- |
| `label` | `string` | -       | Label text displayed in the scrub area |

## Examples

For accessible labelling and validation, prefer using the `Field` component to wrap number fields. See the related example: [Number field](/docs/components/field#number-field).

### Small Size

<ComponentPreview name="number-field-2" />

### Large Size

<ComponentPreview name="number-field-3" />

### Disabled

<ComponentPreview name="number-field-4" />

### With External Label

<ComponentPreview name="number-field-5" />

### With Scrub

<ComponentPreview name="number-field-6" />

### With Range

<ComponentPreview name="number-field-7" />

### With Formatted Value

<ComponentPreview name="number-field-8" />

### With Step

<ComponentPreview name="number-field-9" />

### Form Integration

<ComponentPreview name="number-field-10" />
