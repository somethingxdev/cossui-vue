<script setup lang="ts">
import { Button } from '../components/ui/button'
import { Tooltip, TooltipPopup, TooltipTrigger } from '../components/ui/tooltip'
</script>

<template>
  <Tooltip>
    <TooltipTrigger :as="Button" variant="outline">
      Hover me
    </TooltipTrigger>
    <TooltipPopup>Helpful hint</TooltipPopup>
  </Tooltip>
</template>
