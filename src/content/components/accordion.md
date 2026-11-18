---
preview: accordion-1
---

## Usage

```ts
import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from '@/components/ui/accordion'
```

```vue
<Accordion>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionPanel>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
```

## API Reference

### Accordion

Root component. Wrapper for `Accordion` from UI SDK.

| Prop            | Type      | Default | Description                                         |
| --------------- | --------- | ------- | --------------------------------------------------- |
| `default-value` | `any[]`   | -       | The items that are open initially (uncontrolled)    |
| `v-model:value` | `any[]`   | -       | The items that are open (controlled)                |
| `multiple`      | `boolean` | `false` | Whether multiple items can be open at the same time |
| `disabled`      | `boolean` | `false` | Whether the whole accordion is disabled             |

### AccordionItem

Individual accordion item container. Styled wrapper for `AccordionItem` from UI SDK with bottom border styling.

### AccordionTrigger

Trigger button that toggles the accordion panel. Styled wrapper for `AccordionHeader` and `AccordionTrigger` from UI SDK. Includes a built-in chevron icon that rotates when expanded.

### AccordionPanel

Collapsible content panel. Styled wrapper for `AccordionPanel` from UI SDK with animated height transitions. Also exported as `AccordionContent`.

## Examples

### Single Accordion

<ComponentPreview name="accordion-2" />

### Multiple Accordion

<ComponentPreview name="accordion-3" />

### Controlled Accordion

<ComponentPreview name="accordion-4" />
