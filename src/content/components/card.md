---
preview: card-1
---

## Usage

```ts
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardPanel,
  CardTitle,
} from '@/components/ui/card'
```

```vue
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardPanel>Content</CardPanel>
  <CardFooter>Footer</CardFooter>
</Card>
```

### CardFrame with header action

Use `CardFrame` when you need a framed layout with an action button in the header (e.g. "Add", "Connect"):

```vue
<script setup lang="ts">
import { PlusIcon } from '@lucide/vue'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardFrame,
  CardFrameAction,
  CardFrameDescription,
  CardFrameHeader,
  CardFrameTitle,
  CardPanel,
} from '@/components/ui/card'
</script>

<template>
  <CardFrame>
    <CardFrameHeader>
      <CardFrameTitle>Project</CardFrameTitle>
      <CardFrameDescription>
        Manage your project settings and configuration
      </CardFrameDescription>
      <CardFrameAction>
        <Button variant="outline">
          <PlusIcon />
          Add
        </Button>
      </CardFrameAction>
    </CardFrameHeader>
    <Card>
      <CardPanel>Content</CardPanel>
    </Card>
  </CardFrame>
</template>
```

### CardFrame with a table

For lists or data grids, render a table inside `CardFrame` so the grid matches the frame’s border and radius.

## API Reference

This is a custom component built with plain elements, not a direct Vase UI wrapper.

### Card

Root container for the card.

| Prop    | Type     | Default | Description                             |
| ------- | -------- | ------- | --------------------------------------- |
| `class` | `string` | -       | Additional classes merged into the root |

### CardHeader

Header section container.

### CardTitle

Title text for the card.

### CardDescription

Description text for the card.

### CardAction

Container for action buttons in the header. Automatically positions to the right.

### CardPanel

Main content area of the card. Also exported as `CardContent`.

### CardFooter

Footer section for the card.

## CardFrame API Reference

`CardFrame` is an alternative layout for cards that groups a header, content, and footer with consistent styling and clipping. Use it when you need a framed card with optional header actions.

### CardFrame

Root container for the framed card layout.

### CardFrameHeader

Header section for the frame. Contains title, description, and optionally `CardFrameAction`.

### CardFrameTitle

Title text for the frame.

### CardFrameDescription

Description text for the frame.

### CardFrameAction

Container for action buttons (e.g. "Add", "Edit") in the header. Place it as a sibling of `CardFrameTitle` and `CardFrameDescription` inside `CardFrameHeader`. It is positioned in the top-right via CSS grid (`col-start-2`, `row-span-2`, `self-center`, `justify-self-end`). Use it for primary actions that apply to the entire frame.

### CardFrameFooter

Footer section for the frame.
