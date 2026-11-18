---
preview: segmented-control-1
---

## About

A segmented control is a visual pattern, not a standalone behavior. `SegmentedControl` and `SegmentedControlItem` provide the presentation and the sliding indicator; the element you pass to `as` provides the semantics, keyboard interactions, and state model.

## Choose the right primitive

| Intent                            | Use                                           | Why                                                                   |
| --------------------------------- | --------------------------------------------- | --------------------------------------------------------------------- |
| Choose one value in a form        | [Radio Group](/docs/components/radio-group)   | Represents a mutually exclusive value and participates in form state. |
| Navigate to another URL or route  | Navigation links                              | Preserves link behavior, browser history, and `aria-current`.         |
| Apply an exclusive filter or mode | [Toggle Group](/docs/components/toggle-group) | Represents the pressed state of an action that may be cleared.        |
| Switch between related panels     | [Tabs](/docs/components/tabs)                 | Connects each tab to an associated content panel.                     |

Choose the primitive from the interaction first, then render it through the segmented control. Visual similarity alone is not a reason to use Tabs or Toggle Group.

## Usage

```ts
import { RadioGroupPrimitive, RadioPrimitive } from '@/components/ui/radio-group'
import { SegmentedControl, SegmentedControlItem } from '@/components/ui/segmented-control'
```

```vue
<SegmentedControl
  :as="RadioGroupPrimitive.RadioGroup"
  aria-label="Billing period"
  default-value="monthly"
>
  <SegmentedControlItem :as="RadioPrimitive.Radio" value="monthly">
    Monthly
  </SegmentedControlItem>
  <SegmentedControlItem :as="RadioPrimitive.Radio" value="yearly">
    Yearly
  </SegmentedControlItem>
</SegmentedControl>
```

Behavior props such as `default-value`, `v-model:value`, `@value-change`, or `href` are passed to the element given to `as`. Use the Radio Group primitives rather than `RadioGroup` and `Radio`, so the native radio indicator is not rendered.

The same composition works for navigation links:

```vue
<SegmentedControl as="nav" aria-label="Project sections">
  <SegmentedControlItem as="a" aria-current="page" href="/overview">
    Overview
  </SegmentedControlItem>
  <SegmentedControlItem as="a" href="/activity">
    Activity
  </SegmentedControlItem>
</SegmentedControl>
```

And for an exclusive filter that may be cleared:

```vue
<SegmentedControl :as="ToggleGroupPrimitive.ToggleGroup" aria-label="Status">
  <SegmentedControlItem :as="TogglePrimitive.Toggle" value="open">
    Open
  </SegmentedControlItem>
  <SegmentedControlItem :as="TogglePrimitive.Toggle" value="closed">
    Closed
  </SegmentedControlItem>
</SegmentedControl>
```

## API Reference

This is a custom component built with plain elements, as in coss ui. It does not wrap `SegmentedControl` from UI SDK, which is a radio group only.

### SegmentedControl

The segmented surface. Renders a `<div>` by default and appends the sliding indicator after its children. Provides the size to its items.

| Prop   | Type                        | Default     | Description                                                                        |
| ------ | --------------------------- | ----------- | ---------------------------------------------------------------------------------- |
| `size` | `"sm" \| "default" \| "lg"` | `"default"` | Controls the height and horizontal padding of every item                           |
| `as`   | `string \| Component`       | `"div"`     | Replaces the rendered element, for example with a Radio Group primitive or `"nav"` |

### SegmentedControlItem

A single segment. Renders a `<button type="button">` by default.

| Prop   | Type                        | Default             | Description                                                       |
| ------ | --------------------------- | ------------------- | ----------------------------------------------------------------- |
| `size` | `"sm" \| "default" \| "lg"` | Inherited from root | Overrides the size inherited from `SegmentedControl`              |
| `as`   | `string \| Component`       | `"button"`          | Replaces the rendered element, for example with a radio or a link |

An item is active when it has `data-checked` (Radio Group), `aria-current="page"` (links), or `data-pressed` (Toggle Group). The indicator slides to the active item over 200ms with an ease-in-out curve, stays still when the user prefers reduced motion, and is hidden when no item is active. Before hydration or without JavaScript, the active item paints its own static pill instead. For navigation, the pill animates only when the control persists across route changes, such as in a shared layout; otherwise it appears in place on each page.

At the outside edges, the item padding and the surface’s inset combine to match the horizontal padding of the corresponding Button size. The surface is slightly taller than that Button to optically balance its inset selected item when the controls appear next to each other.

## Examples

### Small Radio Group

<ComponentPreview name="segmented-control-2" />

### Default Radio Group

<ComponentPreview name="segmented-control-1" />

### Large Radio Group

<ComponentPreview name="segmented-control-3" />

### Small Navigation

<ComponentPreview name="segmented-control-4" />

### Default Navigation

<ComponentPreview name="segmented-control-5" />

### Large Navigation

<ComponentPreview name="segmented-control-6" />

## Related content

Use Tabs when each segment controls an associated content panel. Tabs keep UI SDK’s own indicator and add orientation support and panel semantics, but share the segmented control’s sizes, icon layout, and indicator surface so both look the same.

<ComponentPreview name="tabs-1" />
