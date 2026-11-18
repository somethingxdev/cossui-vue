<script setup lang="ts">
import type { TextareaProps } from '../textarea'
import { Textarea } from '../textarea'

interface Props extends /* @vue-ignore */ TextareaProps {}

defineProps<Props>()
</script>

<template>
  <Textarea unstyled />
</template>
