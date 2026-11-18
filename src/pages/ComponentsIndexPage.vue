<script setup lang="ts">
import ComponentGrid from '../site/ComponentGrid.vue'
import { componentDocs } from '../site/docs'
import DocsPage from '../site/DocsPage.vue'
</script>

<template>
  <DocsPage
    title="Components"
    :description="`${componentDocs.length} components, each a set of Vue files you copy into your app.`"
  >
    <ComponentGrid class="lg:grid-cols-2 xl:grid-cols-2" />
  </DocsPage>
</template>
