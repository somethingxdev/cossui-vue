---
preview: group-1
---

## Usage

```ts
import { Button } from '@/components/ui/button'
import { Group, GroupSeparator } from '@/components/ui/group'
```

```vue
<Group>
  <Button>Button</Button>
  <GroupSeparator />
  <Button>Button</Button>
</Group>
```

## Accessibility

- The `Group` component has the `role` attribute set to `group`.
- Use `Tab` to navigate between the controls in the group.
- Use `aria-label` or `aria-labelledby` to label the group.

```vue
<Group aria-label="Media controls">
  <Button variant="outline">Play</Button>
  <GroupSeparator />
  <Button variant="outline">Pause</Button>
</Group>
```

### Group vs ToggleGroup

- Use the `Group` component when you want to group controls that perform an action.
- Use the `ToggleGroup` component when you want to group controls that toggle a state.

## API Reference

This is a custom component built with plain elements. `Group`, `GroupSeparator` and `GroupText` are also exported as `ButtonGroup`, `ButtonGroupSeparator` and `ButtonGroupText`.

### Group

The `Group` component is a container that visually groups a series of related controls together with consistent styling.

| Prop          | Type                         | Default        |
| ------------- | ---------------------------- | -------------- |
| `orientation` | `"horizontal" \| "vertical"` | `"horizontal"` |

Nest multiple groups to create complex layouts with spacing. See the [nested groups](#nested-groups) example for more details.

```vue
<Group>
  <Group>
    <Button>1</Button>
    <GroupSeparator />
    <Button>2</Button>
  </Group>

  <Group>
    <Button>Previous</Button>
    <GroupSeparator />
    <Button>Next</Button>
  </Group>
</Group>
```

### GroupSeparator

The `GroupSeparator` component visually divides controls within a group. It wraps `Separator`.

| Prop          | Type                         | Default      |
| ------------- | ---------------------------- | ------------ |
| `orientation` | `"horizontal" \| "vertical"` | `"vertical"` |

Note: Unlike shadcn's ButtonGroup, `GroupSeparator` is required between all controls, including outline buttons. This ensures consistent visual hierarchy and focus states.

### GroupText

Use this component to display text within a group, such as labels or prefixes.

| Prop | Type                  | Default |
| ---- | --------------------- | ------- |
| `as` | `string \| Component` | `"div"` |

```vue
<Group>
  <GroupText>https://</GroupText>
  <GroupSeparator />
  <Input placeholder="example.com" />
</Group>
```

Use the `as` prop to render a custom component as the text, for example a label.

```vue
<Group>
  <GroupText :as="Label" for="domain" aria-label="Domain">
    https://
  </GroupText>
  <GroupSeparator />
  <Input id="domain" placeholder="example.com" />
</Group>
```

## Examples

### With Input

<ComponentPreview name="group-2" />

### Small Size

<ComponentPreview name="group-3" />

### Large Size

<ComponentPreview name="group-4" />

### With Disabled Button

<ComponentPreview name="group-5" />

### With Default Buttons

<ComponentPreview name="group-6" />

### With Start Labeled Text

<ComponentPreview name="group-7" />

### With End Text

<ComponentPreview name="group-8" />

### Vertical

<ComponentPreview name="group-9" />

### Nested Groups

<ComponentPreview name="group-10" />

### With Popup

<ComponentPreview name="group-11" />

### With Input Group

<ComponentPreview name="group-12" />

### With Menu

<ComponentPreview name="group-13" />

### With Select

<ComponentPreview name="group-14" />
