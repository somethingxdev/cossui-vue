<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { SelectTriggerVariants } from './variants'
import { ChevronsUpDownIcon } from '@lucide/vue'
import * as SelectPrimitive from '@ui-sdk/vue/select'
import { cn } from '../../../lib/utils'
import { selectTriggerIconClassName, selectTriggerVariants } from './variants'

type SelectTriggerProps = InstanceType<typeof SelectPrimitive.SelectTrigger>['$props']

interface Props extends /* @vue-ignore */ SelectTriggerProps {
  size?: SelectTriggerVariants['size']
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  size: 'default',
})
</script>

<template>
  <SelectPrimitive.SelectTrigger :class="cn(selectTriggerVariants({ size: props.size }), props.class)">
    <slot />
    <ChevronsUpDownIcon data-slot="select-icon" :class="selectTriggerIconClassName" />
  </SelectPrimitive.SelectTrigger>
</template>
