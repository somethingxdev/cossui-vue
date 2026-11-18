<script setup lang="ts">
import type { SelectItemProps } from '@vase-ui/vue/select'
import type { HTMLAttributes } from 'vue'
import { Select as SelectPrimitive } from '@vase-ui/vue/select'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ SelectItemProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <SelectPrimitive.Item
    data-slot="select-item"
    :class="cn(
      `grid min-h-8 in-data-[side=none]:min-w-[calc(var(--anchor-width)+1.25rem)] cursor-default grid-cols-[1rem_minmax(0,1fr)] items-center gap-2 rounded-sm py-1 ps-2 pe-4 text-base outline-none data-disabled:pointer-events-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:opacity-64 sm:min-h-7 sm:text-sm [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0`,
      props.class,
    )"
  >
    <SelectPrimitive.ItemIndicator class="col-start-1">
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
    </SelectPrimitive.ItemIndicator>
    <SelectPrimitive.ItemText class="wrap-anywhere col-start-2 min-w-0">
      <slot />
    </SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
</template>
