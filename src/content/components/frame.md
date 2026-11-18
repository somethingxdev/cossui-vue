---
preview: frame-1
---

## Usage

```ts
import {
  Frame,
  FrameDescription,
  FrameFooter,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from '@/components/ui/frame'
```

```vue
<Frame>
  <FrameHeader>
    <FrameTitle>Title</FrameTitle>
    <FrameDescription>Description</FrameDescription>
  </FrameHeader>
  <FramePanel>Content</FramePanel>
  <FrameFooter>Footer</FrameFooter>
</Frame>
```

## API Reference

This is a custom component built with plain elements. Every part takes `class`, merged into its root, and passes other attributes to it.

### Frame

The main container component for grouping related information.

### FramePanel

A panel container for frame content.

```vue
<FramePanel>
Content
</FramePanel>
```

### FrameHeader

Header section for the frame.

```vue
<FrameHeader>
  <FrameTitle>Title</FrameTitle>
  <FrameDescription>Description</FrameDescription>
</FrameHeader>
```

### FrameTitle

Title text for the frame header.

### FrameDescription

Description text for the frame header.

### FrameFooter

Footer section for the frame.

```vue
<FrameFooter>
Footer
</FrameFooter>
```

## Examples

### Separated Panels

By default, multiple panels are separated with spacing between them.

<ComponentPreview name="frame-2" />
