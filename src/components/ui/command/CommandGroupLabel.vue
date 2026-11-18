<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as CommandPrimitive from '@ui-sdk/vue/command'
import { cn } from '../../../lib/utils'

type CommandGroupLabelProps = InstanceType<typeof CommandPrimitive.CommandGroupLabel>['$props']

interface Props extends /* @vue-ignore */ CommandGroupLabelProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <CommandPrimitive.CommandGroupLabel v-slot="slotProps" :class="cn('px-2 py-1.5 font-medium text-muted-foreground text-xs', props.class)">
    <slot v-bind="slotProps" />
  </CommandPrimitive.CommandGroupLabel>
</template>
