<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as ComboboxPrimitive from '@ui-sdk/vue/combobox'
import { cn } from '../../../lib/utils'

type ComboboxEmptyProps = InstanceType<typeof ComboboxPrimitive.ComboboxEmpty>['$props']

interface Props extends /* @vue-ignore */ ComboboxEmptyProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <ComboboxPrimitive.ComboboxEmpty :class="cn('not-empty:p-2 text-center text-base text-muted-foreground sm:text-sm', props.class)">
    <slot />
  </ComboboxPrimitive.ComboboxEmpty>
</template>
