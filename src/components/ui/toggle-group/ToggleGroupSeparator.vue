<script setup lang="ts">
import type { SeparatorProps } from '@vase-ui/vue/separator'
import type { HTMLAttributes } from 'vue'
import { cn } from '../../../lib/utils'
import { Separator } from '../separator'

interface Props extends /* @vue-ignore */ SeparatorProps {
  orientation?: SeparatorProps['orientation']
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  orientation: 'vertical',
})
</script>

<template>
  <Separator
    :orientation="props.orientation"
    :class="cn(
      'pointer-events-none relative bg-input before:absolute before:inset-0 dark:before:bg-input/32',
      props.class,
    )"
  />
</template>
