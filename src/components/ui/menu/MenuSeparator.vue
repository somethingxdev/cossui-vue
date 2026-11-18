<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import * as MenuPrimitive from '@ui-sdk/vue/menu'
import { cn } from '../../../lib/utils'

type MenuSeparatorProps = InstanceType<typeof MenuPrimitive.MenuSeparator>['$props']

interface Props extends /* @vue-ignore */ MenuSeparatorProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>

<template>
  <MenuPrimitive.MenuSeparator :class="cn('mx-2 my-1 h-px bg-border', props.class)" />
</template>
