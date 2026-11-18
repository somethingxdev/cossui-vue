<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '../../../lib/utils'
import { Separator } from '../separator'

type SeparatorProps = InstanceType<typeof Separator>['$props']

interface Props extends /* @vue-ignore */ SeparatorProps {
  orientation?: 'horizontal' | 'vertical'
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
