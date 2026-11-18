<script setup lang="ts">
import type { DialogCloseProps, DialogPopupProps, DialogPortalProps } from '@vase-ui/vue/dialog'
import type { HTMLAttributes } from 'vue'
import { XIcon } from '@lucide/vue'
import { Dialog as DialogPrimitive } from '@vase-ui/vue/dialog'
import { cn } from '../../../lib/utils'
import { Button } from '../button'
import DialogBackdrop from './DialogBackdrop.vue'
import DialogViewport from './DialogViewport.vue'

interface Props extends /* @vue-ignore */ DialogPopupProps {
  showCloseButton?: boolean
  bottomStickOnMobile?: boolean
  closeProps?: DialogCloseProps
  portalProps?: DialogPortalProps
  class?: HTMLAttributes['class']
}

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<Props>(), {
  showCloseButton: true,
  bottomStickOnMobile: true,
})
</script>

<template>
  <DialogPrimitive.Portal v-bind="props.portalProps">
    <DialogBackdrop />
    <DialogViewport :class="cn(props.bottomStickOnMobile && 'max-sm:grid-rows-[1fr_auto] max-sm:p-0 max-sm:pt-12')">
      <DialogPrimitive.Popup
        v-bind="$attrs"
        data-slot="dialog-popup"
        :class="cn(
          'relative row-start-2 flex max-h-full min-h-0 w-full min-w-0 max-w-lg origin-center flex-col rounded-2xl border bg-popover not-dark:bg-clip-padding text-popover-foreground opacity-[calc(1-var(--nested-dialogs))] shadow-lg/5 outline-none transition-[scale,opacity,translate] duration-200 ease-in-out will-change-transform before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-2xl)-1px)] before:shadow-[0_1px_--theme(--color-black/4%)] data-ending-style:opacity-0 data-starting-style:opacity-0 motion-reduce:transition-opacity sm:scale-[calc(1-0.1*var(--nested-dialogs))] motion-safe:sm:data-ending-style:scale-98 motion-safe:sm:data-starting-style:scale-98 dark:before:shadow-[0_-1px_--theme(--color-white/6%)]',
          props.bottomStickOnMobile && 'max-sm:max-w-none max-sm:origin-bottom max-sm:rounded-none max-sm:border-x-0 max-sm:border-t max-sm:border-b-0 motion-safe:max-sm:data-ending-style:translate-y-4 motion-safe:max-sm:data-starting-style:translate-y-4 max-sm:before:hidden max-sm:before:rounded-none',
          props.class,
        )"
      >
        <slot />
        <DialogPrimitive.Close v-if="props.showCloseButton" v-bind="props.closeProps">
          <template #render="{ props: closeAttrs }">
            <Button
              v-bind="closeAttrs"
              aria-label="Close"
              class="absolute end-2 top-2"
              size="icon"
              variant="ghost"
            >
              <XIcon />
            </Button>
          </template>
        </DialogPrimitive.Close>
      </DialogPrimitive.Popup>
    </DialogViewport>
  </DialogPrimitive.Portal>
</template>
