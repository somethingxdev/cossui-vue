<script setup lang="ts">
import type { ComboboxGroupProps } from '@vase-ui/vue/combobox'
import type { HTMLAttributes } from 'vue'
import { Combobox as ComboboxPrimitive } from '@vase-ui/vue/combobox'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ ComboboxGroupProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <ComboboxPrimitive.Group
    data-slot="combobox-group"
    :class="cn('[[role=group]+&]:mt-1.5', props.class)"
  >
    <slot />
  </ComboboxPrimitive.Group>
</template>
