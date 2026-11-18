<script setup lang="ts">
import { ArrowRightIcon } from '@lucide/vue'
import { Button } from '../components/ui/button'
import { InputGroup, InputGroupAddon, InputGroupInput } from '../components/ui/input-group'
</script>

<template>
  <InputGroup>
    <InputGroupInput
      aria-label="Subscribe to our newsletter"
      disabled
      placeholder="Your best email"
      type="email"
    />
    <InputGroupAddon align="inline-end">
      <Button aria-label="Subscribe" disabled size="icon-xs" variant="ghost">
        <ArrowRightIcon aria-hidden="true" />
      </Button>
    </InputGroupAddon>
  </InputGroup>
</template>
