<script setup lang="ts">
import { Tabs, TabsList, TabsPanel, TabsTab } from '../components/ui/tabs'

const tabs = ['tab-1', 'tab-2', 'tab-3']
</script>

<template>
  <div class="flex w-full flex-col gap-12">
    <Tabs default-value="tab-1">
      <TabsList>
        <TabsTab v-for="(tab, i) in tabs" :key="tab" :value="tab">
          Tab {{ i + 1 }}
        </TabsTab>
      </TabsList>
      <TabsPanel v-for="(tab, i) in tabs" :key="tab" :value="tab">
        <p class="p-4 text-center text-muted-foreground text-xs">
          Tab {{ i + 1 }} content
        </p>
      </TabsPanel>
    </Tabs>

    <Tabs default-value="tab-1">
      <div class="border-b">
        <TabsList variant="underline">
          <TabsTab v-for="(tab, i) in tabs" :key="tab" :value="tab">
            Tab {{ i + 1 }}
          </TabsTab>
        </TabsList>
      </div>
      <TabsPanel v-for="(tab, i) in tabs" :key="tab" :value="tab">
        <p class="p-4 text-center text-muted-foreground text-xs">
          Tab {{ i + 1 }} content
        </p>
      </TabsPanel>
    </Tabs>

    <Tabs class="w-full flex-row" default-value="tab-1" orientation="vertical">
      <div class="border-s">
        <TabsList variant="underline">
          <TabsTab v-for="(tab, i) in tabs" :key="tab" :value="tab">
            Tab {{ i + 1 }}
          </TabsTab>
        </TabsList>
      </div>
      <TabsPanel v-for="(tab, i) in tabs" :key="tab" :value="tab">
        <p class="p-4 text-center text-muted-foreground text-xs">
          Tab {{ i + 1 }} content
        </p>
      </TabsPanel>
    </Tabs>

    <Tabs default-value="tab-1">
      <TabsList size="sm">
        <TabsTab v-for="(tab, i) in tabs" :key="tab" :value="tab">
          Tab {{ i + 1 }}
        </TabsTab>
      </TabsList>
    </Tabs>
  </div>
</template>
