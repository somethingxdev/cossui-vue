<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as AutocompletePrimitive from '@ui-sdk/vue/autocomplete'
import { cn } from '../../../lib/utils'

type AutocompleteStatusProps = InstanceType<typeof AutocompletePrimitive.AutocompleteStatus>['$props']

interface Props extends /* @vue-ignore */ AutocompleteStatusProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <AutocompletePrimitive.AutocompleteStatus
    v-slot="slotProps"
    :class="cn('px-3 py-2 font-medium text-muted-foreground text-xs empty:m-0 empty:p-0', props.class)"
  >
    <slot v-bind="slotProps" />
  </AutocompletePrimitive.AutocompleteStatus>
</template>
