---
preview: breadcrumb-1
---

## Usage

```ts
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
```

```vue
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbEllipsis />
    </BreadcrumbItem>
    <BreadcrumbItem>
      <BreadcrumbLink href="/components">Components</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

## API Reference

This is a custom component built with plain elements, not a wrapper of a UI SDK part.

### Breadcrumb

Root navigation container with `aria-label="breadcrumb"`.

### BreadcrumbList

Ordered list container for breadcrumb items.

### BreadcrumbItem

Individual breadcrumb item container.

### BreadcrumbLink

Link element for navigable breadcrumb items. Supports the `as` prop to use custom link components (e.g., `RouterLink`).

| Prop | Type                  | Default | Description                                        |
| ---- | --------------------- | ------- | -------------------------------------------------- |
| `as` | `string \| Component` | `"a"`   | Render as a different element (e.g., `RouterLink`) |

### BreadcrumbPage

Non-interactive element representing the current page. Includes `aria-current="page"`.

### BreadcrumbSeparator

Separator between breadcrumb items. Defaults to a chevron icon but accepts custom content in the default slot.

### BreadcrumbEllipsis

Ellipsis indicator for collapsed breadcrumb items.

## Examples

### With custom separator

<ComponentPreview name="breadcrumb-2" />
