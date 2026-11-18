<script setup lang="ts">
import type { DateRangePickerPopupProps, DateRangePickerPortalProps, DateRangePickerPositionerProps } from '@vase-ui/vue/date-range-picker'
import type { HTMLAttributes } from 'vue'
import { DateRangePicker as DateRangePickerPrimitive } from '@vase-ui/vue/date-range-picker'
import { cn } from '../../../lib/utils'
import { pickerPopupClassName, pickerPositionerClassName, pickerViewportClassName } from '../date-picker'

interface Props extends /* @vue-ignore */ DateRangePickerPopupProps {
  side?: DateRangePickerPositionerProps['side']
  align?: DateRangePickerPositionerProps['align']
  sideOffset?: DateRangePickerPositionerProps['sideOffset']
  alignOffset?: DateRangePickerPositionerProps['alignOffset']
  anchor?: DateRangePickerPositionerProps['anchor']
  portalProps?: DateRangePickerPortalProps
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
  <DateRangePickerPrimitive.Portal v-bind="props.portalProps">
    <DateRangePickerPrimitive.Positioner
      data-slot="date-range-picker-positioner"
      :side="props.side"
      :align="props.align"
      :side-offset="props.sideOffset"
      :align-offset="props.alignOffset"
      :anchor="props.anchor"
      :class="pickerPositionerClassName"
    >
      <DateRangePickerPrimitive.Popup
        v-bind="$attrs"
        data-slot="date-range-picker-popup"
        :class="cn(pickerPopupClassName, props.class)"
      >
        <div data-slot="date-range-picker-viewport" :class="pickerViewportClassName">
          <slot />
        </div>
      </DateRangePickerPrimitive.Popup>
    </DateRangePickerPrimitive.Positioner>
  </DateRangePickerPrimitive.Portal>
</template>
