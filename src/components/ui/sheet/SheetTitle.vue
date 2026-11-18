<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as SheetPrimitive from '@ui-sdk/vue/dialog'
import { cn } from '../../../lib/utils'

type DialogTitleProps = InstanceType<typeof SheetPrimitive.DialogTitle>['$props']

interface Props extends /* @vue-ignore */ DialogTitleProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <SheetPrimitive.DialogTitle :class="cn('font-bold font-heading text-xl leading-none', props.class)">
    <slot />
  </SheetPrimitive.DialogTitle>
</template>
