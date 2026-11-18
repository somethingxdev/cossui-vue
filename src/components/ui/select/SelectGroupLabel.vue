<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as SelectPrimitive from '@ui-sdk/vue/select'
import { cn } from '../../../lib/utils'

type SelectGroupLabelProps = InstanceType<typeof SelectPrimitive.SelectGroupLabel>['$props']

interface Props extends /* @vue-ignore */ SelectGroupLabelProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <SelectPrimitive.SelectGroupLabel :class="cn('px-2 py-1.5 font-medium text-muted-foreground text-xs', props.class)">
    <slot />
  </SelectPrimitive.SelectGroupLabel>
</template>
