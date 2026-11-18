<script setup lang="ts">
import { InputGroup, InputGroupAddon, InputGroupInput } from '../components/ui/input-group'
import { Spinner } from '../components/ui/spinner'
</script>

<template>
  <InputGroup>
    <InputGroupInput disabled placeholder="Searching…" type="search" />
    <InputGroupAddon align="inline-end">
      <Spinner />
    </InputGroupAddon>
  </InputGroup>
</template>
