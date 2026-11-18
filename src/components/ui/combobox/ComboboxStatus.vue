<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as ComboboxPrimitive from '@ui-sdk/vue/combobox'
import { cn } from '../../../lib/utils'

type ComboboxStatusProps = InstanceType<typeof ComboboxPrimitive.ComboboxStatus>['$props']

interface Props extends /* @vue-ignore */ ComboboxStatusProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <ComboboxPrimitive.ComboboxStatus :class="cn('px-3 py-2 font-medium text-muted-foreground text-xs empty:m-0 empty:p-0', props.class)">
    <slot />
  </ComboboxPrimitive.ComboboxStatus>
</template>
