<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as RadioPrimitive from '@ui-sdk/vue/radio'
import { cn } from '../../../lib/utils'

type RadioGroupProps = InstanceType<typeof RadioPrimitive.RadioGroup>['$props']

interface Props extends /* @vue-ignore */ RadioGroupProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <RadioPrimitive.RadioGroup :class="cn('flex flex-col gap-3', props.class)">
    <slot />
  </RadioPrimitive.RadioGroup>
</template>
