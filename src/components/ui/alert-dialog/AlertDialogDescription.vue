<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as AlertDialogPrimitive from '@ui-sdk/vue/alert-dialog'
import { cn } from '../../../lib/utils'

type AlertDialogDescriptionProps = InstanceType<typeof AlertDialogPrimitive.AlertDialogDescription>['$props']

interface Props extends /* @vue-ignore */ AlertDialogDescriptionProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <AlertDialogPrimitive.AlertDialogDescription :class="cn('text-muted-foreground text-sm', props.class)">
    <slot />
  </AlertDialogPrimitive.AlertDialogDescription>
</template>
