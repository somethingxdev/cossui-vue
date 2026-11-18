<script setup lang="ts">
import type { DatePickerFieldProps } from '@vase-ui/vue/date-picker'
import type { HTMLAttributes } from 'vue'
import type { DateFieldVariants } from '../date-field'
import { CalendarIcon } from '@lucide/vue'
import { DatePicker as DatePickerPrimitive } from '@vase-ui/vue/date-picker'
import { cn } from '../../../lib/utils'
import { Button } from '../button'
import { dateFieldControlClassName, DateFieldInput } from '../date-field'

interface Props extends /* @vue-ignore */ DatePickerFieldProps {
  size?: DateFieldVariants['size']
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  size: 'default',
})
</script>

<template>
  <DatePickerPrimitive.Field
    data-slot="date-picker-field"
    :data-size="props.size"
    :class="cn(dateFieldControlClassName, props.class)"
  >
    <DateFieldInput :size="props.size" class="pe-2" />
    <DatePickerPrimitive.Trigger data-slot="date-picker-trigger">
      <template #render="{ props: triggerProps }">
        <Button
          v-bind="triggerProps"
          class="me-[calc(--spacing(1)-1px)]"
          size="icon-xs"
          variant="ghost"
        >
          <CalendarIcon aria-hidden="true" />
        </Button>
      </template>
    </DatePickerPrimitive.Trigger>
  </DatePickerPrimitive.Field>
</template>
