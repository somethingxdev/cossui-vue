<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as OTPFieldPrimitive from '@ui-sdk/vue/otp-input'
import { cn } from '../../../lib/utils'

type OTPFieldSeparatorProps = InstanceType<typeof OTPFieldPrimitive.OTPInputSeparator>['$props']

interface Props extends /* @vue-ignore */ OTPFieldSeparatorProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <OTPFieldPrimitive.OTPInputSeparator :class="cn('h-0.5 w-3 shrink-0 rounded-full bg-input', props.class)" />
</template>
