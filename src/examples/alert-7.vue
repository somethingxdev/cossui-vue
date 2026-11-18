<script setup lang="ts">
import { CircleAlertIcon } from '@lucide/vue'
import { Alert, AlertDescription, AlertTitle } from '../components/ui/alert'
</script>

<template>
  <Alert variant="error">
    <CircleAlertIcon aria-label="Error" role="img" />
    <AlertTitle>Heads up!</AlertTitle>
    <AlertDescription>
      Describe what can be done about it here.
    </AlertDescription>
  </Alert>
</template>
