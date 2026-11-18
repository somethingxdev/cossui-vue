<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as FieldPrimitive from '@ui-sdk/vue/field'
import { cn } from '../../../lib/utils'

type FieldProps = InstanceType<typeof FieldPrimitive.Field>['$props']

interface Props extends /* @vue-ignore */ FieldProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <!-- A field of its own, so a FieldLabel inside names this item's control and not the group around it. -->
  <FieldPrimitive.Field :class="cn('flex', props.class)">
    <slot />
  </FieldPrimitive.Field>
</template>
