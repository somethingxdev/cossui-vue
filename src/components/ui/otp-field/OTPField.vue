<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as OTPFieldPrimitive from '@ui-sdk/vue/otp-input'
import { provide } from 'vue'
import { cn } from '../../../lib/utils'
import { OTPFieldContext } from './context'

type OTPFieldRootProps = InstanceType<typeof OTPFieldPrimitive.OTPInput>['$props']

interface Props extends /* @vue-ignore */ OTPFieldRootProps {
  length: number
  size?: 'default' | 'lg'
  mask?: boolean
  class?: HTMLAttributes['class']
}

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<Props>(), {
  size: 'default',
})

provide(OTPFieldContext, props)
</script>

<template>
  <OTPFieldPrimitive.OTPInput
    v-bind="$attrs"
    :max-length="props.length"
    :data-size="props.size"
    :class="cn(
      'flex items-center gap-2 data-disabled:opacity-64 data-disabled:**:data-[slot=otp-input-slot]:shadow-none data-disabled:**:data-[slot=otp-input-slot]:before:shadow-none!',
      props.class,
    )"
  >
    <slot />
  </OTPFieldPrimitive.OTPInput>
</template>
