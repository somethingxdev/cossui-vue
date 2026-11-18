<script setup lang="ts">
import type { AutocompleteSeparatorProps } from '@vase-ui/vue/autocomplete'
import type { HTMLAttributes } from 'vue'
import { Autocomplete as AutocompletePrimitive } from '@vase-ui/vue/autocomplete'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ AutocompleteSeparatorProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <AutocompletePrimitive.Separator
    data-slot="autocomplete-separator"
    :class="cn('mx-2 my-1 h-px bg-border last:hidden', props.class)"
  />
</template>
