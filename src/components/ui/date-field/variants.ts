import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

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

export const dateFieldSegmentClassName = 'rounded-sm px-0.5 text-center tabular-nums caret-transparent outline-none placeholder:text-muted-foreground/72 focus:bg-accent focus:text-accent-foreground disabled:cursor-not-allowed'

export const dateFieldLiteralClassName = 'whitespace-pre text-muted-foreground'

export type DateFieldVariants = VariantProps<typeof dateFieldInputVariants>
