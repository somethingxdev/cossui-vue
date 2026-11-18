<script setup lang="ts">
import type { MenuSeparatorProps } from '@vase-ui/vue/menu'
import type { HTMLAttributes } from 'vue'
import { Menu as MenuPrimitive } from '@vase-ui/vue/menu'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ MenuSeparatorProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <MenuPrimitive.Separator
    :class="cn('mx-2 my-1 h-px bg-border', props.class)"
    data-slot="menu-separator"
  />
</template>
