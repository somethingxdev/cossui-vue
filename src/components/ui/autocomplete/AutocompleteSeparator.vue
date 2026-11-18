<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as AutocompletePrimitive from '@ui-sdk/vue/autocomplete'
import { cn } from '../../../lib/utils'

type AutocompleteSeparatorProps = InstanceType<typeof AutocompletePrimitive.AutocompleteSeparator>['$props']

interface Props extends /* @vue-ignore */ AutocompleteSeparatorProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <AutocompletePrimitive.AutocompleteSeparator :class="cn('mx-2 my-1 h-px bg-border last:hidden', props.class)" />
</template>
