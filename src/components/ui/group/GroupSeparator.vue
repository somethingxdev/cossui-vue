<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '../../../lib/utils'
import { Separator } from '../separator'

type SeparatorProps = InstanceType<typeof Separator>['$props']

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
      'pointer-events-none relative z-2 bg-input before:absolute before:inset-0 has-[+[data-slot=input-control]:focus-within,+[data-slot=input-group]:focus-within,+[data-slot=select-trigger]:focus-visible+*,+[data-slot^=number-input]:focus-within]:translate-x-px has-[+[data-slot=input-control]:focus-within,+[data-slot=input-group]:focus-within,+[data-slot=select-trigger]:focus-visible+*,+[data-slot^=number-input]:focus-within]:bg-ring dark:before:bg-input/32 [[data-slot=input-control]:focus-within+&,[data-slot=input-group]:focus-within+&,[data-slot=select-trigger]:focus-visible+*+&,[data-slot^=number-input]:focus-within+&,[data-slot^=number-input]:focus-within+input+&]:bg-ring [[data-slot=input-control]:focus-within+&,[data-slot=input-group]:focus-within+&,[data-slot=select-trigger]:focus-visible+*+&,[data-slot^=number-input]:focus-within+input+&]:-translate-x-px',
      props.class,
    )"
  />
</template>
