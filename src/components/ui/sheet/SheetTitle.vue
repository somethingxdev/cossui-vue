<script setup lang="ts">
import type { DialogTitleProps } from '@vase-ui/vue/dialog'
import type { HTMLAttributes } from 'vue'
import { Dialog as SheetPrimitive } from '@vase-ui/vue/dialog'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ DialogTitleProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <SheetPrimitive.Title
    data-slot="sheet-title"
    :class="cn('font-bold font-heading text-xl leading-none', props.class)"
  >
    <slot />
  </SheetPrimitive.Title>
</template>
