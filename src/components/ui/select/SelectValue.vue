<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as SelectPrimitive from '@ui-sdk/vue/select'
import { cn } from '../../../lib/utils'

type SelectValueProps = InstanceType<typeof SelectPrimitive.SelectValue>['$props']

interface Props extends /* @vue-ignore */ SelectValueProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()

// The default slot is forwarded only when given: an empty one would replace the label of the value.
defineSlots<{
  default?: (props: { value: any, label: string, labels: string[], placeholder: boolean }) => unknown
}>()
</script>

<template>
  <SelectPrimitive.SelectValue :class="cn('flex-1 truncate data-placeholder:text-muted-foreground', props.class)">
    <template v-if="$slots.default" #default="{ state }">
      <slot v-bind="state" />
    </template>
  </SelectPrimitive.SelectValue>
</template>
