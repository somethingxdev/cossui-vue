<script setup lang="ts">
import { Button } from '../components/ui/button'
import { InputGroup, InputGroupAddon, InputGroupInput } from '../components/ui/input-group'
</script>

<template>
  <InputGroup>
    <InputGroupInput placeholder="Type to search…" type="search" />
    <InputGroupAddon align="inline-end">
      <Button size="xs" variant="secondary">
        Search
      </Button>
    </InputGroupAddon>
  </InputGroup>
</template>
