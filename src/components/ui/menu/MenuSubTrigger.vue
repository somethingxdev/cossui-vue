<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { ChevronRightIcon } from '@lucide/vue'
import * as MenuPrimitive from '@ui-sdk/vue/menu'
import { cn } from '../../../lib/utils'

type MenuSubTriggerProps = InstanceType<typeof MenuPrimitive.MenuSubTrigger>['$props']

interface Props extends /* @vue-ignore */ MenuSubTriggerProps {
  inset?: boolean
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <MenuPrimitive.MenuSubTrigger
    :class="cn(
      `flex min-h-8 items-center gap-2 rounded-sm px-2 py-1 text-base text-foreground outline-none data-disabled:pointer-events-none data-highlighted:bg-accent data-open:bg-accent data-inset:ps-8 data-highlighted:text-accent-foreground data-open:text-accent-foreground data-disabled:opacity-64 sm:min-h-7 sm:text-sm [&>svg:not(:last-child)]:-mx-0.5 [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none`,
      props.class,
    )"
    :data-inset="props.inset || undefined"
  >
    <slot />
    <ChevronRightIcon aria-hidden="true" class="ms-auto -me-0.5 opacity-80" />
  </MenuPrimitive.MenuSubTrigger>
</template>
