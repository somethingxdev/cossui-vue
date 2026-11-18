<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '../../../lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <nav data-slot="drawer-menu" :class="cn('-m-2 flex flex-col', props.class)">
    <slot />
  </nav>
</template>
