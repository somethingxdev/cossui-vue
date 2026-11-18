import type { ToastRootProps } from '@vase-ui/vue/toast'
import { Toast as ToastPrimitive } from '@vase-ui/vue/toast'

export const toastManager = ToastPrimitive.createToastManager()

export const anchoredToastManager = ToastPrimitive.createToastManager()

export type ToastPosition
  = | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right'

export interface ToastData {
  rootProps?: Omit<ToastRootProps, 'class' | 'swipeDirection' | 'toast'>
  tooltipStyle?: boolean
}

export function upsertReplayClassName(toast: { type?: string, updateKey?: number }): string | undefined {
  const k = toast.updateKey ?? 0
  if (k <= 0)
    return undefined
  const isEven = k % 2 === 0
  if (toast.type === 'error') {
    return isEven
      ? 'animate-toast-error-even motion-reduce:animate-none'
      : 'animate-toast-error-odd motion-reduce:animate-none'
  }
  return isEven
    ? 'animate-toast-success-even motion-reduce:animate-none'
    : 'animate-toast-success-odd motion-reduce:animate-none'
}
