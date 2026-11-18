<script lang="ts">
import type { ButtonHTMLAttributes, Component, HTMLAttributes } from 'vue'
import type { SelectTriggerVariants } from './variants'
</script>

<script setup lang="ts">
import { ChevronsUpDownIcon } from '@lucide/vue'
import { cn } from '../../../lib/utils'
import { selectTriggerIconClassName, selectTriggerVariants } from './variants'

export interface SelectButtonProps extends /* @vue-ignore */ ButtonHTMLAttributes {
  as?: string | Component
  size?: SelectTriggerVariants['size']
  class?: HTMLAttributes['class']
}

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<SelectButtonProps>(), { as: 'button' })
</script>

<template>
  <!-- $attrs last: a part that renders as this button (`:as="SelectButton"`) keeps its own data-slot. -->
  <component
    :is="props.as"
    data-slot="select-button"
    :type="props.as === 'button' ? 'button' : undefined"
    :class="cn(selectTriggerVariants({ size: props.size }), 'min-w-0', props.class)"
    v-bind="$attrs"
  >
    <span class="flex-1 truncate in-data-placeholder:text-muted-foreground/72">
      <slot />
    </span>
    <ChevronsUpDownIcon :class="selectTriggerIconClassName" />
  </component>
</template>
