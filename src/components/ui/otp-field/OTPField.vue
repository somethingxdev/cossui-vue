<script setup lang="ts">
import type { OTPFieldRootProps } from '@vase-ui/vue/otp-field'
import type { HTMLAttributes } from 'vue'
import { OTPField as OTPFieldPrimitive } from '@vase-ui/vue/otp-field'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ OTPFieldRootProps {
  length: number
  size?: 'default' | 'lg'
  class?: HTMLAttributes['class']
}

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<Props>(), {
  size: 'default',
})
</script>

<template>
  <OTPFieldPrimitive.Root
    v-bind="$attrs"
    :length="props.length"
    data-slot="otp-field"
    :data-size="props.size"
    :class="cn(
      'flex items-center gap-2 has-disabled:opacity-64 has-disabled:**:data-[slot=otp-field-input]:shadow-none has-disabled:**:data-[slot=otp-field-input]:before:shadow-none!',
      props.class,
    )"
  >
    <slot />
  </OTPFieldPrimitive.Root>
</template>
