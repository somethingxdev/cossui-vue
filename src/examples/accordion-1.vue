<script setup lang="ts">
import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from '../components/ui/accordion'

const items = [
  {
    content: 'Vase UI is a library of high-quality unstyled Vue components for design systems and web apps.',
    id: '1',
    title: 'What is Vase UI?',
  },
  {
    content: 'Head to the "Quick start" guide in the docs. If you\'ve used unstyled libraries before, you\'ll feel at home.',
    id: '2',
    title: 'How do I get started?',
  },
  {
    content: 'Of course! Vase UI is free and open source.',
    id: '3',
    title: 'Can I use it for my project?',
  },
]
</script>

<template>
  <Accordion class="w-full" :default-value="['3']">
    <AccordionItem v-for="item in items" :key="item.id" :value="item.id">
      <AccordionTrigger>{{ item.title }}</AccordionTrigger>
      <AccordionPanel>{{ item.content }}</AccordionPanel>
    </AccordionItem>
  </Accordion>
</template>
