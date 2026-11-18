<script setup lang="ts">
import type { ContextMenuCheckboxItemProps } from '@vase-ui/vue/context-menu'
import type { HTMLAttributes } from 'vue'
import { ContextMenu as ContextMenuPrimitive } from '@vase-ui/vue/context-menu'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ ContextMenuCheckboxItemProps {
  variant?: 'default' | 'switch'
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
})
</script>

<template>
  <ContextMenuPrimitive.CheckboxItem
    :class="cn(
      `grid min-h-8 in-data-[side=none]:min-w-[calc(var(--anchor-width)+1.25rem)] cursor-default items-center gap-2 rounded-sm py-1 ps-2 text-base text-foreground outline-none data-disabled:pointer-events-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:opacity-64 sm:min-h-7 sm:text-sm [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0`,
      props.variant === 'switch' ? 'grid-cols-[1fr_auto] gap-4 pe-1.5' : 'grid-cols-[.75rem_1fr] pe-4',
      props.class,
    )"
    data-slot="context-menu-checkbox-item"
  >
    <template v-if="props.variant === 'switch'">
      <span class="col-start-1"><slot /></span>
      <ContextMenuPrimitive.CheckboxItemIndicator
        class="inset-shadow-[0_1px_--theme(--color-black/4%)] inline-flex h-[calc(var(--thumb-size)+2px)] w-[calc(var(--thumb-size)*2-2px)] shrink-0 items-center rounded-full p-px outline-none transition-[background-color,box-shadow] duration-200 [--thumb-size:--spacing(4)] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background data-checked:bg-primary data-unchecked:bg-input data-disabled:opacity-64 sm:[--thumb-size:--spacing(3)]"
        keep-mounted
      >
        <span class="pointer-events-none block aspect-square h-full in-[[data-slot=context-menu-checkbox-item][data-checked]]:origin-[var(--thumb-size)_50%] origin-left in-[[data-slot=context-menu-checkbox-item][data-checked]]:translate-x-[calc(var(--thumb-size)-4px)] in-[[data-slot=context-menu-checkbox-item]:active]:not-data-disabled:scale-x-110 in-[[data-slot=context-menu-checkbox-item]:active]:rounded-[var(--thumb-size)/calc(var(--thumb-size)*1.10)] rounded-(--thumb-size) bg-background shadow-sm/5 will-change-transform [transition:translate_.15s,border-radius_.15s,scale_.1s_.1s,transform-origin_.15s] rtl:in-[[data-slot=context-menu-checkbox-item][data-checked]]:origin-left rtl:origin-right rtl:in-[[data-slot=context-menu-checkbox-item][data-checked]]:-translate-x-[calc(var(--thumb-size)-4px)]" />
      </ContextMenuPrimitive.CheckboxItemIndicator>
    </template>
    <template v-else>
      <ContextMenuPrimitive.CheckboxItemIndicator class="col-start-1 -ms-0.5">
        <svg
          aria-hidden="true"
          fill="none"
          height="24"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5.252 12.7 10.2 18.63 18.748 5.37" />
        </svg>
      </ContextMenuPrimitive.CheckboxItemIndicator>
      <span class="col-start-2"><slot /></span>
    </template>
  </ContextMenuPrimitive.CheckboxItem>
</template>
