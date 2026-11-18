<script setup lang="ts">
import { Group, GroupSeparator, GroupText } from '../components/ui/group'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
</script>

<template>
  <Group aria-label="Domain input">
    <GroupText :as="Label" aria-label="Domain" for="domain">
      https://
    </GroupText>
    <GroupSeparator />
    <Input
      id="domain"
      aria-label="Domain"
      default-value="coss.com"
      type="text"
    />
  </Group>
</template>
