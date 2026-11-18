<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as MenuPrimitive from '@ui-sdk/vue/menu'
import { cn } from '../../../lib/utils'

type MenuGroupLabelProps = InstanceType<typeof MenuPrimitive.MenuGroupLabel>['$props']

interface Props extends /* @vue-ignore */ MenuGroupLabelProps {
  inset?: boolean
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <MenuPrimitive.MenuGroupLabel
    :class="cn('px-2 py-1.5 font-medium text-muted-foreground text-xs data-inset:ps-9 sm:data-inset:ps-8', props.class)"
    :data-inset="props.inset || undefined"
  >
    <slot />
  </MenuPrimitive.MenuGroupLabel>
</template>
