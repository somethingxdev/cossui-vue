<script setup lang="ts">
import type { FieldLabelProps } from '@vase-ui/vue/field'
import type { HTMLAttributes } from 'vue'
import { Field as FieldPrimitive } from '@vase-ui/vue/field'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ FieldLabelProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <FieldPrimitive.Label
    data-slot="field-label"
    :class="cn(
      'inline-flex items-center gap-2 font-medium text-base/4.5 text-foreground data-disabled:opacity-64 sm:text-sm/4',
      props.class,
    )"
  >
    <slot />
  </FieldPrimitive.Label>
</template>
