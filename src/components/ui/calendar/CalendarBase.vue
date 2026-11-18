<script setup lang="ts">
import type { CalendarDayState } from '@ui-sdk/vue/calendar'
import type { Component, HTMLAttributes } from 'vue'
import { ChevronLeftIcon, ChevronRightIcon, ChevronsUpDownIcon } from '@lucide/vue'
import { pageLocale } from '@ui-sdk/core'
import * as CalendarPrimitive from '@ui-sdk/vue/calendar'
import { monthNames } from '@ui-sdk/vue/date'
import { computed, inject } from 'vue'
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
  /** The ISO date of the day, like `"2026-10-16"`. */
  day: string
  state: CalendarDayState
  text: string
}

export interface CalendarBaseProps {
  classNames?: CalendarClassNames
  captionLayout?: 'label' | 'dropdown'
  showWeekNumber?: boolean
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<CalendarBaseProps & {
  /** UI SDK's `Calendar`, or a plain element inside a picker, whose root holds the calendar. */
  root: string | Component
  months?: number
}>(), {
  captionLayout: 'label',
})

defineSlots<{
  day?: (props: CalendarDaySlotProps) => unknown
}>()

// Inside a picker the calendar options sit on the picker root, which provides how many months it shows.
const pickerMonths = inject<() => number | undefined>('calendar-months', () => undefined)
const months = computed(() => props.months ?? pickerMonths() ?? 1)

const buttonClassNames = `relative flex size-(--cell-size) text-base sm:text-sm items-center justify-center rounded-lg text-foreground not-in-data-selected:hover:bg-accent data-disabled:pointer-events-none data-disabled:opacity-64 [&_svg:not([class*='opacity-'])]:opacity-80 [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0`

// UI SDK's day is the cell itself, with no button in it, so the day state is read from the cell
// and drawn on a child of the size of a coss day button. The rules exclude each other, so they
// do not depend on the order of the generated CSS.
const dayButtonClassNames = cn(
  buttonClassNames,
  'in-data-disabled:pointer-events-none in-data-range-middle:rounded-none in-data-range-end:not-in-data-range-start:rounded-s-none in-data-range-start:not-in-data-range-end:rounded-e-none in-data-range-middle:bg-accent in-data-selected:not-in-data-range-middle:bg-primary in-data-range-middle:text-foreground in-data-disabled:text-muted-foreground/72 in-data-unavailable:text-muted-foreground/72 in-data-outside:not-in-data-selected:text-muted-foreground/72 in-data-selected:not-in-data-range-middle:text-primary-foreground in-data-disabled:line-through in-data-unavailable:line-through in-data-selected:not-in-data-range-middle:transition-[border-radius,box-shadow] in-focus-visible:z-1 in-focus-visible:ring-[3px] in-focus-visible:ring-ring/50',
  'in-data-today:after:pointer-events-none in-data-today:after:absolute in-data-today:after:bottom-1 in-data-today:after:start-1/2 in-data-today:after:z-1 in-data-today:after:size-[3px] in-data-today:after:-translate-x-1/2 in-data-today:after:rounded-full in-data-today:after:bg-primary in-data-today:in-data-selected:not-in-data-range-middle:after:bg-background in-data-today:in-data-disabled:after:bg-foreground/30',
)

// coss lays a transparent select over a label; a native select with no appearance shows the same box.
const dropdownRootClassNames = `relative flex h-9 items-center rounded-lg border border-input px-[calc(--spacing(3)-1px)] shadow-xs/5 has-focus:border-ring has-focus:ring-[3px] has-focus:ring-ring/50 sm:h-8 [&_svg:not([class*='opacity-'])]:opacity-80 [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:-me-1`
const dropdownClassNames = 'h-full cursor-pointer appearance-none bg-transparent pe-6 outline-none dark:scheme-dark'

// The table and its cells reset what a page's prose styles give tables: width, margins, borders, padding.
const cellClassNames = 'border-0 p-0 text-center align-middle'
const weekdayClassNames = cn(cellClassNames, 'size-(--cell-size) text-xs font-medium text-muted-foreground/72')

const cls = computed(() => props.classNames ?? {})

// shortcut: the names follow the page's language, as the calendar does by default, not a `locale` set on its root.
const shortMonths = monthNames(pageLocale(), 'short')

// The ISO week of a date, which is the week of its Thursday.
function isoWeek(date: string): number {
  const day = new Date(`${date}T00:00:00Z`)
  day.setUTCDate(day.getUTCDate() + 3 - ((day.getUTCDay() + 6) % 7))
  const firstThursday = new Date(Date.UTC(day.getUTCFullYear(), 0, 4))
  const days = (day.getTime() - firstThursday.getTime()) / 86400000
  return 1 + Math.round((days - 3 + ((firstThursday.getUTCDay() + 6) % 7)) / 7)
}
</script>

<template>
  <component
    :is="props.root"
    data-slot="calendar"
    :months="props.months"
    :class="cn('w-fit [--cell-size:--spacing(10)] sm:[--cell-size:--spacing(9)]', props.class)"
  >
    <div class="relative">
      <!-- Each grid shows its own month; the heading stays for screen readers, which hear it change. -->
      <CalendarPrimitive.CalendarHeading class="sr-only" />
      <div :class="cn('absolute top-0 z-1 flex w-full justify-between', cls.nav)">
        <CalendarPrimitive.CalendarPrevious :class="cn(buttonClassNames, cls.button_previous)">
          <ChevronLeftIcon aria-hidden="true" class="rtl:rotate-180" />
        </CalendarPrimitive.CalendarPrevious>
        <CalendarPrimitive.CalendarNext :class="cn(buttonClassNames, cls.button_next)">
          <ChevronRightIcon aria-hidden="true" class="rtl:rotate-180" />
        </CalendarPrimitive.CalendarNext>
      </div>
      <div :class="cn('relative flex flex-col gap-2 sm:flex-row', cls.months)">
        <div v-for="(_, offset) in months" :key="offset" :class="cn('w-full', cls.month)">
          <div
            v-if="props.captionLayout === 'dropdown' && offset === 0"
            :class="cn('relative z-2 mx-(--cell-size) mb-1 flex h-(--cell-size) items-center justify-center gap-1.5 px-1 text-base sm:text-sm', cls.month_caption, cls.dropdowns)"
          >
            <span :class="cn(dropdownRootClassNames, cls.dropdown_root)">
              <!-- Short month names, so that both selects fit between the navigation buttons. -->
              <CalendarPrimitive.CalendarMonthSelect v-slot="{ state }" :class="cn(dropdownClassNames, cls.dropdown)">
                <option
                  v-for="option in state.options"
                  :key="option.value"
                  :value="option.value"
                  :disabled="option.disabled"
                  :aria-label="option.label"
                >
                  {{ shortMonths[option.value - 1] }}
                </option>
              </CalendarPrimitive.CalendarMonthSelect>
              <ChevronsUpDownIcon aria-hidden="true" class="-ms-4.5" />
            </span>
            <span :class="cn(dropdownRootClassNames, cls.dropdown_root)">
              <CalendarPrimitive.CalendarYearSelect :class="cn(dropdownClassNames, cls.dropdown)" />
              <ChevronsUpDownIcon aria-hidden="true" class="-ms-4.5" />
            </span>
          </div>
          <CalendarPrimitive.CalendarGrid v-slot="{ state: grid }" :offset="offset" :class="cn('my-0 w-auto', cls.month_grid)">
            <caption
              v-if="props.captionLayout !== 'dropdown' || offset > 0"
              :class="cn('px-(--cell-size) pb-1', cls.month_caption)"
            >
              <span :class="cn('flex h-(--cell-size) items-center justify-center font-medium text-base sm:text-sm', cls.caption_label)">
                {{ grid.label }}
              </span>
            </caption>
            <thead>
              <tr :class="cls.weekdays">
                <th
                  v-if="props.showWeekNumber"
                  scope="col"
                  aria-label="Week"
                  :class="cn(weekdayClassNames, cls.week_number)"
                />
                <CalendarPrimitive.CalendarWeekday
                  v-for="(weekday, index) in grid.weekdays"
                  :key="weekday"
                  :index="index"
                  :class="cn(weekdayClassNames, cls.weekday)"
                />
              </tr>
            </thead>
            <tbody :class="cls.weeks">
              <tr v-for="week in grid.weeks" :key="week[0]!.date" :class="cls.week">
                <th
                  v-if="props.showWeekNumber"
                  scope="row"
                  :class="cn(weekdayClassNames, cls.week_number)"
                >
                  {{ isoWeek(week[3]!.date) }}
                </th>
                <template v-for="cell in week" :key="cell.date">
                  <td v-if="cell.hidden" :class="cellClassNames" />
                  <CalendarPrimitive.CalendarDay
                    v-else
                    v-slot="{ state }"
                    :value="cell.date"
                    :class="cn(cellClassNames, 'size-(--cell-size) py-px text-sm outline-none', cls.day)"
                  >
                    <span :class="cn(dayButtonClassNames, cls.day_button)">
                      <slot name="day" :day="cell.date" :state="state" :text="state.label">
                        {{ state.label }}
                      </slot>
                    </span>
                  </CalendarPrimitive.CalendarDay>
                </template>
              </tr>
            </tbody>
          </CalendarPrimitive.CalendarGrid>
        </div>
      </div>
    </div>
  </component>
</template>
