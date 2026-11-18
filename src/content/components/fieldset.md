---
preview: fieldset-1
---

## Usage

```ts
import { Fieldset, FieldsetLegend } from '@/components/ui/fieldset'
```

```vue
<Fieldset>
  <FieldsetLegend>Fieldset legend</FieldsetLegend>
</Fieldset>
```

## API Reference

### Fieldset

Root component. Wrapper for `Fieldset.Root` from Vase UI. It has no default layout; pass `class` for spacing (for example `flex w-full flex-col gap-6`).

### FieldsetLegend

Legend for the fieldset. Styled wrapper for `Fieldset.Legend` from Vase UI with semibold font weight.
