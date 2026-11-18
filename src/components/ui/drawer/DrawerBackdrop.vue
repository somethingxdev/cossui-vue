<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as DrawerPrimitive from '@ui-sdk/vue/drawer'
import { cn } from '../../../lib/utils'

type DrawerBackdropProps = InstanceType<typeof DrawerPrimitive.DrawerBackdrop>['$props']

interface Props extends /* @vue-ignore */ DrawerBackdropProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <DrawerPrimitive.DrawerBackdrop :class="cn('fixed inset-0 z-50 bg-black/32 backdrop-blur-sm supports-[-webkit-touch-callout:none]:absolute', props.class)" />
</template>
