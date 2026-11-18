<script setup lang="ts">
import type { DialogCloseProps, DialogPopupProps, DialogPortalProps } from '@vase-ui/vue/dialog'
import type { HTMLAttributes } from 'vue'
import { XIcon } from '@lucide/vue'
import { Dialog as SheetPrimitive } from '@vase-ui/vue/dialog'
import { cn } from '../../../lib/utils'
import { Button } from '../button'
import SheetBackdrop from './SheetBackdrop.vue'
import SheetViewport from './SheetViewport.vue'

interface Props extends /* @vue-ignore */ DialogPopupProps {
  showCloseButton?: boolean
  side?: 'right' | 'left' | 'top' | 'bottom'
  variant?: 'default' | 'inset'
  closeProps?: DialogCloseProps
  portalProps?: DialogPortalProps
  class?: HTMLAttributes['class']
}

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<Props>(), {
  showCloseButton: true,
  side: 'right',
  variant: 'default',
})
</script>

<template>
  <SheetPrimitive.Portal v-bind="props.portalProps">
    <SheetBackdrop />
    <SheetViewport :side="props.side" :variant="props.variant">
      <SheetPrimitive.Popup
        v-bind="$attrs"
        data-slot="sheet-popup"
        :class="cn(
          'relative flex max-h-full min-h-0 w-full min-w-0 flex-col bg-popover not-dark:bg-clip-padding text-popover-foreground shadow-lg/5 transition-[opacity,translate] duration-200 ease-in-out will-change-transform before:pointer-events-none before:absolute before:inset-0 before:shadow-[0_1px_--theme(--color-black/4%)] data-ending-style:opacity-0 data-starting-style:opacity-0 max-sm:before:hidden dark:before:shadow-[0_-1px_--theme(--color-white/6%)]',
          props.side === 'bottom' && 'row-start-2 border-t data-ending-style:translate-y-8 data-starting-style:translate-y-8',
          props.side === 'top' && 'border-b data-ending-style:-translate-y-8 data-starting-style:-translate-y-8',
          props.side === 'left' && 'w-[calc(100%-(--spacing(12)))] max-w-md border-e data-ending-style:-translate-x-8 data-starting-style:-translate-x-8',
          props.side === 'right' && 'col-start-2 w-[calc(100%-(--spacing(12)))] max-w-md border-s data-ending-style:translate-x-8 data-starting-style:translate-x-8',
          props.variant === 'inset' && 'before:hidden sm:rounded-2xl sm:border sm:before:rounded-[calc(var(--radius-2xl)-1px)] sm:**:data-[slot=sheet-footer]:rounded-b-[calc(var(--radius-2xl)-1px)]',
          props.class,
        )"
      >
        <slot />
        <SheetPrimitive.Close v-if="props.showCloseButton" v-bind="props.closeProps">
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
        </SheetPrimitive.Close>
      </SheetPrimitive.Popup>
    </SheetViewport>
  </SheetPrimitive.Portal>
</template>
