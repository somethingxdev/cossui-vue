<script setup lang="ts">
import type { HTMLAttributes, InputHTMLAttributes } from 'vue'
import type { DateFieldVariants } from './variants'
import { CalendarIcon } from '@lucide/vue'
import { pageLocale } from '@ui-sdk/core'
import { datePattern } from '@ui-sdk/vue/date'
import * as DatePickerPrimitive from '@ui-sdk/vue/date-picker'
import { cn } from '../../../lib/utils'
import { Button } from '../button'
import { dateFieldControlClassName, dateFieldInputVariants, pickerInputClassName } from './variants'

// The attributes go to the input, so that a label `for` its id names it.
interface Props extends /* @vue-ignore */ Omit<InputHTMLAttributes, 'size' | 'class'> {
  size?: DateFieldVariants['size']
  class?: HTMLAttributes['class']
}

defineOptions({ inheritAttrs: false })

const props = defineProps<Props>()

// The format the input reads, like "MM/DD/YYYY", in the page's language.
const placeholder = datePattern(pageLocale()).placeholder
</script>

<template>
  <div
    data-slot="date-picker-field"
    :data-size="props.size ?? 'default'"
    :class="cn(dateFieldControlClassName, props.class)"
  >
    <DatePickerPrimitive.DatePickerInput
      :placeholder="placeholder"
      v-bind="$attrs"
      :class="cn(dateFieldInputVariants({ size: props.size }), pickerInputClassName, 'pe-2')"
    />
    <DatePickerPrimitive.DatePickerTrigger>
      <template #render="{ props: part }">
        <Button
          v-bind="part"
          class="me-[calc(--spacing(1)-1px)]"
          size="icon-xs"
          variant="ghost"
        >
          <CalendarIcon aria-hidden="true" />
        </Button>
      </template>
    </DatePickerPrimitive.DatePickerTrigger>
  </div>
</template>
