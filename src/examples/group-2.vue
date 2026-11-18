<script setup lang="ts">
import { CheckIcon, CopyIcon } from '@lucide/vue'
import { useClipboard } from '@vueuse/core'
import { shallowRef } from 'vue'
import { Button } from '../components/ui/button'
import { Group, GroupSeparator } from '../components/ui/group'
import { Input } from '../components/ui/input'
import { Tooltip, TooltipPopup, TooltipTrigger } from '../components/ui/tooltip'

const url = shallowRef('https://coss.com')
const { copy, copied } = useClipboard({ legacy: true })
</script>

<template>
  <Group aria-label="Url input">
    <Input v-model="url" aria-label="Url" type="text" />
    <GroupSeparator />
    <Tooltip>
      <TooltipTrigger
        :as="Button"
        aria-label="Copy"
        size="icon"
        variant="outline"
        @click="copy(url)"
      >
        <CheckIcon v-if="copied" />
        <CopyIcon v-else />
      </TooltipTrigger>
      <TooltipPopup>
        <p>Copy to clipboard</p>
      </TooltipPopup>
    </Tooltip>
  </Group>
</template>
