<script setup lang="ts">
import { InfoIcon } from '@lucide/vue'
import { Alert, AlertDescription, AlertTitle } from '../components/ui/alert'
</script>

<template>
  <Alert variant="info">
    <InfoIcon aria-label="Information" role="img" />
    <AlertTitle>Heads up!</AlertTitle>
    <AlertDescription>
      Describe what can be done about it here.
    </AlertDescription>
  </Alert>
</template>
