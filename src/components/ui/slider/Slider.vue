<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as SliderPrimitive from '@ui-sdk/vue/slider'
import { computed } from 'vue'
import { cn } from '../../../lib/utils'

type SliderProps = InstanceType<typeof SliderPrimitive.Slider>['$props']

interface Props extends /* @vue-ignore */ SliderProps {
  value?: number | number[]
  defaultValue?: number | number[]
  min?: number
  max?: number
  getAriaLabel?: (index: number) => string
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  min: 0,
  max: 100,
})

const thumbCount = computed(() => {
  const values = props.value ?? props.defaultValue ?? props.min
  return typeof values === 'number'
    ? 1
    : values.length
})
</script>

<template>
  <SliderPrimitive.Slider
    :class="cn('data-[orientation=horizontal]:w-full', props.class)"
    :default-value="props.defaultValue"
    :max="props.max"
    :min="props.min"
    :value="props.value"
  >
    <slot />
    <!-- UI SDK centers a thumb on its value. The track is inset by half a thumb and its rail and indicator drawn back out, so thumbs stay inside the edges as in coss ui. -->
    <SliderPrimitive.SliderControl
      class="flex touch-none select-none data-disabled:pointer-events-none data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=horizontal]:w-full data-[orientation=horizontal]:min-w-44 data-[orientation=vertical]:flex-col data-disabled:opacity-64"
    >
      <SliderPrimitive.SliderTrack
        class="relative grow select-none before:absolute before:rounded-full before:bg-input data-[orientation=horizontal]:mx-2.5 data-[orientation=vertical]:my-2.5 data-[orientation=horizontal]:h-1 data-[orientation=vertical]:w-1 data-[orientation=horizontal]:before:-inset-x-2 data-[orientation=vertical]:before:inset-x-0 data-[orientation=horizontal]:before:inset-y-0 data-[orientation=vertical]:before:-inset-y-2 sm:data-[orientation=horizontal]:mx-2 sm:data-[orientation=vertical]:my-2 sm:data-[orientation=horizontal]:before:-inset-x-1.5 sm:data-[orientation=vertical]:before:-inset-y-1.5"
      >
        <SliderPrimitive.SliderIndicator
          class="select-none rounded-full bg-primary data-[orientation=horizontal]:-ms-2 data-[orientation=vertical]:-mb-2 sm:data-[orientation=horizontal]:-ms-1.5 sm:data-[orientation=vertical]:-mb-1.5"
        />
        <SliderPrimitive.SliderThumb
          v-for="n in thumbCount"
          :key="n"
          class="block size-5 shrink-0 select-none rounded-full border border-input bg-white not-dark:bg-clip-padding shadow-xs/5 outline-none transition-[box-shadow,scale] before:absolute before:inset-0 before:rounded-full before:shadow-[0_1px_--theme(--color-black/4%)] has-focus-visible:ring-[3px] has-focus-visible:ring-ring/24 data-dragging:scale-120 sm:size-4 dark:border-background dark:has-focus-visible:ring-ring/48 [:has(*:focus-visible),[data-dragging]]:shadow-none"
          :aria-label="props.getAriaLabel?.(n - 1)"
          :index="n - 1"
        />
      </SliderPrimitive.SliderTrack>
    </SliderPrimitive.SliderControl>
  </SliderPrimitive.Slider>
</template>
