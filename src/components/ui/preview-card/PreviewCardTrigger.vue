<script setup lang="ts">
import type { PreviewCardTriggerProps } from '@vase-ui/vue/preview-card'
import { PreviewCard as PreviewCardPrimitive } from '@vase-ui/vue/preview-card'

interface Props extends /* @vue-ignore */ PreviewCardTriggerProps {}

defineProps<Props>()
</script>

<template>
  <PreviewCardPrimitive.Trigger data-slot="preview-card-trigger">
    <slot />
  </PreviewCardPrimitive.Trigger>
</template>
