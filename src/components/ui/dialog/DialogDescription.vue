<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as DialogPrimitive from '@ui-sdk/vue/dialog'
import { cn } from '../../../lib/utils'

type DialogDescriptionProps = InstanceType<typeof DialogPrimitive.DialogDescription>['$props']

interface Props extends /* @vue-ignore */ DialogDescriptionProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <DialogPrimitive.DialogDescription :class="cn('text-muted-foreground text-sm', props.class)">
    <slot />
  </DialogPrimitive.DialogDescription>
</template>
