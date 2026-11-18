---
preview: radio-group-1
---

## Usage

```ts
import { Label } from '@/components/ui/label'
import { Radio, RadioGroup } from '@/components/ui/radio-group'
```

```vue
<RadioGroup default-value="next">
  <Label>
    <Radio value="next" /> Next.js
  </Label>
  <Label>
    <Radio value="vite" /> Vite
  </Label>
  <Label>
    <Radio value="astro" /> Astro
  </Label>
</RadioGroup>
```

## API Reference

### RadioGroup

Root component. Styled wrapper for `RadioGroup` from Vase UI with flex column layout. Supports `v-model:value`.

### Radio

Individual radio button. Styled wrapper for `Radio.Root` from Vase UI with built-in indicator. Also exported as `RadioGroupItem`.

| Prop    | Type  | Default | Description                              |
| ------- | ----- | ------- | ---------------------------------------- |
| `value` | `any` |         | The unique value of the radio (required) |

## Examples

For accessible labelling and validation, prefer using the `Field` component to wrap radio buttons. See the related example: [Radio Group field](/docs/components/field#radio-group-field).

For tabs-style mutually exclusive choices, see the Segmented Control pattern.

### Disabled

<ComponentPreview name="radio-group-2" />

### With Description

<ComponentPreview name="radio-group-3" />

### Card Style

<ComponentPreview name="radio-group-4" />

### Form Integration

<ComponentPreview name="radio-group-5" />
