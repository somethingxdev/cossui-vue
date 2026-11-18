<script setup lang="ts">
import { Tabs, TabsList, TabsPanel, TabsTab } from '../components/ui/tabs'
</script>

<template>
  <Tabs default-value="tab-1">
    <TabsList size="sm">
      <TabsTab value="tab-1">
        Tab 1
      </TabsTab>
      <TabsTab value="tab-2">
        Tab 2
      </TabsTab>
      <TabsTab value="tab-3">
        Tab 3
      </TabsTab>
    </TabsList>
    <TabsPanel v-for="n in 3" :key="n" :value="`tab-${n}`">
      <p class="p-4 text-center text-muted-foreground text-xs">
        Tab {{ n }} content
      </p>
    </TabsPanel>
  </Tabs>
</template>
