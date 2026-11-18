<script setup lang="ts">
import { MailIcon } from '@lucide/vue'
import { InputGroup, InputGroupAddon, InputGroupInput } from '../components/ui/input-group'
</script>

<template>
  <InputGroup>
    <InputGroupInput aria-label="Email" placeholder="Email" type="email" />
    <InputGroupAddon align="inline-end">
      <MailIcon aria-hidden="true" />
    </InputGroupAddon>
  </InputGroup>
</template>
