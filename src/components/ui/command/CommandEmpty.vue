<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as CommandPrimitive from '@ui-sdk/vue/command'
import { cn } from '../../../lib/utils'

type CommandEmptyProps = InstanceType<typeof CommandPrimitive.CommandEmpty>['$props']

interface Props extends /* @vue-ignore */ CommandEmptyProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <CommandPrimitive.CommandEmpty v-slot="slotProps" :class="cn('not-empty:p-2 not-empty:py-6 text-center text-base text-muted-foreground sm:text-sm', props.class)">
    <slot v-bind="slotProps" />
  </CommandPrimitive.CommandEmpty>
</template>
