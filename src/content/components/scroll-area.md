---
preview: scroll-area-1
---

## Usage

```ts
import { ScrollArea } from '@/components/ui/scroll-area'
```

```vue
<ScrollArea class="h-64 rounded-md border">
  <div class="p-4">
    Just as suddenly as it had begun, the sensation stopped, leaving Alice
    feeling slightly disoriented. She looked around and realized that the room
    hadn't changed at all - it was she who had grown smaller, shrinking down to
    a fraction of her previous size. Alice felt herself growing larger and
    larger, filling up the entire room until she feared she might burst. The
    sensation was both thrilling and terrifying, as if she were expanding beyond
    the confines of her own body. She wondered if this was what it felt like to
    be a balloon, swelling with air until it could hold no more.
  </div>
</ScrollArea>
```

## API Reference

### ScrollArea

Root component. Styled wrapper for `ScrollArea.Root` from Vase UI with custom scrollbar styling. It renders the viewport, content wrapper, both scrollbars and the corner for you.

| Prop                      | Type      | Default | Description                                                                                                                  |
| ------------------------- | --------- | ------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `scroll-fade`             | `boolean` | `false` | Masks viewport edges so content fades in/out as you scroll                                                                   |
| `scrollbar-gutter`        | `boolean` | `false` | Reserves space for the scrollbar to prevent layout shifts                                                                    |
| `fill`                    | `boolean` | `false` | Applies `size-full` to the scroll area content wrapper so flex layouts (e.g. `mt-auto` footers) can fill the viewport height |
| `clamp-content-min-width` | `boolean` | `true`  | Sets `minWidth: 0` on the content wrapper to avoid spurious horizontal scrollbars in vertical layouts                        |
| `overscroll-contain`      | `boolean` | `false` | Prevents scroll chaining into parent scrollers when the viewport overflows                                                   |

### ScrollBar

Scrollbar track and thumb. Styled wrapper for `ScrollArea.Scrollbar` and `ScrollArea.Thumb` from Vase UI. `ScrollArea` already renders a vertical and a horizontal one; use `ScrollBar` only when composing your own scroll area from `ScrollAreaPrimitive`.

| Prop          | Type                         | Default      | Description                       |
| ------------- | ---------------------------- | ------------ | --------------------------------- |
| `orientation` | `"vertical" \| "horizontal"` | `"vertical"` | Which axis the scrollbar controls |

## Examples

### Scroll Fade

Use `scroll-fade` to mask the viewport edges so content subtly fades in and out as you scroll, hinting that more content is available without adding extra UI chrome.

<ComponentPreview name="scroll-area-4" />

### Horizontal Scroll

<ComponentPreview name="scroll-area-2" />

### Scrollbar Gutter

Enable `scrollbar-gutter` to reserve space for the scrollbar when overflow appears, preventing layout shifts as the bar shows or hides.

<ComponentPreview name="scroll-area-5" />

### Both Scrollbars

<ComponentPreview name="scroll-area-3" />

### Fill viewport (flex layouts)

Use `fill` when the scroll area wraps a flex column that should stretch to the full viewport height, for example pinning a footer with `mt-auto` inside a sidebar. Opt in manually for custom layouts:

```vue
<ScrollArea class="flex-1 min-h-0" fill>
  <div class="flex h-full flex-col">
    <nav><!-- main items --></nav>
    <footer class="mt-auto">
      <!-- pinned footer -->
    </footer>
  </div>
</ScrollArea>
```

Leave `fill` at the default (`false`) for content-sized areas such as lists, comboboxes, and dialogs where overflow should track child height.

### Overscroll contain

Use **`overscroll-contain`** to stop wheel/touch scrolling from chaining into a parent scroller once the viewport hits its edge. Dialog, sheet, drawer, combobox, and autocomplete already opt in; pass it yourself for custom nested scroll surfaces.

```vue
<ScrollArea class="h-64" overscroll-contain>
  <div class="p-4">
    <!-- Long content -->
  </div>
</ScrollArea>
```

Leave it at the default (`false`) for standalone scroll areas where natural scroll chaining is preferred.

### Content min-width

Vase UI sets `min-width: fit-content` on the content wrapper, which often causes unwanted horizontal scroll in vertical lists and panels (dialogs, comboboxes, sidebars). **`clamp-content-min-width`** defaults to **`true`** and applies `minWidth: 0` to prevent that.

Horizontal scroll still works when children define their own width (e.g. `w-max`, table min-width). Set **`:clamp-content-min-width="false"`** only if horizontal scroll stops working and the child has no explicit width. These are rare cases, like certain flex chains or long unbreakable inline text without overflow handling.
