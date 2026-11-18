<script setup lang="ts">
import { shallowRef } from 'vue'
import { Accordion, AccordionItem, AccordionPanel, AccordionTrigger } from '../components/ui/accordion'
import { Button } from '../components/ui/button'

const items = [
  {
    content: 'Base UI is a library of high-quality unstyled React components for design systems and web apps.',
    id: '1',
    title: 'What is Base UI?',
  },
  {
    content: 'Head to the “Quick start” guide in the docs. If you’ve used unstyled libraries before, you’ll feel at home.',
    id: '2',
    title: 'How do I get started?',
  },
  {
    content: 'Of course! Base UI is free and open source.',
    id: '3',
    title: 'Can I use it for my project?',
  },
]

const value = shallowRef<string[]>([])
</script>

<template>
  <div class="flex w-full flex-col gap-12">
    <Accordion class="w-full" :default-value="['3']">
      <AccordionItem v-for="item in items" :key="item.id" :value="item.id">
        <AccordionTrigger>{{ item.title }}</AccordionTrigger>
        <AccordionPanel>{{ item.content }}</AccordionPanel>
      </AccordionItem>
    </Accordion>

    <Accordion class="w-full" multiple>
      <AccordionItem v-for="item in items" :key="item.id" :value="item.id">
        <AccordionTrigger>{{ item.title }}</AccordionTrigger>
        <AccordionPanel>{{ item.content }}</AccordionPanel>
      </AccordionItem>
    </Accordion>

    <div class="flex w-full flex-col gap-4">
      <Accordion v-model:value="value" class="w-full">
        <AccordionItem v-for="item in items" :key="item.id" :value="item.id">
          <AccordionTrigger>{{ item.title }}</AccordionTrigger>
          <AccordionPanel>{{ item.content }}</AccordionPanel>
        </AccordionItem>
      </Accordion>
      <div class="flex flex-col items-start gap-4">
        <Button variant="outline" @click="value = ['1', '2']">
          Open First Two
        </Button>
        <p class="text-muted-foreground text-sm">
          Open items: {{ value.length > 0 ? value.join(', ') : 'None' }}
        </p>
      </div>
    </div>
  </div>
</template>
