---
preview: tabs-1
---

## Usage

```ts
import { Tabs, TabsList, TabsPanel, TabsTab } from '@/components/ui/tabs'
```

```vue
<Tabs default-value="tab-1">
  <TabsList>
    <TabsTab value="tab-1">Tab 1</TabsTab>
    <TabsTab value="tab-2">Tab 2</TabsTab>
    <TabsTab value="tab-3">Tab 3</TabsTab>
  </TabsList>
  <TabsPanel value="tab-1">Tab 1 content</TabsPanel>
  <TabsPanel value="tab-2">Tab 2 content</TabsPanel>
  <TabsPanel value="tab-3">Tab 3 content</TabsPanel>
</Tabs>
```

## API Reference

### Tabs

Root component. Styled wrapper for `Tabs` from UI SDK.

| Prop            | Type                         | Default        | Description                                     |
| --------------- | ---------------------------- | -------------- | ----------------------------------------------- |
| `default-value` | `string \| null`             | first tab      | The tab that is active initially (uncontrolled) |
| `v-model:value` | `string \| null`             | -              | The active tab (controlled)                     |
| `orientation`   | `"horizontal" \| "vertical"` | `"horizontal"` | The layout direction of the tabs                |

| Event          | Payload            | Description                                           |
| -------------- | ------------------ | ----------------------------------------------------- |
| `value-change` | `(value, details)` | Fired when the active tab changes, with event details |

### TabsList

Container for tab triggers. Styled wrapper for `TabsList` from UI SDK. It also renders the active tab indicator (`TabsIndicator`).

| Prop      | Type                        | Default     | Description                         |
| --------- | --------------------------- | ----------- | ----------------------------------- |
| `size`    | `"sm" \| "default" \| "lg"` | `"default"` | Controls the size of all tab items. |
| `variant` | `"default" \| "underline"`  | `"default"` | Controls the tabs styling.          |

### TabsTab

Individual tab trigger. Styled wrapper for `TabsTab` from UI SDK. The active tab has `data-selected`. Also exported as `TabsTrigger`.

| Prop    | Type                        | Default | Description                                   |
| ------- | --------------------------- | ------- | --------------------------------------------- |
| `value` | `string`                    | -       | The value that identifies this tab (required) |
| `size`  | `"sm" \| "default" \| "lg"` | -       | Overrides the size inherited from `TabsList`  |

### TabsPanel

Content panel for each tab. Styled wrapper for `TabsPanel` from UI SDK. Also exported as `TabsContent`.

| Prop    | Type     | Default | Description                                           |
| ------- | -------- | ------- | ----------------------------------------------------- |
| `value` | `string` | -       | The value of the tab this panel belongs to (required) |

## Examples

Tabs use the same optical sizing as segmented controls. The default surface is slightly taller than a Button of the same size so its inset active indicator remains visually balanced alongside adjacent controls.

### Small

<ComponentPreview name="tabs-14" />

### Large

<ComponentPreview name="tabs-15" />

### Underline Variant

<ComponentPreview name="tabs-2" />

### Vertical Orientation

<ComponentPreview name="tabs-3" />

### Underline with Vertical Orientation

<ComponentPreview name="tabs-4" />
