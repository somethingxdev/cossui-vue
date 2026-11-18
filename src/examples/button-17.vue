<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Button } from '../components/ui/button'
</script>

<template>
  <Button :as="RouterLink" to="/">
    Link
  </Button>
</template>
