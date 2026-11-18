<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as DrawerPrimitive from '@ui-sdk/vue/drawer'
import { cn } from '../../../lib/utils'

type DrawerDescriptionProps = InstanceType<typeof DrawerPrimitive.DrawerDescription>['$props']

interface Props extends /* @vue-ignore */ DrawerDescriptionProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <DrawerPrimitive.DrawerDescription :class="cn('text-muted-foreground text-sm', props.class)">
    <slot />
  </DrawerPrimitive.DrawerDescription>
</template>
