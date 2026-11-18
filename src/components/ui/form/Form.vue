<script setup lang="ts">
import type { FormProps } from '@vase-ui/vue/form'
import { Form as FormPrimitive } from '@vase-ui/vue/form'

interface Props extends /* @vue-ignore */ FormProps {}

defineProps<Props>()
</script>

<template>
  <FormPrimitive data-slot="form">
    <slot />
  </FormPrimitive>
</template>
