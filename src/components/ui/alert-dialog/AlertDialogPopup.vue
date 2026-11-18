<script setup lang="ts">
import type { AlertDialogPopupProps, AlertDialogPortalProps } from '@vase-ui/vue/alert-dialog'
import type { HTMLAttributes } from 'vue'
import { AlertDialog as AlertDialogPrimitive } from '@vase-ui/vue/alert-dialog'
import { cn } from '../../../lib/utils'
import AlertDialogBackdrop from './AlertDialogBackdrop.vue'
import AlertDialogViewport from './AlertDialogViewport.vue'

interface Props extends /* @vue-ignore */ AlertDialogPopupProps {
  bottomStickOnMobile?: boolean
  portalProps?: AlertDialogPortalProps
  class?: HTMLAttributes['class']
}

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<Props>(), {
  bottomStickOnMobile: true,
})
</script>

<template>
  <AlertDialogPrimitive.Portal v-bind="props.portalProps">
    <AlertDialogBackdrop />
    <AlertDialogViewport :class="cn(props.bottomStickOnMobile && 'max-sm:grid-rows-[1fr_auto] max-sm:p-0 max-sm:pt-12')">
      <AlertDialogPrimitive.Popup
        v-bind="$attrs"
        data-slot="alert-dialog-popup"
        :class="cn(
          'relative row-start-2 flex max-h-full min-h-0 w-full min-w-0 max-w-lg origin-center flex-col rounded-2xl border bg-popover not-dark:bg-clip-padding text-popover-foreground opacity-[calc(1-var(--nested-dialogs))] shadow-lg/5 transition-[scale,opacity,translate] duration-200 ease-in-out will-change-transform before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-2xl)-1px)] before:shadow-[0_1px_--theme(--color-black/4%)] data-ending-style:opacity-0 data-starting-style:opacity-0 sm:scale-[calc(1-0.1*var(--nested-dialogs))] sm:data-ending-style:scale-98 sm:data-starting-style:scale-98 dark:before:shadow-[0_-1px_--theme(--color-white/6%)]',
          props.bottomStickOnMobile && 'max-sm:max-w-none max-sm:origin-bottom max-sm:rounded-none max-sm:border-x-0 max-sm:border-t max-sm:border-b-0 max-sm:data-ending-style:translate-y-4 max-sm:data-starting-style:translate-y-4 max-sm:before:hidden max-sm:before:rounded-none',
          props.class,
        )"
      >
        <slot />
      </AlertDialogPrimitive.Popup>
    </AlertDialogViewport>
  </AlertDialogPrimitive.Portal>
</template>
