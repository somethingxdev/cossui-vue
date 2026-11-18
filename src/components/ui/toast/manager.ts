import type { Anchor, PositionOptions } from '@ui-sdk/core'
import type { ToastContent, ToastOptions } from '@ui-sdk/vue/toast'
import { createToaster } from '@ui-sdk/vue/toast'

export const toaster = createToaster()

export const anchoredToaster = createToaster()

export type ToastPosition
  = | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right'

export interface AnchoredToastData {
  positionerProps: PositionOptions & { anchor: Anchor }
  tooltipStyle?: boolean
}

export interface AnchoredToastOptions extends ToastOptions<ToastContent> {
  positionerProps: AnchoredToastData['positionerProps']
  data?: { tooltipStyle?: boolean }
}

export const toastManager = {
  add: (options: ToastOptions<ToastContent>) => toaster(options),
  close: (id?: string) => toaster.dismiss(id),
  promise: toaster.promise.bind(toaster),
  update: toaster.update.bind(toaster),
}

export const anchoredToastManager = {
  add: ({ positionerProps, data, ...options }: AnchoredToastOptions) =>
    anchoredToaster({
      ...options,
      data: { ...data, positionerProps } satisfies AnchoredToastData,
    }),
  close: (id?: string) => anchoredToaster.dismiss(id),
}

export function upsertReplayClassName(toast: { type?: string, version: number }): string | undefined {
  // A new toast starts at version 1; every update adds one.
  if (toast.version <= 1)
    return undefined
  const isEven = toast.version % 2 === 0
  if (toast.type === 'error') {
    return isEven
      ? 'animate-toast-error-even motion-reduce:animate-none'
      : 'animate-toast-error-odd motion-reduce:animate-none'
  }
  return isEven
    ? 'animate-toast-success-even motion-reduce:animate-none'
    : 'animate-toast-success-odd motion-reduce:animate-none'
}
