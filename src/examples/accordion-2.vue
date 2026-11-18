<script setup lang="ts">
import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from '../components/ui/accordion'
</script>

<template>
  <Accordion class="w-full">
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
</template>
