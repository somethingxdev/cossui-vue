<script setup lang="ts">
import { ref } from 'vue'
import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from '../components/ui/accordion'
import { Button } from '../components/ui/button'

const value = ref<string[]>([])
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <Accordion v-model:value="value" class="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is Vase UI?</AccordionTrigger>
        <AccordionPanel>
          Vase UI is a library of high-quality unstyled Vue components for
          design systems and web apps.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How do I get started?</AccordionTrigger>
        <AccordionPanel>
          Head to the "Quick start" guide in the docs. If you've used unstyled
          libraries before, you'll feel at home.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Can I use it for my project?</AccordionTrigger>
        <AccordionPanel>
          Of course! Vase UI is free and open source.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>

    <div class="flex flex-col items-start gap-4">
      <Button variant="outline" @click="value = ['item-1', 'item-2']">
        Open First Two
      </Button>
      <p class="text-muted-foreground text-sm">
        Open items: {{ value.length > 0 ? value.join(', ') : 'None' }}
      </p>
    </div>
  </div>
</template>
