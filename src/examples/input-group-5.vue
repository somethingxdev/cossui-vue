<script setup lang="ts">
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from '../components/ui/input-group'
</script>

<template>
  <InputGroup>
    <InputGroupInput
      aria-label="Enter your domain"
      class="*:[input]:px-0!"
      placeholder="coss"
      type="text"
    />
    <InputGroupAddon>
      <InputGroupText>https://</InputGroupText>
    </InputGroupAddon>
    <InputGroupAddon align="inline-end">
      <InputGroupText>.com</InputGroupText>
    </InputGroupAddon>
  </InputGroup>
</template>
