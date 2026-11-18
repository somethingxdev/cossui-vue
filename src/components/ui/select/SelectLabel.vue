<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as SelectPrimitive from '@ui-sdk/vue/select'
import { cn } from '../../../lib/utils'

type SelectLabelProps = InstanceType<typeof SelectPrimitive.SelectLabel>['$props']

interface Props extends /* @vue-ignore */ SelectLabelProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <SelectPrimitive.SelectLabel
    :class="cn(
      'not-in-data-[slot=field]:mb-2 inline-flex cursor-default items-center gap-2 font-medium text-base/4.5 text-foreground sm:text-sm/4',
      props.class,
    )"
  >
    <slot />
  </SelectPrimitive.SelectLabel>
</template>
