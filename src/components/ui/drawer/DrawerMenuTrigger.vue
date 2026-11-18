<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { ChevronRightIcon } from '@lucide/vue'
import * as DrawerPrimitive from '@ui-sdk/vue/drawer'
import { cn } from '../../../lib/utils'

type DrawerTriggerProps = InstanceType<typeof DrawerPrimitive.DrawerTrigger>['$props']

interface Props extends /* @vue-ignore */ DrawerTriggerProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <DrawerPrimitive.DrawerTrigger
    :class="cn(
      `flex min-h-9 w-full cursor-default select-none items-center gap-2 rounded-sm px-2 py-1 text-base text-foreground outline-none hover:bg-accent hover:text-accent-foreground sm:min-h-8 sm:text-sm [&_svg:not(:last-child)]:-mx-0.5 [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0`,
      props.class,
    )"
  >
    <slot />
    <ChevronRightIcon class="ms-auto -me-0.5 opacity-80" />
  </DrawerPrimitive.DrawerTrigger>
</template>
