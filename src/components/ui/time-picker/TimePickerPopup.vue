<script setup lang="ts">
import type { TimePickerPopupProps, TimePickerPortalProps, TimePickerPositionerProps } from '@vase-ui/vue/time-picker'
import type { HTMLAttributes } from 'vue'
import { TimePicker as TimePickerPrimitive } from '@vase-ui/vue/time-picker'
import { cn } from '../../../lib/utils'
import { pickerPopupClassName, pickerPositionerClassName, pickerViewportClassName } from '../date-picker'

interface Props extends /* @vue-ignore */ TimePickerPopupProps {
  side?: TimePickerPositionerProps['side']
  align?: TimePickerPositionerProps['align']
  sideOffset?: TimePickerPositionerProps['sideOffset']
  alignOffset?: TimePickerPositionerProps['alignOffset']
  anchor?: TimePickerPositionerProps['anchor']
  portalProps?: TimePickerPortalProps
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
  <TimePickerPrimitive.Portal v-bind="props.portalProps">
    <TimePickerPrimitive.Positioner
      data-slot="time-picker-positioner"
      :side="props.side"
      :align="props.align"
      :side-offset="props.sideOffset"
      :align-offset="props.alignOffset"
      :anchor="props.anchor"
      :class="pickerPositionerClassName"
    >
      <TimePickerPrimitive.Popup
        v-bind="$attrs"
        data-slot="time-picker-popup"
        :class="cn(pickerPopupClassName, props.class)"
      >
        <div
          data-slot="time-picker-viewport"
          :class="cn(pickerViewportClassName, 'has-data-[slot=time-picker-column]:p-1 has-data-[slot=time-picker-list]:p-1')"
        >
          <slot />
        </div>
      </TimePickerPrimitive.Popup>
    </TimePickerPrimitive.Positioner>
  </TimePickerPrimitive.Portal>
</template>
