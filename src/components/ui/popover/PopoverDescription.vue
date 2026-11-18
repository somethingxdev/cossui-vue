<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as PopoverPrimitive from '@ui-sdk/vue/popover'
import { cn } from '../../../lib/utils'

type PopoverDescriptionProps = InstanceType<typeof PopoverPrimitive.PopoverDescription>['$props']

interface Props extends /* @vue-ignore */ PopoverDescriptionProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <PopoverPrimitive.PopoverDescription :class="cn('text-muted-foreground text-sm', props.class)">
    <slot />
  </PopoverPrimitive.PopoverDescription>
</template>
