<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as ComboboxPrimitive from '@ui-sdk/vue/combobox'
import { cn } from '../../../lib/utils'

type ComboboxGroupProps = InstanceType<typeof ComboboxPrimitive.ComboboxGroup>['$props']

interface Props extends /* @vue-ignore */ ComboboxGroupProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <ComboboxPrimitive.ComboboxGroup :class="cn('[[role=group]+&]:mt-1.5', props.class)">
    <slot />
  </ComboboxPrimitive.ComboboxGroup>
</template>
