<script setup lang="ts">
import { SearchIcon } from '@lucide/vue'
import { InputGroup, InputGroupAddon, InputGroupInput } from '../components/ui/input-group'
</script>

<template>
  <InputGroup>
    <InputGroupInput aria-label="Search" placeholder="Search" type="search" />
    <InputGroupAddon>
      <SearchIcon aria-hidden="true" />
    </InputGroupAddon>
  </InputGroup>
</template>
