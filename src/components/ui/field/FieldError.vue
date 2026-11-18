<script setup lang="ts">
import type { HTMLAttributes, Ref } from 'vue'
import * as FieldPrimitive from '@ui-sdk/vue/field'
import { inject } from 'vue'
import { cn } from '../../../lib/utils'

type FieldErrorProps = InstanceType<typeof FieldPrimitive.FieldError>['$props']

interface Props extends /* @vue-ignore */ FieldErrorProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()

const error = inject<Ref<string | undefined> | undefined>('field-error', undefined)
</script>

<template>
  <FieldPrimitive.FieldError :class="cn('text-destructive-foreground text-xs', props.class)">
    <!-- The part shows the browser's message only when it gets no default slot. -->
    <template v-if="$slots.default || error" #default="{ state }">
      <slot :state="state">
        {{ error }}
      </slot>
    </template>
  </FieldPrimitive.FieldError>
</template>
