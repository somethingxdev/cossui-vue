---
preview: table-1
---

## Usage

```ts
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
```

```vue
<Table>
  <TableCaption>Caption</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>Header</TableHead>
      <TableHead>Header</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Cell</TableCell>
      <TableCell>Cell</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

## API Reference

This is a custom component built with plain elements, not a wrapper of a UI SDK part.

### Table

The main table container component. Set `variant="card"` for a card-style table: separated borders, rounded corners, and row surfaces that read as cards. That pairs well with a [Frame](/docs/components/frame) (page chrome) or [CardFrame](/docs/components/card) (card shell with optional header actions). The default variant is a simpler row layout with standard borders.

`Table` renders a scrolling container around the `<table>`. `class` and other attributes go to the `<table>`; `as` replaces the container.

| Prop      | Type                    | Default     |
| --------- | ----------------------- | ----------- |
| `class`   | `string`                |             |
| `variant` | `"default"` \| `"card"` | `"default"` |
| `as`      | `string \| Component`   | `"div"`     |

```vue
<Table>
  <TableHeader>...</TableHeader>
  <TableBody>...</TableBody>
</Table>
```

```vue
<Table variant="card">
  <TableHeader>...</TableHeader>
  <TableBody>...</TableBody>
</Table>
```

### TableHeader

Header section of the table containing column headers.

| Prop    | Type     | Default |
| ------- | -------- | ------- |
| `class` | `string` |         |

```vue
<TableHeader>
  <TableRow>
    <TableHead>Header</TableHead>
  </TableRow>
</TableHeader>
```

### TableBody

Body section of the table containing table rows and data.

| Prop    | Type     | Default |
| ------- | -------- | ------- |
| `class` | `string` |         |

```vue
<TableBody>
  <TableRow>
    <TableCell>Cell</TableCell>
  </TableRow>
</TableBody>
```

### TableFooter

Footer section of the table.

| Prop    | Type     | Default |
| ------- | -------- | ------- |
| `class` | `string` |         |

```vue
<TableFooter>
  <TableRow>
    <TableCell>Footer</TableCell>
  </TableRow>
</TableFooter>
```

### TableRow

A row in the table. Set `data-state="selected"` to style it as selected.

| Prop    | Type     | Default |
| ------- | -------- | ------- |
| `class` | `string` |         |

```vue
<TableRow>
  <TableCell>Cell</TableCell>
</TableRow>
```

### TableHead

A header cell in the table.

| Prop    | Type     | Default |
| ------- | -------- | ------- |
| `class` | `string` |         |

```vue
<TableHead>
Header
</TableHead>
```

### TableCell

A data cell in the table.

| Prop    | Type     | Default |
| ------- | -------- | ------- |
| `class` | `string` |         |

```vue
<TableCell>
Cell
</TableCell>
```

### TableCaption

A caption for the table.

| Prop    | Type     | Default |
| ------- | -------- | ------- |
| `class` | `string` |         |

```vue
<TableCaption>
Caption
</TableCaption>
```

## Examples

### Card-style table

Use `variant="card"` when the grid itself should look like a set of cards (for example dashboards or standalone tables without an outer frame).

<ComponentPreview name="table-2" />

### Table in CardFrame

Put the table in [CardFrame](/docs/components/card) so the grid sits inside the card shell (border, radius, clipping). Use `variant="card"` on `Table`. The example below is static markup, with no row selection or TanStack.

<ComponentPreview name="table-3" />

### Table in Frame

Wrap the table in a [Frame](/docs/components/frame) for bordered app-surface framing. Use `variant="card"` on `Table` so rows keep the card-style treatment inside the frame.

<ComponentPreview name="table-4" />
