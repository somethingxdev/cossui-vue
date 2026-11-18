<script setup lang="ts">
import type { DatePickerPopupProps, DatePickerPortalProps, DatePickerPositionerProps } from '@vase-ui/vue/date-picker'
import type { HTMLAttributes } from 'vue'
import { DatePicker as DatePickerPrimitive } from '@vase-ui/vue/date-picker'
import { cn } from '../../../lib/utils'
import { pickerPopupClassName, pickerPositionerClassName, pickerViewportClassName } from './variants'

interface Props extends /* @vue-ignore */ DatePickerPopupProps {
  side?: DatePickerPositionerProps['side']
  align?: DatePickerPositionerProps['align']
  sideOffset?: DatePickerPositionerProps['sideOffset']
  alignOffset?: DatePickerPositionerProps['alignOffset']
  anchor?: DatePickerPositionerProps['anchor']
  portalProps?: DatePickerPortalProps
  class?: HTMLAttributes['class']
}

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<Props>(), {
  side: 'bottom',
  sideOffset: 4,
  alignOffset: 0,
})
</script>

<template>
  <DatePickerPrimitive.Portal v-bind="props.portalProps">
    <DatePickerPrimitive.Positioner
      data-slot="date-picker-positioner"
      :side="props.side"
      :align="props.align"
      :side-offset="props.sideOffset"
      :align-offset="props.alignOffset"
      :anchor="props.anchor"
      :class="pickerPositionerClassName"
    >
      <DatePickerPrimitive.Popup
        v-bind="$attrs"
        data-slot="date-picker-popup"
        :class="cn(pickerPopupClassName, props.class)"
      >
        <div data-slot="date-picker-viewport" :class="pickerViewportClassName">
          <slot />
        </div>
      </DatePickerPrimitive.Popup>
    </DatePickerPrimitive.Positioner>
  </DatePickerPrimitive.Portal>
</template>
