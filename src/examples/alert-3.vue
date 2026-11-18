<script setup lang="ts">
import { InfoIcon } from '@lucide/vue'
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from '../components/ui/alert'
import { Button } from '../components/ui/button'
</script>

<template>
  <Alert>
    <InfoIcon />
    <AlertTitle>Heads up!</AlertTitle>
    <AlertDescription>
      Describe what can be done about it here.
    </AlertDescription>
    <AlertAction>
      <Button size="xs" variant="ghost">
        Dismiss
      </Button>
      <Button size="xs">
        Ok
      </Button>
    </AlertAction>
  </Alert>
</template>
