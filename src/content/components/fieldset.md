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

Root component. Wrapper for [`FieldSet`](https://ui-sdk.dev/docs/components/field#field-sets) from UI SDK, a native `<fieldset>`; `disabled` disables every control inside it. It has no default layout; pass `class` for spacing (for example `flex w-full flex-col gap-6`).

### FieldsetLegend

Legend for the fieldset. Styled wrapper for `FieldLegend` from UI SDK with semibold font weight.
