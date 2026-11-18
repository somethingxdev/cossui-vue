<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as CommandPrimitive from '@ui-sdk/vue/command'
import { cn } from '../../../lib/utils'

type CommandSeparatorProps = InstanceType<typeof CommandPrimitive.CommandSeparator>['$props']

interface Props extends /* @vue-ignore */ CommandSeparatorProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <CommandPrimitive.CommandSeparator :class="cn('mx-2 my-2 h-px bg-border last:hidden', props.class)" />
</template>
