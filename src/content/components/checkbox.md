---
preview: checkbox-1
---

## Usage

```ts
import { Checkbox } from '@/components/ui/checkbox'
```

```vue
<Checkbox />
```

## API Reference

### Checkbox

Styled wrapper for [`Checkbox`](https://ui-sdk.dev/docs/components/checkbox) from UI SDK. Includes a built-in indicator with checkmark and indeterminate icons. Supports `v-model:checked`; the checked state is `true`, `false` or `"indeterminate"`.

| Prop     | Type      | Description                                                           |
| -------- | --------- | --------------------------------------------------------------------- |
| `parent` | `boolean` | Makes it the parent of its `CheckboxGroup`: it checks or unchecks all |

## Examples

For accessible labelling and validation, prefer using the `Field` component to wrap checkboxes. See the related example: [Checkbox field](/docs/components/field#checkbox-field).

### Disabled

<ComponentPreview name="checkbox-2" />

### With Description

<ComponentPreview name="checkbox-3" />

### Card Style

<ComponentPreview name="checkbox-4" />

### Form Integration

Field provides accessible labelling and validation primitives for form controls. Use it with `Form` to submit values.

<ComponentPreview name="checkbox-5" />
