<script setup lang="ts">
import type { MenuTriggerProps } from '@vase-ui/vue/menu'
import type { HTMLAttributes } from 'vue'
import { Menu as MenuPrimitive } from '@vase-ui/vue/menu'
import { cn } from '../../../lib/utils'
import { buttonVariants } from '../button'

interface Props extends /* @vue-ignore */ MenuTriggerProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <MenuPrimitive.Trigger
    :class="cn(buttonVariants({ variant: 'ghost' }), 'data-popup-open:bg-accent data-disabled:pointer-events-none data-disabled:opacity-64', props.class)"
    data-slot="menubar-trigger"
  >
    <slot />
  </MenuPrimitive.Trigger>
</template>
