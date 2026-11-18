<script setup lang="ts">
import AnchoredToasts from './AnchoredToasts.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
  <slot />
  <AnchoredToasts v-bind="$attrs" />
</template>
