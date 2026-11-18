---
preview: empty-1
---

## Usage

```ts
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty'
```

```vue
<Empty>
  <EmptyHeader>
    <EmptyMedia variant="icon">
      <Icon />
    </EmptyMedia>
    <EmptyTitle>No data</EmptyTitle>
    <EmptyDescription>No data found</EmptyDescription>
  </EmptyHeader>
  <EmptyContent>
    <Button>Add data</Button>
  </EmptyContent>
</Empty>
```

## API Reference

The API design of this component is modeled after [shadcn/ui's empty component](https://ui.shadcn.com/docs/components/empty) to ensure familiarity and consistency for developers already using shadcn. This standardization makes it easier to adopt **coss ui** while maintaining API parity with the patterns developers already know and love.

### Empty

The main component of the empty state. Wraps the `EmptyHeader` and `EmptyContent` components.

| Prop    | Type     | Default |
| ------- | -------- | ------- |
| `class` | `string` |         |

```vue
<Empty>
  <EmptyHeader />
  <EmptyContent />
</Empty>
```

### EmptyHeader

The `EmptyHeader` component wraps the empty media, title, and description.

| Prop    | Type     | Default |
| ------- | -------- | ------- |
| `class` | `string` |         |

```vue
<EmptyHeader>
  <EmptyMedia />
  <EmptyTitle />
  <EmptyDescription />
</EmptyHeader>
```

### EmptyMedia

Use the `EmptyMedia` component to display the media of the empty state such as an icon or an image. You can also use it to display other components such as an avatar.

| Prop      | Type                  | Default   |
| --------- | --------------------- | --------- |
| `variant` | `"default" \| "icon"` | `default` |
| `class`   | `string`              |           |

```vue
<EmptyMedia variant="icon">
  <Icon />
</EmptyMedia>
```

```vue
<EmptyMedia>
  <Avatar>
    <AvatarImage src="..." />
    <AvatarFallback>JD</AvatarFallback>
  </Avatar>
</EmptyMedia>
```

### EmptyTitle

Use the `EmptyTitle` component to display the title of the empty state.

| Prop    | Type     | Default |
| ------- | -------- | ------- |
| `class` | `string` |         |

```vue
<EmptyTitle>
No data
</EmptyTitle>
```

### EmptyDescription

Use the `EmptyDescription` component to display the description of the empty state.

| Prop    | Type     | Default |
| ------- | -------- | ------- |
| `class` | `string` |         |

```vue
<EmptyDescription>
You do not have any notifications.
</EmptyDescription>
```

### EmptyContent

Use the `EmptyContent` component to display the content of the empty state such as a button, input or a link.

| Prop    | Type     | Default |
| ------- | -------- | ------- |
| `class` | `string` |         |

```vue
<EmptyContent>
  <Button>Add Project</Button>
</EmptyContent>
```
