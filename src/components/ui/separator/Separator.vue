<script setup lang="ts">
import type { SeparatorProps as SeparatorPrimitiveProps } from '@vase-ui/vue/separator'
import type { HTMLAttributes } from 'vue'
import { Separator as SeparatorPrimitive } from '@vase-ui/vue/separator'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ SeparatorPrimitiveProps {
  orientation?: SeparatorPrimitiveProps['orientation']
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  orientation: 'horizontal',
})
</script>

<template>
  <SeparatorPrimitive
    data-slot="separator"
    :orientation="props.orientation"
    :class="cn(
      `shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px data-[orientation=vertical]:not-[[class^='h-']]:not-[[class*='_h-']]:self-stretch`,
      props.class,
    )"
  />
</template>
