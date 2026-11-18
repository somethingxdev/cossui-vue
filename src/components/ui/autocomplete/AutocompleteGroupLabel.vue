<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as AutocompletePrimitive from '@ui-sdk/vue/autocomplete'
import { cn } from '../../../lib/utils'

type AutocompleteGroupLabelProps = InstanceType<typeof AutocompletePrimitive.AutocompleteGroupLabel>['$props']

interface Props extends /* @vue-ignore */ AutocompleteGroupLabelProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <AutocompletePrimitive.AutocompleteGroupLabel :class="cn('px-2 py-1.5 font-medium text-muted-foreground text-xs', props.class)">
    <slot />
  </AutocompletePrimitive.AutocompleteGroupLabel>
</template>
