<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as DialogPrimitive from '@ui-sdk/vue/dialog'
import { cn } from '../../../lib/utils'

type DialogTitleProps = InstanceType<typeof DialogPrimitive.DialogTitle>['$props']

interface Props extends /* @vue-ignore */ DialogTitleProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <DialogPrimitive.DialogTitle :class="cn('font-bold font-heading text-xl leading-none', props.class)">
    <slot />
  </DialogPrimitive.DialogTitle>
</template>
