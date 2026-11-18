<script setup lang="ts">
import type { MenuGroupLabelProps } from '@vase-ui/vue/menu'
import type { HTMLAttributes } from 'vue'
import { Menu as MenuPrimitive } from '@vase-ui/vue/menu'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ MenuGroupLabelProps {
  inset?: boolean
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <MenuPrimitive.GroupLabel
    :class="cn('px-2 py-1.5 font-medium text-muted-foreground text-xs data-inset:ps-9 sm:data-inset:ps-8', props.class)"
    :data-inset="props.inset || undefined"
    data-slot="menu-label"
  >
    <slot />
  </MenuPrimitive.GroupLabel>
</template>
