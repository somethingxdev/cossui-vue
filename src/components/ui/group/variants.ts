import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

/** UI SDK renders popups and hidden form inputs next to their trigger, with a data-slot: they are not controls of the group. */
export const groupVariants = cva(
  'flex w-fit *:focus-visible:z-1 has-[>[data-slot=group]]:gap-2 *:has-focus-visible:z-1 dark:*:[[data-slot=separator]:has(~button:hover):not(:has(~[data-slot=separator]~[data-slot]:hover)),[data-slot=separator]:has(~[data-slot][data-pressed]):not(:has(~[data-slot=separator]~[data-slot][data-pressed]))]:before:bg-input/64 dark:*:[button:hover~[data-slot=separator]:not([data-slot]:hover~[data-slot=separator]~[data-slot=separator]),[data-slot][data-pressed]~[data-slot=separator]:not([data-slot][data-pressed]~[data-slot=separator]~[data-slot=separator])]:before:bg-input/64',
  {
    defaultVariants: {
      orientation: 'horizontal',
    },
    variants: {
      orientation: {
        horizontal:
          '*:pointer-coarse:after:min-w-auto *:data-slot:has-[~[data-slot]:not([popover],[hidden],[aria-hidden=true],[type=hidden])]:rounded-e-none *:data-slot:has-[~[data-slot]:not([popover],[hidden],[aria-hidden=true],[type=hidden])]:border-e-0 *:data-slot:not-data-[slot=separator]:has-[~[data-slot]:not([popover],[hidden],[aria-hidden=true],[type=hidden])]:before:-end-[0.5px] *:data-slot:has-[~[data-slot]:not([popover],[hidden],[aria-hidden=true],[type=hidden])]:before:rounded-e-none *:[[data-slot]:not([popover],[hidden],[aria-hidden=true],[type=hidden])~[data-slot]:not([popover],[hidden],[aria-hidden=true],[type=hidden]):not([data-slot=separator])]:before:-start-[0.5px] *:[[data-slot]:not([popover],[hidden],[aria-hidden=true],[type=hidden])~[data-slot]:not([popover],[hidden],[aria-hidden=true],[type=hidden])]:rounded-s-none *:[[data-slot]:not([popover],[hidden],[aria-hidden=true],[type=hidden])~[data-slot]:not([popover],[hidden],[aria-hidden=true],[type=hidden])]:border-s-0 *:[[data-slot]:not([popover],[hidden],[aria-hidden=true],[type=hidden])~[data-slot]:not([popover],[hidden],[aria-hidden=true],[type=hidden])]:before:rounded-s-none',
        vertical:
          'flex-col *:pointer-coarse:after:min-h-auto *:data-slot:has-[~[data-slot]:not([popover],[hidden],[aria-hidden=true],[type=hidden])]:rounded-b-none *:data-slot:has-[~[data-slot]:not([popover],[hidden],[aria-hidden=true],[type=hidden])]:border-b-0 *:data-slot:not-data-[slot=separator]:has-[~[data-slot]:not([popover],[hidden],[aria-hidden=true],[type=hidden])]:before:-bottom-[0.5px] *:data-slot:not-data-[slot=separator]:has-[~[data-slot]:not([popover],[hidden],[aria-hidden=true],[type=hidden])]:before:hidden *:data-slot:has-[~[data-slot]:not([popover],[hidden],[aria-hidden=true],[type=hidden])]:before:rounded-b-none dark:*:last:before:hidden dark:*:first:before:block *:[[data-slot]:not([popover],[hidden],[aria-hidden=true],[type=hidden])~[data-slot]:not([popover],[hidden],[aria-hidden=true],[type=hidden]):not([data-slot=separator])]:before:-top-[0.5px] *:[[data-slot]:not([popover],[hidden],[aria-hidden=true],[type=hidden])~[data-slot]:not([popover],[hidden],[aria-hidden=true],[type=hidden])]:rounded-t-none *:[[data-slot]:not([popover],[hidden],[aria-hidden=true],[type=hidden])~[data-slot]:not([popover],[hidden],[aria-hidden=true],[type=hidden])]:border-t-0 *:[[data-slot]:not([popover],[hidden],[aria-hidden=true],[type=hidden])~[data-slot]:not([popover],[hidden],[aria-hidden=true],[type=hidden])]:before:rounded-t-none',
      },
    },
  },
)

export type GroupVariants = VariantProps<typeof groupVariants>
