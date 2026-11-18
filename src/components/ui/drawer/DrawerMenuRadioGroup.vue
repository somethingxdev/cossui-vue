<script setup lang="ts">
import type { RadioGroupProps } from '@vase-ui/vue/radio-group'
import type { HTMLAttributes } from 'vue'
import { RadioGroup as RadioGroupPrimitive } from '@vase-ui/vue/radio-group'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ RadioGroupProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <RadioGroupPrimitive data-slot="drawer-menu-radio-group" :class="cn('flex flex-col', props.class)">
    <slot />
  </RadioGroupPrimitive>
</template>
