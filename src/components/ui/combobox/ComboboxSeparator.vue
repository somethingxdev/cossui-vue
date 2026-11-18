<script setup lang="ts">
import type { ComboboxSeparatorProps } from '@vase-ui/vue/combobox'
import type { HTMLAttributes } from 'vue'
import { Combobox as ComboboxPrimitive } from '@vase-ui/vue/combobox'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ ComboboxSeparatorProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <ComboboxPrimitive.Separator
    data-slot="combobox-separator"
    :class="cn('mx-2 my-1 h-px bg-border last:hidden', props.class)"
  />
</template>
