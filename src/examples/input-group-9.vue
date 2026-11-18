<script setup lang="ts">
import { Badge } from '../components/ui/badge'
import { InputGroup, InputGroupAddon, InputGroupInput } from '../components/ui/input-group'
</script>

<template>
  <InputGroup>
    <InputGroupInput placeholder="Type to search…" type="search" />
    <InputGroupAddon align="inline-end">
      <Badge variant="info">
        Badge
      </Badge>
    </InputGroupAddon>
  </InputGroup>
</template>
