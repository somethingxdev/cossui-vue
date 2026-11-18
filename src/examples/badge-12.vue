<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Badge } from '../components/ui/badge'
</script>

<template>
  <Badge :as="RouterLink" to="/">
    Badge
  </Badge>
</template>
