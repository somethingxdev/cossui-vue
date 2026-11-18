<script setup lang="ts">
import type { CalendarDayButtonState } from '@vase-ui/vue/calendar'
import type { RangeCalendarDayButtonState } from '@vase-ui/vue/range-calendar'
import type { HTMLAttributes } from 'vue'
import { ChevronLeftIcon, ChevronRightIcon, ChevronsUpDownIcon } from '@lucide/vue'
import { Calendar as CalendarPrimitive } from '@vase-ui/vue/calendar'
import { RangeCalendar as RangeCalendarPrimitive } from '@vase-ui/vue/range-calendar'
import { computed } from 'vue'
import { cn } from '../../../lib/utils'

export type CalendarClassNames = Partial<Record<
  | 'months'
  | 'month'
  | 'nav'
  | 'button_previous'
  | 'button_next'
  | 'month_caption'
  | 'caption_label'
  | 'dropdowns'
  | 'dropdown_root'
  | 'dropdown'
  | 'month_grid'
  | 'weekdays'
  | 'weekday'
  | 'weeks'
  | 'week'
  | 'week_number'
  | 'day'
  | 'day_button',
  HTMLAttributes['class']
>>

export interface CalendarDaySlotProps {
  day: Temporal.PlainDate
  /** The range fields are set in a range calendar only. */
  state: CalendarDayButtonState & Partial<RangeCalendarDayButtonState>
  text: string
}

export interface CalendarBaseProps {
  classNames?: CalendarClassNames
  showOutsideDays?: boolean
  captionLayout?: 'label' | 'dropdown'
  showWeekNumber?: boolean
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<CalendarBaseProps & {
  /** The root part: `Calendar.Root`, `RangeCalendar.Root` or the calendar of a picker. */
  root: object
  range?: boolean
}>(), {
  showOutsideDays: true,
  captionLayout: 'label',
})

defineSlots<{
  day?: (props: CalendarDaySlotProps) => unknown
}>()

const buttonClassNames = `relative flex size-(--cell-size) text-base sm:text-sm items-center justify-center rounded-lg text-foreground not-in-data-selected:hover:bg-accent disabled:pointer-events-none disabled:opacity-64 [&_svg:not([class*='opacity-'])]:opacity-80 [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0`

// coss reads the day state from classes on the cell; Vase puts the same state on the button, so
// each rule matches the button itself and does not depend on the order of the generated CSS.
const dayButtonClassNames = cn(
  buttonClassNames,
  'data-disabled:pointer-events-none data-range-middle:rounded-none data-range-end:not-data-range-start:rounded-s-none data-range-start:not-data-range-end:rounded-e-none data-range-middle:bg-accent data-selected:not-data-range-middle:bg-primary data-range-middle:text-foreground data-disabled:text-muted-foreground/72 data-unavailable:text-muted-foreground/72 data-outside-month:not-data-selected:text-muted-foreground/72 data-selected:not-data-range-middle:text-primary-foreground data-disabled:line-through data-unavailable:line-through outline-none data-selected:not-data-range-middle:transition-[border-radius,box-shadow] focus-visible:z-1 focus-visible:ring-[3px] focus-visible:ring-ring/50',
  'data-today:after:pointer-events-none data-today:after:absolute data-today:after:bottom-1 data-today:after:start-1/2 data-today:after:z-1 data-today:after:size-[3px] data-today:after:-translate-x-1/2 data-today:after:rounded-full data-today:after:bg-primary data-today:data-selected:not-data-range-middle:after:bg-background data-today:data-disabled:after:bg-foreground/30',
)

// coss lays a transparent select over a label; a native select with no appearance shows the same box.
const dropdownRootClassNames = `relative flex h-9 items-center rounded-lg border border-input px-[calc(--spacing(3)-1px)] shadow-xs/5 has-focus:border-ring has-focus:ring-[3px] has-focus:ring-ring/50 sm:h-8 [&_svg:not([class*='opacity-'])]:opacity-80 [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:-me-1`
const dropdownClassNames = 'h-full cursor-pointer appearance-none bg-transparent pe-6 outline-none dark:scheme-dark'

const weekdayClassNames = 'size-(--cell-size) p-0 text-xs font-medium text-muted-foreground/72'

const Day = computed(() => props.range ? RangeCalendarPrimitive.Day : CalendarPrimitive.Day)
const DayButton = computed(() => props.range ? RangeCalendarPrimitive.DayButton : CalendarPrimitive.DayButton)
const cls = computed(() => props.classNames ?? {})
</script>

<template>
  <component
    :is="props.root"
    data-slot="calendar"
    :show-outside-days="props.showOutsideDays"
    :class="cn('w-fit [--cell-size:--spacing(10)] sm:[--cell-size:--spacing(9)]', props.class)"
  >
    <div class="relative">
      <div :class="cn('absolute top-0 z-1 flex w-full justify-between', cls.nav)">
        <CalendarPrimitive.PreviousButton :class="cn(buttonClassNames, cls.button_previous)">
          <ChevronLeftIcon aria-hidden="true" class="rtl:rotate-180" />
        </CalendarPrimitive.PreviousButton>
        <CalendarPrimitive.NextButton :class="cn(buttonClassNames, cls.button_next)">
          <ChevronRightIcon aria-hidden="true" class="rtl:rotate-180" />
        </CalendarPrimitive.NextButton>
      </div>
      <CalendarPrimitive.Months :class="cn('relative flex flex-col gap-2 sm:flex-row', cls.months)">
        <template #month="{ month, index }">
          <CalendarPrimitive.Month :month="month" :class="cn('w-full', cls.month)">
            <div :class="cn('relative z-2 mx-(--cell-size) mb-1 flex h-(--cell-size) items-center justify-center px-1', cls.month_caption)">
              <div
                v-if="props.captionLayout === 'dropdown' && index === 0"
                :class="cn('flex h-(--cell-size) w-full items-center justify-center gap-1.5 text-base *:[span]:font-medium sm:text-sm', cls.dropdowns)"
              >
                <span :class="cn(dropdownRootClassNames, cls.dropdown_root)">
                  <CalendarPrimitive.MonthSelect format="short" :class="cn(dropdownClassNames, cls.dropdown)" />
                  <ChevronsUpDownIcon aria-hidden="true" class="-ms-4.5" />
                </span>
                <span :class="cn(dropdownRootClassNames, cls.dropdown_root)">
                  <CalendarPrimitive.YearSelect :class="cn(dropdownClassNames, cls.dropdown)" />
                  <ChevronsUpDownIcon aria-hidden="true" class="-ms-4.5" />
                </span>
              </div>
              <CalendarPrimitive.Caption
                v-else
                :class="cn('flex h-full items-center gap-2 font-medium text-base sm:text-sm', cls.caption_label)"
              />
            </div>
            <CalendarPrimitive.Grid :class="cls.month_grid">
              <CalendarPrimitive.GridHeader>
                <CalendarPrimitive.GridHeaderRow :class="cls.weekdays">
                  <CalendarPrimitive.WeekNumberHeader
                    v-if="props.showWeekNumber"
                    :class="cn(weekdayClassNames, cls.week_number)"
                  />
                  <template #weekday="{ weekday }">
                    <CalendarPrimitive.Weekday :weekday="weekday" :class="cn(weekdayClassNames, cls.weekday)" />
                  </template>
                </CalendarPrimitive.GridHeaderRow>
              </CalendarPrimitive.GridHeader>
              <CalendarPrimitive.GridBody :class="cls.weeks">
                <template #week="{ week }">
                  <CalendarPrimitive.Week :week="week" :class="cls.week">
                    <CalendarPrimitive.WeekNumber
                      v-if="props.showWeekNumber"
                      :week="week"
                      :class="cn(weekdayClassNames, cls.week_number)"
                    />
                    <template #day="{ day }">
                      <component :is="Day" :day="day" :class="cn('size-(--cell-size) py-px text-sm', cls.day)">
                        <component :is="DayButton" :class="cn(dayButtonClassNames, cls.day_button)">
                          <template v-if="$slots.day" #default="{ state, text }">
                            <slot name="day" :day="day" :state="state" :text="text" />
                          </template>
                        </component>
                      </component>
                    </template>
                  </CalendarPrimitive.Week>
                </template>
              </CalendarPrimitive.GridBody>
            </CalendarPrimitive.Grid>
          </CalendarPrimitive.Month>
        </template>
      </CalendarPrimitive.Months>
    </div>
  </component>
</template>
