<script setup lang="ts">
import { InputGroup, InputGroupAddon, InputGroupInput } from '../components/ui/input-group'
import { Kbd } from '../components/ui/kbd'
</script>

<template>
  <InputGroup>
    <InputGroupInput placeholder="Search…" type="search" />
    <InputGroupAddon align="inline-end">
      <Kbd>⌘K</Kbd>
    </InputGroupAddon>
  </InputGroup>
</template>
