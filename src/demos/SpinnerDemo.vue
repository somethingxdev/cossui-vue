<script setup lang="ts">
import { Spinner } from '../components/ui/spinner'
</script>

<template>
  <div class="flex items-center gap-4">
    <Spinner />
    <Spinner class="size-6" />
    <Spinner class="size-8 text-brand" />
  </div>
</template>
