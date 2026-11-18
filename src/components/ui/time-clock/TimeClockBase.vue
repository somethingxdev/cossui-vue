<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { TimeClock as TimeClockPrimitive } from '@vase-ui/vue/time-clock'
import { cn } from '../../../lib/utils'

const props = defineProps<{
  /** The root part: `TimeClock.Root` or the clock of a time picker. */
  root: object
  /** Whether the header has a trigger for the seconds. */
  seconds?: boolean
  class?: HTMLAttributes['class']
}>()

// The look of coss Toggle, with the pressed state of a view or a day period.
const toggleClassName = 'relative inline-flex shrink-0 cursor-pointer select-none items-center justify-center rounded-lg font-medium text-muted-foreground tabular-nums outline-none transition-[color,background-color,box-shadow] hover:bg-accent hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-64'

const viewTriggerClassName = cn(toggleClassName, 'h-11 min-w-11 px-1.5 text-3xl data-active:bg-input/64 data-active:text-foreground sm:h-10 sm:min-w-10 sm:text-2xl')
const dayPeriodClassName = cn(toggleClassName, 'h-5 px-1.5 text-xs data-selected:bg-input/64 data-selected:text-foreground')
</script>

<template>
  <component
    :is="props.root"
    data-slot="time-clock"
    :class="cn('flex w-fit flex-col items-center gap-4', props.class)"
  >
    <div data-slot="time-clock-header" class="flex items-center gap-0.5">
      <TimeClockPrimitive.ViewTrigger view="hour" :class="viewTriggerClassName" />
      <span aria-hidden="true" class="font-medium text-2xl text-muted-foreground/72">:</span>
      <TimeClockPrimitive.ViewTrigger view="minute" :class="viewTriggerClassName" />
      <template v-if="props.seconds">
        <span aria-hidden="true" class="font-medium text-2xl text-muted-foreground/72">:</span>
        <TimeClockPrimitive.ViewTrigger view="second" :class="viewTriggerClassName" />
      </template>
      <div class="ms-1.5 flex flex-col gap-0.5 empty:hidden">
        <TimeClockPrimitive.DayPeriod value="am" :class="dayPeriodClassName" />
        <TimeClockPrimitive.DayPeriod value="pm" :class="dayPeriodClassName" />
      </div>
    </div>
    <TimeClockPrimitive.Face
      data-slot="time-clock-face"
      class="relative size-56 shrink-0 cursor-pointer select-none rounded-full border border-input bg-background not-dark:bg-clip-padding shadow-xs/5 ring-ring/24 transition-shadow [--time-clock-radius:--spacing(23)] has-focus-visible:border-ring has-focus-visible:ring-[3px] data-disabled:cursor-default data-disabled:opacity-64 data-readonly:cursor-default dark:bg-input/32"
    >
      <TimeClockPrimitive.Hand
        data-slot="time-clock-hand"
        class="pointer-events-none absolute bottom-1/2 left-1/2 h-[calc(var(--time-clock-hand-length)*var(--time-clock-radius))] w-0.5 origin-bottom -translate-x-1/2 rotate-(--time-clock-hand-angle) bg-primary before:absolute before:-bottom-1 before:left-1/2 before:size-2 before:-translate-x-1/2 before:rounded-full before:bg-primary data-between-numbers:after:absolute data-between-numbers:after:-top-1 data-between-numbers:after:left-1/2 data-between-numbers:after:size-2 data-between-numbers:after:-translate-x-1/2 data-between-numbers:after:rounded-full data-between-numbers:after:bg-primary"
      />
      <template #number="{ number }">
        <TimeClockPrimitive.Number
          :number="number"
          data-slot="time-clock-number"
          class="pointer-events-none absolute top-1/2 left-1/2 -mt-4 -ml-4 flex size-8 items-center justify-center rounded-full text-sm tabular-nums transform-[rotate(var(--time-clock-number-angle))_translateY(calc(var(--time-clock-number-radius)*var(--time-clock-radius)*-1))_rotate(calc(var(--time-clock-number-angle)*-1))] data-inner:-mt-3.5 data-inner:-ml-3.5 data-inner:size-7 data-inner:text-xs data-inner:not-data-selected:text-muted-foreground data-disabled:not-data-selected:text-muted-foreground/72 data-selected:bg-primary data-selected:font-medium data-selected:text-primary-foreground"
        />
      </template>
    </TimeClockPrimitive.Face>
  </component>
</template>
