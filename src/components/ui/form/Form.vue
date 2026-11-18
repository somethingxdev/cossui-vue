<script setup lang="ts">
import type { FormHTMLAttributes } from 'vue'
import { provide } from 'vue'

interface Props extends /* @vue-ignore */ FormHTMLAttributes {
  errors?: Record<string, string | string[]>
}

const props = defineProps<Props>()

// A string key, so Field reads the errors without importing this component.
provide('form-errors', () => props.errors)
</script>

<template>
  <form data-slot="form">
    <slot />
  </form>
</template>
