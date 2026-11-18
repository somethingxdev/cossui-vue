<script setup lang="ts">
import type { DialogDescriptionProps } from '@vase-ui/vue/dialog'
import type { HTMLAttributes } from 'vue'
import { Dialog as SheetPrimitive } from '@vase-ui/vue/dialog'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ DialogDescriptionProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <SheetPrimitive.Description
    data-slot="sheet-description"
    :class="cn('text-muted-foreground text-sm', props.class)"
  >
    <slot />
  </SheetPrimitive.Description>
</template>
