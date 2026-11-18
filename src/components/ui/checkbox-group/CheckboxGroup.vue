<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as CheckboxPrimitive from '@ui-sdk/vue/checkbox'
import { cn } from '../../../lib/utils'

type CheckboxGroupProps = InstanceType<typeof CheckboxPrimitive.CheckboxGroup>['$props']

interface Props extends /* @vue-ignore */ CheckboxGroupProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <CheckboxPrimitive.CheckboxGroup :class="cn('flex flex-col items-start gap-3', props.class)">
    <slot />
  </CheckboxPrimitive.CheckboxGroup>
</template>
