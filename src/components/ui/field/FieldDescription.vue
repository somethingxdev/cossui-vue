<script setup lang="ts">
import type { FieldDescriptionProps } from '@vase-ui/vue/field'
import type { HTMLAttributes } from 'vue'
import { Field as FieldPrimitive } from '@vase-ui/vue/field'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ FieldDescriptionProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <FieldPrimitive.Description
    data-slot="field-description"
    :class="cn('text-muted-foreground text-xs', props.class)"
  >
    <slot />
  </FieldPrimitive.Description>
</template>
