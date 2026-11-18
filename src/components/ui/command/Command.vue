<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as CommandPrimitive from '@ui-sdk/vue/command'
import { cn } from '../../../lib/utils'

type CommandProps = InstanceType<typeof CommandPrimitive.Command>['$props']

interface Props extends /* @vue-ignore */ CommandProps {
  filter?: CommandProps['filter']
  class?: HTMLAttributes['class']
}

// coss ui filters with "contains"; UI SDK defaults to "fuzzy".
const props = withDefaults(defineProps<Props>(), { filter: 'contains' })
</script>

<template>
  <!-- The root is an element here (coss ui's renders none), so it carries the popup's column layout on. -->
  <CommandPrimitive.Command v-slot="slotProps" :filter="props.filter" :class="cn('flex min-h-0 flex-col', props.class)">
    <slot v-bind="slotProps" />
  </CommandPrimitive.Command>
</template>
