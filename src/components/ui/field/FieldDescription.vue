<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as FieldPrimitive from '@ui-sdk/vue/field'
import { cn } from '../../../lib/utils'

type FieldDescriptionProps = InstanceType<typeof FieldPrimitive.FieldDescription>['$props']

interface Props extends /* @vue-ignore */ FieldDescriptionProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <FieldPrimitive.FieldDescription
    v-slot="{ state }"
    :class="cn('text-muted-foreground text-xs', props.class)"
  >
    <slot :state="state" />
  </FieldPrimitive.FieldDescription>
</template>
