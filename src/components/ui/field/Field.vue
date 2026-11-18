<script setup lang="ts">
import type { FieldRootProps } from '@vase-ui/vue/field'
import type { HTMLAttributes } from 'vue'
import { Field as FieldPrimitive } from '@vase-ui/vue/field'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ FieldRootProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <FieldPrimitive.Root
    data-slot="field"
    :class="cn('flex flex-col items-start gap-2', props.class)"
  >
    <slot />
  </FieldPrimitive.Root>
</template>
