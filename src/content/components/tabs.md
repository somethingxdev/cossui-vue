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

Root component. Styled wrapper for `Tabs.Root` from Vase UI.

| Prop            | Type                         | Default        | Description                                     |
| --------------- | ---------------------------- | -------------- | ----------------------------------------------- |
| `default-value` | `any`                        | `0`            | The tab that is active initially (uncontrolled) |
| `v-model:value` | `any`                        | -              | The active tab (controlled)                     |
| `orientation`   | `"horizontal" \| "vertical"` | `"horizontal"` | The layout direction of the tabs                |

| Event          | Payload                 | Description                                           |
| -------------- | ----------------------- | ----------------------------------------------------- |
| `value-change` | `(value, eventDetails)` | Fired when the active tab changes, with event details |

### TabsList

Container for tab triggers. Styled wrapper for `Tabs.List` from Vase UI. It also renders the active tab indicator (`Tabs.Indicator`).

| Prop      | Type                        | Default     | Description                         |
| --------- | --------------------------- | ----------- | ----------------------------------- |
| `size`    | `"sm" \| "default" \| "lg"` | `"default"` | Controls the size of all tab items. |
| `variant` | `"default" \| "underline"`  | `"default"` | Controls the tabs styling.          |

### TabsTab

Individual tab trigger. Styled wrapper for `Tabs.Tab` from Vase UI. Also exported as `TabsTrigger`.

| Prop    | Type                        | Default | Description                                   |
| ------- | --------------------------- | ------- | --------------------------------------------- |
| `value` | `any`                       | -       | The value that identifies this tab (required) |
| `size`  | `"sm" \| "default" \| "lg"` | -       | Overrides the size inherited from `TabsList`  |

### TabsPanel

Content panel for each tab. Styled wrapper for `Tabs.Panel` from Vase UI. Also exported as `TabsContent`.

| Prop    | Type  | Default | Description                                           |
| ------- | ----- | ------- | ----------------------------------------------------- |
| `value` | `any` | -       | The value of the tab this panel belongs to (required) |

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
