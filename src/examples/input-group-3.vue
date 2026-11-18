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
      aria-label="Set your URL"
      class="*:[input]:ps-0!"
      placeholder="coss"
      type="search"
    />
    <InputGroupAddon>
      <InputGroupText>i.cal.com/</InputGroupText>
    </InputGroupAddon>
  </InputGroup>
</template>
