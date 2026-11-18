<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as RadioPrimitive from '@ui-sdk/vue/radio'
import { cn } from '../../../lib/utils'

type RadioProps = InstanceType<typeof RadioPrimitive.Radio>['$props']

interface Props extends /* @vue-ignore */ RadioProps {
  value: string
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <RadioPrimitive.Radio
    :value="props.value"
    :class="cn(
      `grid min-h-9 w-full cursor-default select-none items-center gap-2 rounded-sm px-2 py-1 text-start text-base text-foreground outline-none hover:bg-accent hover:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-64 sm:min-h-8 sm:text-sm [&_svg:not([class*='opacity-'])]:opacity-80 [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:-mx-0.5 [&_svg]:shrink-0`,
      'grid-cols-[1rem_minmax(0,1fr)] items-center pe-4',
      props.class,
    )"
  >
    <RadioPrimitive.RadioIndicator class="col-start-1">
      <svg
        fill="none"
        height="24"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5.252 12.7 10.2 18.63 18.748 5.37" />
      </svg>
    </RadioPrimitive.RadioIndicator>
    <span class="wrap-anywhere col-start-2 min-w-0"><slot /></span>
  </RadioPrimitive.Radio>
</template>
