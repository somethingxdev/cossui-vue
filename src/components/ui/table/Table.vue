<script lang="ts">
import type { Component, HTMLAttributes, TableHTMLAttributes } from 'vue'
</script>

<script setup lang="ts">
import { cn } from '../../../lib/utils'

export type TableVariant = 'default' | 'card'

export interface TableProps extends /* @vue-ignore */ TableHTMLAttributes {
  /** Element or component of the scrolling container around the table. */
  as?: string | Component
  variant?: TableVariant
  class?: HTMLAttributes['class']
}

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<TableProps>(), { as: 'div', variant: 'default' })
</script>

<template>
  <component
    :is="props.as"
    class="relative w-full overflow-x-auto"
    data-slot="table-container"
    :data-variant="props.variant"
  >
    <table
      data-slot="table"
      :class="cn('w-full caption-bottom in-data-[variant=card]:border-separate in-data-[variant=card]:border-spacing-0 text-sm', props.class)"
      v-bind="$attrs"
    >
      <slot />
    </table>
  </component>
</template>
