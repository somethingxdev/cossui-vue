<script setup lang="ts">
import { MoreHorizontal } from '@lucide/vue'
</script>

<template>
  <span aria-hidden="true" data-slot="breadcrumb-ellipsis" role="presentation">
    <MoreHorizontal class="size-4" />
    <span class="sr-only">More</span>
  </span>
</template>
