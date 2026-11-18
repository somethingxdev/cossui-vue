<script setup lang="ts">
import type { ComboboxStatusProps } from '@vase-ui/vue/combobox'
import type { HTMLAttributes } from 'vue'
import { Combobox as ComboboxPrimitive } from '@vase-ui/vue/combobox'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ ComboboxStatusProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <ComboboxPrimitive.Status
    data-slot="combobox-status"
    :class="cn('px-3 py-2 font-medium text-muted-foreground text-xs empty:m-0 empty:p-0', props.class)"
  >
    <slot />
  </ComboboxPrimitive.Status>
</template>
