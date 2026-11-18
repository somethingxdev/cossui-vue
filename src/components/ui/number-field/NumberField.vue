<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as NumberFieldPrimitive from '@ui-sdk/vue/number-input'
import { computed, provide, useId } from 'vue'
import { cn } from '../../../lib/utils'
import { NumberFieldContext } from './context'

type NumberFieldRootProps = InstanceType<typeof NumberFieldPrimitive.NumberInput>['$props']

interface Props extends /* @vue-ignore */ NumberFieldRootProps {
  id?: string
  size?: 'sm' | 'default' | 'lg'
  class?: HTMLAttributes['class']
}

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<Props>(), {
  size: 'default',
})

const generatedId = useId()
const fieldId = computed(() => props.id ?? generatedId)

provide(NumberFieldContext, { fieldId })
</script>

<template>
  <NumberFieldPrimitive.NumberInput
    v-bind="$attrs"
    :data-size="props.size"
    :class="cn('flex w-full flex-col items-start gap-2', props.class)"
  >
    <slot />
  </NumberFieldPrimitive.NumberInput>
</template>
