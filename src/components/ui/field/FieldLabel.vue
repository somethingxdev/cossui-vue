<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as FieldPrimitive from '@ui-sdk/vue/field'
import { cn } from '../../../lib/utils'

type FieldLabelProps = InstanceType<typeof FieldPrimitive.FieldLabel>['$props']

interface Props extends /* @vue-ignore */ FieldLabelProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <FieldPrimitive.FieldLabel
    :class="cn(
      'inline-flex items-center gap-2 font-medium text-base/4.5 text-foreground data-disabled:opacity-64 sm:text-sm/4',
      props.class,
    )"
  >
    <slot />
  </FieldPrimitive.FieldLabel>
</template>
