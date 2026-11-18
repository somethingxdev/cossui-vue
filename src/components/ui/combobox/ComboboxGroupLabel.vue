<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as ComboboxPrimitive from '@ui-sdk/vue/combobox'
import { cn } from '../../../lib/utils'

type ComboboxGroupLabelProps = InstanceType<typeof ComboboxPrimitive.ComboboxGroupLabel>['$props']

interface Props extends /* @vue-ignore */ ComboboxGroupLabelProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <ComboboxPrimitive.ComboboxGroupLabel :class="cn('px-2 py-1.5 font-medium text-muted-foreground text-xs', props.class)">
    <slot />
  </ComboboxPrimitive.ComboboxGroupLabel>
</template>
