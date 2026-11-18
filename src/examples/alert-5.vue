<script setup lang="ts">
import { CircleCheckIcon } from '@lucide/vue'
import { Alert, AlertDescription, AlertTitle } from '../components/ui/alert'
</script>

<template>
  <Alert variant="success">
    <CircleCheckIcon aria-label="Success" role="img" />
    <AlertTitle>Heads up!</AlertTitle>
    <AlertDescription>
      Describe what can be done about it here.
    </AlertDescription>
  </Alert>
</template>
