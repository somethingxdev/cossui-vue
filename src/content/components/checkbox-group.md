---
preview: checkbox-group-1
---

## Usage

```ts
import { Checkbox } from '@/components/ui/checkbox'
import { CheckboxGroup } from '@/components/ui/checkbox-group'
```

```vue
<CheckboxGroup :default-value="['next']">
  <Label>
    <Checkbox value="next" />
    Next.js
  </Label>
  <Label>
    <Checkbox value="vite" />
    Vite
  </Label>
  <Label>
    <Checkbox value="astro" />
    Astro
  </Label>
</CheckboxGroup>
```

## API Reference

### CheckboxGroup

Styled wrapper for `CheckboxGroup` from Vase UI. Provides shared state management for a group of checkboxes with flex column layout. Supports `v-model:value`.

## Examples

For accessible group labelling and validation, prefer wrapping checkbox groups with `Field` and `Fieldset`. See the related example: [Checkbox group field](/docs/components/field#checkbox-group-field).

### With Disabled Item

<ComponentPreview name="checkbox-group-2" />

### Parent Checkbox

<ComponentPreview name="checkbox-group-3" />

### Nested Parent Checkbox

<ComponentPreview name="checkbox-group-4" />

### Form Integration

<ComponentPreview name="checkbox-group-5" />
