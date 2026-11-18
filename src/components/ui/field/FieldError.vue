<script setup lang="ts">
import type { FieldErrorProps } from '@vase-ui/vue/field'
import type { HTMLAttributes } from 'vue'
import { Field as FieldPrimitive } from '@vase-ui/vue/field'
import { cn } from '../../../lib/utils'

interface Props extends /* @vue-ignore */ FieldErrorProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <FieldPrimitive.Error
    data-slot="field-error"
    :class="cn('text-destructive-foreground text-xs', props.class)"
  >
    <!-- The part shows the native message only when it gets no default slot. -->
    <template v-if="$slots.default" #default="{ state }">
      <slot :state="state" />
    </template>
  </FieldPrimitive.Error>
</template>
