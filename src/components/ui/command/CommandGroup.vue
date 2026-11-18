<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as CommandPrimitive from '@ui-sdk/vue/command'
import { cn } from '../../../lib/utils'

type CommandGroupProps = InstanceType<typeof CommandPrimitive.CommandGroup>['$props']

interface Props extends /* @vue-ignore */ CommandGroupProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <CommandPrimitive.CommandGroup v-slot="slotProps" :class="cn('[[role=group]+&]:mt-1.5', props.class)">
    <slot v-bind="slotProps" />
  </CommandPrimitive.CommandGroup>
</template>
