<script setup lang="ts">
import type { FieldItemProps } from '@vase-ui/vue/field'
import type { HTMLAttributes } from 'vue'
import { Field as FieldPrimitive } from '@vase-ui/vue/field'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ FieldItemProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <FieldPrimitive.Item data-slot="field-item" :class="cn('flex', props.class)">
    <slot />
  </FieldPrimitive.Item>
</template>
