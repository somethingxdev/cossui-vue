<script setup lang="ts">
import type { TimePickerFieldProps } from '@vase-ui/vue/time-picker'
import type { HTMLAttributes } from 'vue'
import type { DateFieldVariants } from '../date-field'
import { ClockIcon } from '@lucide/vue'
import { TimePicker as TimePickerPrimitive } from '@vase-ui/vue/time-picker'
import { cn } from '../../../lib/utils'
import { Button } from '../button'
import { dateFieldControlClassName } from '../date-field'
import { TimeFieldInput } from '../time-field'

interface Props extends /* @vue-ignore */ TimePickerFieldProps {
  size?: DateFieldVariants['size']
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  size: 'default',
})
</script>

<template>
  <TimePickerPrimitive.Field
    data-slot="time-picker-field"
    :data-size="props.size"
    :class="cn(dateFieldControlClassName, props.class)"
  >
    <TimeFieldInput :size="props.size" class="pe-2" />
    <TimePickerPrimitive.Trigger data-slot="time-picker-trigger">
      <template #render="{ props: triggerProps }">
        <Button
          v-bind="triggerProps"
          class="me-[calc(--spacing(1)-1px)]"
          size="icon-xs"
          variant="ghost"
        >
          <ClockIcon aria-hidden="true" />
        </Button>
      </template>
    </TimePickerPrimitive.Trigger>
  </TimePickerPrimitive.Field>
</template>
