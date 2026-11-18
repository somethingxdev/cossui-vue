<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as SelectPrimitive from '@ui-sdk/vue/select'
import { cn } from '../../../lib/utils'

type SelectSeparatorProps = InstanceType<typeof SelectPrimitive.SelectSeparator>['$props']

interface Props extends /* @vue-ignore */ SelectSeparatorProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <SelectPrimitive.SelectSeparator :class="cn('mx-2 my-1 h-px bg-border', props.class)" />
</template>
