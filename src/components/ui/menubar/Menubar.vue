<script setup lang="ts">
import type { MenubarProps } from '@vase-ui/vue/menubar'
import type { HTMLAttributes } from 'vue'
import { Menubar as MenubarPrimitive } from '@vase-ui/vue/menubar'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ MenubarProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <MenubarPrimitive
    :class="cn(
      'relative flex gap-1 rounded-xl border bg-card not-dark:bg-clip-padding p-1 text-card-foreground data-[orientation=vertical]:flex-col',
      props.class,
    )"
    data-slot="menubar"
  >
    <slot />
  </MenubarPrimitive>
</template>
