<script setup lang="ts">
import type { ComboboxEmptyProps } from '@vase-ui/vue/combobox'
import type { HTMLAttributes } from 'vue'
import { Combobox as ComboboxPrimitive } from '@vase-ui/vue/combobox'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ ComboboxEmptyProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <ComboboxPrimitive.Empty
    data-slot="combobox-empty"
    :class="cn('not-empty:p-2 text-center text-base text-muted-foreground sm:text-sm', props.class)"
  >
    <slot />
  </ComboboxPrimitive.Empty>
</template>
