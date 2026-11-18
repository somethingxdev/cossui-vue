<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as ComboboxPrimitive from '@ui-sdk/vue/combobox'
import { cn } from '../../../lib/utils'

type ComboboxSeparatorProps = InstanceType<typeof ComboboxPrimitive.ComboboxSeparator>['$props']

interface Props extends /* @vue-ignore */ ComboboxSeparatorProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <ComboboxPrimitive.ComboboxSeparator :class="cn('mx-2 my-1 h-px bg-border last:hidden', props.class)" />
</template>
