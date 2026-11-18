<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as DatePickerPrimitive from '@ui-sdk/vue/date-picker'
import { cn } from '../../../lib/utils'
import { pickerPopupClassName, pickerViewportClassName } from './variants'

type DatePickerContentProps = InstanceType<typeof DatePickerPrimitive.DatePickerContent>['$props']

interface Props extends /* @vue-ignore */ DatePickerContentProps {
  align?: DatePickerContentProps['align']
  sideOffset?: number
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  align: 'center',
  sideOffset: 4,
})
</script>

<template>
  <DatePickerPrimitive.DatePickerContent
    :align="props.align"
    :side-offset="props.sideOffset"
    :class="cn(pickerPopupClassName, props.class)"
  >
    <div data-slot="date-picker-viewport" :class="pickerViewportClassName">
      <slot />
    </div>
  </DatePickerPrimitive.DatePickerContent>
</template>
