<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as AlertDialogPrimitive from '@ui-sdk/vue/alert-dialog'
import { cn } from '../../../lib/utils'

type AlertDialogTitleProps = InstanceType<typeof AlertDialogPrimitive.AlertDialogTitle>['$props']

interface Props extends /* @vue-ignore */ AlertDialogTitleProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <AlertDialogPrimitive.AlertDialogTitle :class="cn('font-bold font-heading text-xl leading-none', props.class)">
    <slot />
  </AlertDialogPrimitive.AlertDialogTitle>
</template>
