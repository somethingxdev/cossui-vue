<script setup lang="ts">
import type { SeparatorProps } from '@vase-ui/vue/separator'
import type { HTMLAttributes } from 'vue'
import { OTPField as OTPFieldPrimitive } from '@vase-ui/vue/otp-field'
import { cn } from '../../../lib/utils'
import { Separator } from '../separator'

interface Props extends /* @vue-ignore */ SeparatorProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <OTPFieldPrimitive.Separator>
    <template #render="{ props: separatorProps, state }">
      <Separator
        v-bind="separatorProps"
        :orientation="state.orientation"
        :class="cn(
          'rounded-full bg-input data-[orientation=horizontal]:h-0.5 data-[orientation=horizontal]:w-3',
          props.class,
        )"
      />
    </template>
  </OTPFieldPrimitive.Separator>
</template>
