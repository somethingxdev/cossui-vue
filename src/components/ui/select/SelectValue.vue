<script setup lang="ts">
import type { SelectValueProps } from '@vase-ui/vue/select'
import type { HTMLAttributes } from 'vue'
import { Select as SelectPrimitive } from '@vase-ui/vue/select'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ SelectValueProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()

// The default slot is forwarded only when given: an empty one would replace the label of the value.
</script>

<template>
  <SelectPrimitive.Value
    data-slot="select-value"
    :class="cn('flex-1 truncate data-placeholder:text-muted-foreground', props.class)"
  >
    <template v-if="$slots.default" #default="slotProps">
      <slot v-bind="slotProps" />
    </template>
  </SelectPrimitive.Value>
</template>
