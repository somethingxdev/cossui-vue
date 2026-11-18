<script setup lang="ts">
import { useIntervalFn } from '@vueuse/core'
import { shallowRef } from 'vue'
import { Progress } from '../components/ui/progress'

const value = shallowRef(20)

useIntervalFn(() => {
  value.value = Math.min(100, Math.round(value.value + Math.random() * 25))
}, 1000)
</script>

<template>
  <Progress aria-label="Loading progress" :value="value" />
</template>
