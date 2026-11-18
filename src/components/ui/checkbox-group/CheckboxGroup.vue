<script setup lang="ts">
import type { CheckboxGroupProps } from '@vase-ui/vue/checkbox-group'
import type { HTMLAttributes } from 'vue'
import { CheckboxGroup as CheckboxGroupPrimitive } from '@vase-ui/vue/checkbox-group'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ CheckboxGroupProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <CheckboxGroupPrimitive :class="cn('flex flex-col items-start gap-3', props.class)">
    <slot />
  </CheckboxGroupPrimitive>
</template>
