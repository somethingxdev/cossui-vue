---
preview: pagination-1
---

## Usage

```ts
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
```

```vue
<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>
```

## API Reference

This is a custom component built with plain elements, not a UI SDK wrapper.

### Pagination

Root `<nav>` container with `aria-label="pagination"`.

### PaginationContent

Unordered list container for pagination items.

### PaginationItem

Individual list item container.

### PaginationLink

Link element for page numbers. Supports the `as` prop.

| Prop        | Type                  | Default  | Description                                                                                |
| ----------- | --------------------- | -------- | ------------------------------------------------------------------------------------------ |
| `is-active` | `boolean`             | -        | Highlights the link as the current page                                                    |
| `size`      | `"default" \| "icon"` | `"icon"` | Controls the link size                                                                     |
| `as`        | `string \| Component` | `"a"`    | Render as a different element (e.g., `RouterLink`). A custom element brings its own styles |

### PaginationPrevious

Link to the previous page. Includes a chevron left icon and "Previous" text.

### PaginationNext

Link to the next page. Includes "Next" text and a chevron right icon.

### PaginationEllipsis

Ellipsis indicator for skipped pages. Displays "..." with screen reader text "More pages".
