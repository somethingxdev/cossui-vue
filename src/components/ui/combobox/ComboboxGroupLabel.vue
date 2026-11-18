<script setup lang="ts">
import type { ComboboxGroupLabelProps } from '@vase-ui/vue/combobox'
import type { HTMLAttributes } from 'vue'
import { Combobox as ComboboxPrimitive } from '@vase-ui/vue/combobox'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ ComboboxGroupLabelProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <ComboboxPrimitive.GroupLabel
    data-slot="combobox-group-label"
    :class="cn('px-2 py-1.5 font-medium text-muted-foreground text-xs', props.class)"
  >
    <slot />
  </ComboboxPrimitive.GroupLabel>
</template>
