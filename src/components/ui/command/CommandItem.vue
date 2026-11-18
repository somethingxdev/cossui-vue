<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as CommandPrimitive from '@ui-sdk/vue/command'
import { cn } from '../../../lib/utils'

type CommandItemProps = InstanceType<typeof CommandPrimitive.CommandItem>['$props']

interface Props extends /* @vue-ignore */ CommandItemProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <CommandPrimitive.CommandItem v-slot="slotProps" :class="cn('flex min-h-8 cursor-default select-none items-center rounded-sm px-2 py-1.5 text-base outline-none data-disabled:pointer-events-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:opacity-64 sm:min-h-7 sm:text-sm', props.class)">
    <slot v-bind="slotProps" />
  </CommandPrimitive.CommandItem>
</template>
