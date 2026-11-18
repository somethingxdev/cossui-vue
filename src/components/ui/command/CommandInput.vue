<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { SearchIcon } from '@lucide/vue'
import * as CommandPrimitive from '@ui-sdk/vue/command'
import { cn } from '../../../lib/utils'

// Input attributes fall through untyped: extending the part's props fails vue-tsc (TS2590).
interface Props {
  class?: HTMLAttributes['class']
}

defineOptions({ inheritAttrs: false })

const props = defineProps<Props>()
</script>

<template>
  <div class="px-2.5 py-1.5">
    <div data-slot="autocomplete-input-group" class="relative w-full text-foreground has-disabled:opacity-64">
      <div
        aria-hidden="true"
        data-slot="autocomplete-start-addon"
        class="pointer-events-none absolute inset-y-0 start-px z-10 flex items-center ps-[calc(--spacing(3)-1px)] opacity-80 [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg]:-mx-0.5"
      >
        <SearchIcon />
      </div>
      <span
        data-slot="input-control"
        data-size="lg"
        :class="cn('relative inline-flex w-full rounded-lg border border-transparent text-base sm:text-sm', props.class)"
      >
        <CommandPrimitive.CommandInput
          v-bind="$attrs"
          class="h-9.5 w-full min-w-0 rounded-[inherit] px-[calc(--spacing(3)-1px)] ps-[calc(--spacing(8.5)-1px)] text-foreground leading-9.5 outline-none placeholder:text-muted-foreground/72 sm:h-8.5 sm:ps-[calc(--spacing(8)-1px)] sm:leading-8.5"
        />
      </span>
    </div>
  </div>
</template>
