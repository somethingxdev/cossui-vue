<script setup lang="ts">
import type { SelectSeparatorProps } from '@vase-ui/vue/select'
import type { HTMLAttributes } from 'vue'
import { Select as SelectPrimitive } from '@vase-ui/vue/select'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ SelectSeparatorProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <SelectPrimitive.Separator
    data-slot="select-separator"
    :class="cn('mx-2 my-1 h-px bg-border', props.class)"
  />
</template>
