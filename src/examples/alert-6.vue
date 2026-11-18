<script setup lang="ts">
import { TriangleAlertIcon } from '@lucide/vue'
import { Alert, AlertDescription, AlertTitle } from '../components/ui/alert'
</script>

<template>
  <Alert variant="warning">
    <TriangleAlertIcon aria-label="Warning" role="img" />
    <AlertTitle>Heads up!</AlertTitle>
    <AlertDescription>
      Describe what can be done about it here.
    </AlertDescription>
  </Alert>
</template>
