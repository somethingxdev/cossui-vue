---
preview: spinner-1
---

## Usage

```ts
import { Spinner } from '@/components/ui/spinner'
```

```vue
<Spinner />
```

## API Reference

### Spinner

Use the `Spinner` component to display a loading indicator. It renders the `Loader2Icon` from `@lucide/vue` with `role="status"` and `aria-label="Loading"`, so any Lucide icon prop (e.g. `size`, `stroke-width`) passes through.

| Prop    | Type     | Default |
| ------- | -------- | ------- |
| `class` | `string` |         |

## Examples

### Input Group

<ComponentPreview name="spinner-2" />

### Button

<ComponentPreview name="button-18" />
