<script setup lang="ts">
import type { SliderValueProps } from '@vase-ui/vue/slider'
import type { HTMLAttributes } from 'vue'
import { Slider as SliderPrimitive } from '@vase-ui/vue/slider'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ SliderValueProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <SliderPrimitive.Value
    data-slot="slider-value"
    :class="cn('flex justify-end text-sm', props.class)"
  >
    <!-- The part shows the formatted values only when it gets no default slot. -->
    <template v-if="$slots.default" #default="slotProps">
      <slot v-bind="slotProps" />
    </template>
  </SliderPrimitive.Value>
</template>
