import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

/**
 * The classes of coss PopoverPopup, for the content part of a picker. The content sits in the top
 * layer and keeps the browser's popover box, so its margin, padding, border and background are set
 * here. `--available-height` does not inherit, so the viewport reads a copy of it.
 */
export const pickerPopupClassName = 'm-0 max-w-(--available-width) origin-(--transform-origin) overflow-visible rounded-lg border bg-popover not-dark:bg-clip-padding p-0 text-popover-foreground shadow-lg/5 outline-none transition-[scale,opacity] [--viewport-height:var(--available-height)] before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] before:shadow-[0_1px_--theme(--color-black/4%)] has-data-[slot=calendar]:rounded-xl has-data-[slot=calendar]:before:rounded-[calc(var(--radius-xl)-1px)] data-starting-style:scale-98 data-starting-style:opacity-0 dark:before:shadow-[0_-1px_--theme(--color-white/6%)]'

export const pickerViewportClassName = 'relative size-full max-h-(--viewport-height) overflow-y-auto px-(--viewport-inline-padding) py-4 [--viewport-inline-padding:--spacing(4)] has-data-[slot=calendar]:p-2'

/** A picker types its date into one text input, which takes the box of a date field's input. */
export const pickerInputClassName = 'rounded-[inherit] bg-transparent outline-none placeholder:text-muted-foreground/72'

/**
 * The control of coss Input. Its states come from the segments, which are inputs, so a button
 * in the control (the trigger of a picker) does not light the ring of the whole control.
 */
export const dateFieldControlClassName = 'relative inline-flex w-full min-w-0 items-center rounded-lg border border-input bg-background not-dark:bg-clip-padding text-base text-foreground shadow-xs/5 ring-ring/24 transition-shadow before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] not-has-[input:disabled]:not-has-[input:focus-visible]:not-has-[input[aria-invalid]]:before:shadow-[0_1px_--theme(--color-black/4%)] has-[input:focus-visible]:has-[input[aria-invalid]]:border-destructive/64 has-[input:focus-visible]:has-[input[aria-invalid]]:ring-destructive/16 has-[input[aria-invalid]]:border-destructive/36 has-[input:focus-visible]:border-ring has-[input:disabled]:opacity-64 has-[input:disabled,input:focus-visible,input[aria-invalid]]:shadow-none has-[input:focus-visible]:ring-[3px] sm:text-sm dark:bg-input/32 dark:has-[input[aria-invalid]]:ring-destructive/24 dark:not-has-[input:disabled]:not-has-[input:focus-visible]:not-has-[input[aria-invalid]]:before:shadow-[0_-1px_--theme(--color-white/6%)]'

/** The heights of the input of coss Input, for each size. */
export const dateFieldInputVariants = cva(
  'flex h-8.5 min-w-0 flex-1 items-center px-[calc(--spacing(3)-1px)] leading-8.5 tabular-nums sm:h-7.5 sm:leading-7.5',
  {
    defaultVariants: {
      size: 'default',
    },
    variants: {
      size: {
        default: '',
        lg: 'h-9.5 leading-9.5 sm:h-8.5 sm:leading-8.5',
        sm: 'h-7.5 px-[calc(--spacing(2.5)-1px)] leading-7.5 sm:h-6.5 sm:leading-6.5',
      },
    },
  },
)

export type DateFieldVariants = VariantProps<typeof dateFieldInputVariants>
