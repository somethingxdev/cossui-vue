<script setup lang="ts">
import type { DateRangePickerStartFieldProps } from '@vase-ui/vue/date-range-picker'
import type { HTMLAttributes } from 'vue'
import type { DateFieldVariants } from '../date-field'
import { CalendarIcon } from '@lucide/vue'
import { DateRangePicker as DateRangePickerPrimitive } from '@vase-ui/vue/date-range-picker'
import { cn } from '../../../lib/utils'
import { Button } from '../button'
import { dateFieldControlClassName, DateFieldInput } from '../date-field'

// The attributes go to the start field, so that a label `for` its id names it, as for an input.
interface Props extends /* @vue-ignore */ DateRangePickerStartFieldProps {
  size?: DateFieldVariants['size']
  class?: HTMLAttributes['class']
}

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<Props>(), {
  size: 'default',
})
</script>

<template>
  <div
    data-slot="date-range-picker-field"
    :data-size="props.size"
    :class="cn(dateFieldControlClassName, props.class)"
  >
    <DateRangePickerPrimitive.StartField v-bind="$attrs" data-slot="date-range-picker-start-field">
      <DateFieldInput :size="props.size" class="pe-1.5" />
    </DateRangePickerPrimitive.StartField>
    <span aria-hidden="true" class="text-muted-foreground">–</span>
    <DateRangePickerPrimitive.EndField data-slot="date-range-picker-end-field" class="flex-1">
      <DateFieldInput :size="props.size" class="ps-1.5 pe-2" />
    </DateRangePickerPrimitive.EndField>
    <DateRangePickerPrimitive.Trigger data-slot="date-range-picker-trigger">
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
    </DateRangePickerPrimitive.Trigger>
  </div>
</template>
