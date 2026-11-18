<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as AutocompletePrimitive from '@ui-sdk/vue/autocomplete'
import { cn } from '../../../lib/utils'

type AutocompleteEmptyProps = InstanceType<typeof AutocompletePrimitive.AutocompleteEmpty>['$props']

interface Props extends /* @vue-ignore */ AutocompleteEmptyProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <AutocompletePrimitive.AutocompleteEmpty
    v-slot="slotProps"
    :class="cn('not-empty:p-2 text-center text-base text-muted-foreground sm:text-sm', props.class)"
  >
    <slot v-bind="slotProps" />
  </AutocompletePrimitive.AutocompleteEmpty>
</template>
