<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { XIcon } from '@lucide/vue'
import * as SheetPrimitive from '@ui-sdk/vue/dialog'
import { cn } from '../../../lib/utils'
import { Button } from '../button'
import SheetBackdrop from './SheetBackdrop.vue'

type DialogContentProps = InstanceType<typeof SheetPrimitive.DialogContent>['$props']
type DialogCloseProps = InstanceType<typeof SheetPrimitive.DialogClose>['$props']

interface Props extends /* @vue-ignore */ DialogContentProps {
  showCloseButton?: boolean
  side?: 'right' | 'left' | 'top' | 'bottom'
  variant?: 'default' | 'inset'
  closeProps?: DialogCloseProps
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
  <SheetBackdrop />
  <!-- The content sits in the top layer, so it pins itself to its side; --sheet-inset is the gap the inset variant leaves around it. -->
  <SheetPrimitive.DialogContent
    v-bind="$attrs"
    :class="cn(
      'fixed z-50 flex max-h-none min-h-0 max-w-none min-w-0 flex-col bg-popover not-dark:bg-clip-padding text-popover-foreground shadow-lg/5 transition-[opacity,translate] duration-200 ease-in-out will-change-transform [--sheet-inset:0px] before:pointer-events-none before:absolute before:inset-0 before:shadow-[0_1px_--theme(--color-black/4%)] data-ending-style:opacity-0 data-starting-style:opacity-0 max-sm:before:hidden dark:before:shadow-[0_-1px_--theme(--color-white/6%)]',
      (props.side === 'bottom' || props.side === 'top') && 'inset-x-(--sheet-inset) h-auto w-auto max-h-[calc(100dvh-(--spacing(12))-var(--sheet-inset))]',
      props.side === 'bottom' && 'top-auto bottom-(--sheet-inset) border-t data-ending-style:translate-y-8 data-starting-style:translate-y-8',
      props.side === 'top' && 'top-(--sheet-inset) bottom-auto border-b data-ending-style:-translate-y-8 data-starting-style:-translate-y-8',
      (props.side === 'left' || props.side === 'right') && 'inset-y-(--sheet-inset) h-auto w-[calc(100%-(--spacing(12)))] max-w-md',
      props.side === 'left' && 'start-(--sheet-inset) end-auto border-e data-ending-style:-translate-x-8 data-starting-style:-translate-x-8',
      props.side === 'right' && 'start-auto end-(--sheet-inset) border-s data-ending-style:translate-x-8 data-starting-style:translate-x-8',
      props.variant === 'inset' && 'before:hidden sm:rounded-2xl sm:border sm:[--sheet-inset:--spacing(4)] sm:before:rounded-[calc(var(--radius-2xl)-1px)] sm:**:data-[slot=sheet-footer]:rounded-b-[calc(var(--radius-2xl)-1px)]',
      props.class,
    )"
  >
    <slot />
    <SheetPrimitive.DialogClose v-if="props.showCloseButton" v-bind="props.closeProps">
      <template #render="{ props: part }">
        <Button
          v-bind="part"
          aria-label="Close"
          class="absolute end-2 top-2"
          size="icon"
          variant="ghost"
        >
          <XIcon />
        </Button>
      </template>
    </SheetPrimitive.DialogClose>
  </SheetPrimitive.DialogContent>
</template>
