<script setup lang="ts">
import { CheckIcon, CopyIcon } from '@lucide/vue'
import { useClipboard } from '@vueuse/core'
import { shallowRef } from 'vue'
import { Button } from '../components/ui/button'
import { InputGroup, InputGroupAddon, InputGroupInput } from '../components/ui/input-group'
import { Tooltip, TooltipPopup, TooltipTrigger } from '../components/ui/tooltip'

const url = shallowRef('https://coss.com')
const { copy, copied } = useClipboard({ legacy: true })
</script>

<template>
  <InputGroup>
    <InputGroupInput v-model="url" aria-label="Url" type="text" />
    <InputGroupAddon align="inline-end">
      <Tooltip>
        <TooltipTrigger
          :as="Button"
          aria-label="Copy"
          size="icon-xs"
          variant="ghost"
          @click="copy(url)"
        >
          <CheckIcon v-if="copied" />
          <CopyIcon v-else />
        </TooltipTrigger>
        <TooltipPopup>
          <p>Copy to clipboard</p>
        </TooltipPopup>
      </Tooltip>
    </InputGroupAddon>
  </InputGroup>
</template>
