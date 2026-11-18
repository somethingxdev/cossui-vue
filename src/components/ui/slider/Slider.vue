<script setup lang="ts">
import type { SliderRootProps, SliderThumbProps } from '@vase-ui/vue/slider'
import type { HTMLAttributes } from 'vue'
import { Slider as SliderPrimitive } from '@vase-ui/vue/slider'
import { computed } from 'vue'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ SliderRootProps {
  value?: SliderRootProps['value']
  defaultValue?: SliderRootProps['defaultValue']
  min?: number
  max?: number
  getAriaLabel?: SliderThumbProps['getAriaLabel']
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
  <SliderPrimitive.Root
    :class="cn('data-[orientation=horizontal]:w-full', props.class)"
    :default-value="props.defaultValue"
    :max="props.max"
    :min="props.min"
    thumb-alignment="edge"
    :value="props.value"
  >
    <slot />
    <SliderPrimitive.Control
      class="flex touch-none select-none data-disabled:pointer-events-none data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=horizontal]:w-full data-[orientation=horizontal]:min-w-44 data-[orientation=vertical]:flex-col data-disabled:opacity-64"
      data-slot="slider-control"
    >
      <SliderPrimitive.Track
        class="relative grow select-none before:absolute before:rounded-full before:bg-input data-[orientation=horizontal]:h-1 data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-1 data-[orientation=horizontal]:before:inset-x-0.5 data-[orientation=vertical]:before:inset-x-0 data-[orientation=horizontal]:before:inset-y-0 data-[orientation=vertical]:before:inset-y-0.5"
        data-slot="slider-track"
      >
        <SliderPrimitive.Indicator
          class="select-none rounded-full bg-primary data-[orientation=horizontal]:ms-0.5 data-[orientation=vertical]:mb-0.5"
          data-slot="slider-indicator"
        />
        <SliderPrimitive.Thumb
          v-for="n in thumbCount"
          :key="n"
          class="block size-5 shrink-0 select-none rounded-full border border-input bg-white not-dark:bg-clip-padding shadow-xs/5 outline-none transition-[box-shadow,scale] before:absolute before:inset-0 before:rounded-full before:shadow-[0_1px_--theme(--color-black/4%)] has-focus-visible:ring-[3px] has-focus-visible:ring-ring/24 data-dragging:scale-120 sm:size-4 dark:border-background dark:has-focus-visible:ring-ring/48 [:has(*:focus-visible),[data-dragging]]:shadow-none"
          data-slot="slider-thumb"
          :get-aria-label="props.getAriaLabel"
          :index="n - 1"
        />
      </SliderPrimitive.Track>
    </SliderPrimitive.Control>
  </SliderPrimitive.Root>
</template>
