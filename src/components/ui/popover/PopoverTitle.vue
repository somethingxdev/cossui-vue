<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as PopoverPrimitive from '@ui-sdk/vue/popover'
import { cn } from '../../../lib/utils'

type PopoverTitleProps = InstanceType<typeof PopoverPrimitive.PopoverTitle>['$props']

interface Props extends /* @vue-ignore */ PopoverTitleProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <PopoverPrimitive.PopoverTitle :class="cn('font-semibold text-lg leading-none', props.class)">
    <slot />
  </PopoverPrimitive.PopoverTitle>
</template>
