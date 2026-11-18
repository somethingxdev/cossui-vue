---
preview: resizable-1
---

## Usage

```ts
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable'
```

```vue
<ResizablePanelGroup>
  <ResizablePanel>One</ResizablePanel>
  <ResizableHandle />
  <ResizablePanel>Two</ResizablePanel>
</ResizablePanelGroup>
```

## API Reference

### ResizablePanelGroup

Root container for the panels. Styled wrapper for `Resizable.Root` from Vase UI.

| Prop             | Type                               | Default        | Description                                                              |
| ---------------- | ---------------------------------- | -------------- | ------------------------------------------------------------------------ |
| `orientation`    | `"horizontal" \| "vertical"`       | `"horizontal"` | The layout direction of the panels                                       |
| `v-model:layout` | `Record<string, number \| string>` | -              | The size of each panel by panel `id` (controlled)                        |
| `default-layout` | `Record<string, number \| string>` | -              | The layout at the start (uncontrolled)                                   |
| `disabled`       | `boolean`                          | `false`        | Whether the handles ignore user interaction                              |
| `step`           | `number \| string`                 | `1`            | The size of the move of an arrow key                                     |
| `large-step`     | `number \| string`                 | `10`           | The size of the move of Shift+arrow, Page Up and Page Down               |
| `push-panels`    | `boolean`                          | `true`         | Whether a move goes on into the panels after the panel beside the handle |
| `resize-mode`    | `"live" \| "on-release"`           | `"live"`       | Whether the layout changes during the drag or on release                 |

| Event              | Payload                  | Description                                        |
| ------------------ | ------------------------ | -------------------------------------------------- |
| `layout-change`    | `(layout, eventDetails)` | Fired on each change of the layout                 |
| `layout-committed` | `(layout, eventDetails)` | Fired when a drag, key or method finishes a change |

### ResizablePanel

A single panel. Styled wrapper for `Resizable.Panel` from Vase UI. Sizes are a number (percent) or a string with a unit (`%`, `px`, `em`, `rem`, `vh`, `vw`).

| Prop             | Type               | Default   | Description                                            |
| ---------------- | ------------------ | --------- | ------------------------------------------------------ |
| `id`             | `string`           | generated | The key of the panel in the layout                     |
| `default-size`   | `number \| string` | -         | The size of the panel at the start                     |
| `min-size`       | `number \| string` | `0`       | The least size of the panel                            |
| `max-size`       | `number \| string` | `100`     | The greatest size of the panel                         |
| `collapsible`    | `boolean`          | `false`   | Whether the panel can collapse to its `collapsed-size` |
| `collapsed-size` | `number \| string` | `0`       | The size of the panel when it is collapsed             |

| Event              | Payload                | Description                               |
| ------------------ | ---------------------- | ----------------------------------------- |
| `resize`           | `(size, previousSize)` | Fired when the panel changes size         |
| `collapsed-change` | `boolean`              | Fired when the panel collapses or expands |

### ResizableHandle

The draggable divider between two panels. Styled wrapper for `Resizable.Handle` from Vase UI.

| Prop            | Type                   | Default      | Description                                                 |
| --------------- | ---------------------- | ------------ | ----------------------------------------------------------- |
| `with-handle`   | `boolean`              | `false`      | Shows a visible grip in the middle of the handle            |
| `primary-panel` | `"previous" \| "next"` | `"previous"` | The panel that keyboard moves and double click reset act on |
| `disabled`      | `boolean`              | `false`      | Whether the handle ignores user interaction                 |

## Examples

### Vertical

<ComponentPreview name="resizable-2" />

### With Handle

<ComponentPreview name="resizable-3" />

### Collapsible Panel

<ComponentPreview name="resizable-4" />

### Controlled Layout

<ComponentPreview name="resizable-5" />
