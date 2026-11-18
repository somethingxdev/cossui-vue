<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as SliderPrimitive from '@ui-sdk/vue/slider'
import { cn } from '../../../lib/utils'

type SliderValueProps = InstanceType<typeof SliderPrimitive.SliderValue>['$props']

interface Props extends /* @vue-ignore */ SliderValueProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <SliderPrimitive.SliderValue
    :class="cn('flex justify-end text-sm', props.class)"
  >
    <!-- The part shows the formatted values only when it gets no default slot. -->
    <template v-if="$slots.default" #default="slotProps">
      <slot v-bind="slotProps" />
    </template>
  </SliderPrimitive.SliderValue>
</template>
