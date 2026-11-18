<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as DrawerPrimitive from '@ui-sdk/vue/drawer'
import { cn } from '../../../lib/utils'

type DrawerTitleProps = InstanceType<typeof DrawerPrimitive.DrawerTitle>['$props']

interface Props extends /* @vue-ignore */ DrawerTitleProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <DrawerPrimitive.DrawerTitle :class="cn('font-bold font-heading text-xl leading-none', props.class)">
    <slot />
  </DrawerPrimitive.DrawerTitle>
</template>
