<script setup lang="ts">
import type { AutocompleteClearProps } from '@vase-ui/vue/autocomplete'
import type { HTMLAttributes } from 'vue'
import { XIcon } from '@lucide/vue'
import { Autocomplete as AutocompletePrimitive } from '@vase-ui/vue/autocomplete'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ AutocompleteClearProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <AutocompletePrimitive.Clear
    data-slot="autocomplete-clear"
    :class="cn(
      `absolute end-0.5 top-1/2 inline-flex size-8 shrink-0 -translate-y-1/2 cursor-pointer items-center justify-center rounded-md border border-transparent opacity-80 outline-none transition-[color,background-color,box-shadow,opacity] pointer-coarse:after:absolute pointer-coarse:after:min-h-11 pointer-coarse:after:min-w-11 hover:opacity-100 sm:size-7 [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0`,
      props.class,
    )"
  >
    <XIcon />
  </AutocompletePrimitive.Clear>
</template>
