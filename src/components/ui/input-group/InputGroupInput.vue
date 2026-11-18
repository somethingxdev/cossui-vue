<script setup lang="ts">
import type { InputProps } from '../input'
import { Input } from '../input'

interface Props extends /* @vue-ignore */ InputProps {}

defineProps<Props>()
</script>

<template>
  <Input unstyled />
</template>
