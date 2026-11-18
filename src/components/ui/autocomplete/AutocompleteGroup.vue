<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as AutocompletePrimitive from '@ui-sdk/vue/autocomplete'
import { cn } from '../../../lib/utils'

type AutocompleteGroupProps = InstanceType<typeof AutocompletePrimitive.AutocompleteGroup>['$props']

interface Props extends /* @vue-ignore */ AutocompleteGroupProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <AutocompletePrimitive.AutocompleteGroup :class="cn('[[role=group]+&]:mt-1.5', props.class)">
    <slot />
  </AutocompletePrimitive.AutocompleteGroup>
</template>
