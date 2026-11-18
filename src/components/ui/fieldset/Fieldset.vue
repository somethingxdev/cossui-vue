<script setup lang="ts">
import type { FieldsetRootProps } from '@vase-ui/vue/fieldset'
import { Fieldset as FieldsetPrimitive } from '@vase-ui/vue/fieldset'

interface Props extends /* @vue-ignore */ FieldsetRootProps {}

defineProps<Props>()
</script>

<template>
  <FieldsetPrimitive.Root data-slot="fieldset">
    <slot />
  </FieldsetPrimitive.Root>
</template>
