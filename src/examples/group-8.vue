<script setup lang="ts">
import { Group, GroupSeparator, GroupText } from '../components/ui/group'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
</script>

<template>
  <Group aria-label="Domain input">
    <Input
      id="domain-suffix"
      aria-label="Domain"
      default-value="coss"
      type="text"
    />
    <GroupSeparator />
    <GroupText :as="Label" aria-label="Domain suffix" for="domain-suffix">
      .com
    </GroupText>
  </Group>
</template>
