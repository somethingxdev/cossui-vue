<script setup lang="ts">
import { ExternalLinkIcon } from '@lucide/vue'
import { computedAsync, useLocalStorage } from '@vueuse/core'
import { computed, nextTick, shallowRef, useTemplateRef, watch } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { Accordion, AccordionItem, AccordionPanel, AccordionTrigger } from '../components/ui/accordion'
import { Button } from '../components/ui/button'
import { Tabs, TabsList, TabsPanel, TabsTab } from '../components/ui/tabs'
import CodeBlock from '../site/CodeBlock.vue'
import ComponentPreview from '../site/ComponentPreview.vue'
import { componentDocs } from '../site/docs'
import DocsPage from '../site/DocsPage.vue'
import { componentDependencies, loadComponentFiles, loadComponentPage, packageDependencies } from '../site/registry'

const route = useRoute()
const router = useRouter()
const slug = computed(() => String(route.params.slug))
const doc = computed(() => componentDocs.find(item => item.slug === slug.value))
const page = computedAsync(() => loadComponentPage(slug.value))
const vaseUrl = computed(() => doc.value?.vase
  ? `https://vase-ui.com/components/${slug.value}`
  : undefined)
const cossUrl = computed(() => doc.value?.coss
  ? `https://coss.com/ui/docs/components/${slug.value}`
  : undefined)
const files = computedAsync(() => loadComponentFiles(slug.value), [])

const installMethod = useLocalStorage<'cli' | 'manual'>('install-method', 'cli')
const cliCommand = computed(() => `npx shadcn-vue@latest add @cossui-vue/${slug.value}`)
const installCommand = computed(() => `pnpm add ${[
  'cn',
  ...packageDependencies(files.value),
].join(' ')}`)
const usedComponents = computed(() => componentDependencies(slug.value, files.value)
  .map(name => componentDocs.find(item => item.slug === name))
  .filter(item => item !== undefined))

// The table of contents follows the headings of the markdown page once it renders.
const content = useTemplateRef('content')
const headings = shallowRef<{ id: string, title: string, depth: number }[]>([])
watch(page, async () => {
  await nextTick()
  headings.value = [
    ...content.value?.querySelectorAll<HTMLElement>('h2[id], h3[id]') ?? [],
  ]
    .map(heading => ({
      id: heading.id,
      title: heading.textContent ?? '',
      depth: heading.tagName === 'H3'
        ? 3
        : 2,
    }))
})
const toc = computed(() => [
  { id: 'installation', title: 'Installation', depth: 2 },
  ...headings.value,
])

// Markdown links are plain anchors, so internal ones go through the router instead of a full reload.
function onContentClick(event: MouseEvent): void {
  const link = (event.target as HTMLElement).closest('a')
  const href = link?.getAttribute('href')
  if (!href?.startsWith('/') || link!.target || event.metaKey || event.ctrlKey || event.shiftKey)
    return
  event.preventDefault()
  router.push(href)
}
</script>

<template>
  <DocsPage
    v-if="doc"
    :key="doc.slug"
    :title="doc.title"
    :description="doc.description"
    :toc="toc"
  >
    <template #actions>
      <Button
        v-if="vaseUrl"
        as="a"
        :href="vaseUrl"
        target="_blank"
        rel="noreferrer"
        size="xs"
        variant="outline"
      >
        <ExternalLinkIcon />
        API Reference
      </Button>
      <Button
        v-if="cossUrl"
        as="a"
        :href="cossUrl"
        target="_blank"
        rel="noreferrer"
        size="xs"
        variant="outline"
      >
        <ExternalLinkIcon />
        coss ui (React)
      </Button>
    </template>

    <ComponentPreview v-if="page?.preview" :name="page.preview" />

    <section class="flex flex-col gap-4">
      <h2 id="installation" class="scroll-m-20 font-heading font-semibold text-xl">
        Installation
      </h2>
      <Tabs v-model:value="installMethod">
        <TabsList variant="underline">
          <TabsTab value="cli">
            CLI
          </TabsTab>
          <TabsTab value="manual">
            Manual
          </TabsTab>
        </TabsList>
        <TabsPanel value="cli" class="flex flex-col gap-4 pt-2">
          <CodeBlock :code="cliCommand" lang="bash" />
          <p class="text-muted-foreground text-sm">
            The CLI also adds the components this one uses and their packages. Register the
            <code class="rounded-md bg-muted px-1.5 py-0.5 font-mono text-foreground">@cossui-vue</code> namespace once, as
            <RouterLink to="/docs/get-started" class="font-medium text-foreground underline underline-offset-4">Get Started</RouterLink>
            shows.
          </p>
        </TabsPanel>
        <TabsPanel value="manual" class="flex flex-col gap-4 pt-2">
          <p class="text-muted-foreground">
            Install the dependencies:
          </p>
          <CodeBlock :code="installCommand" lang="bash" />
          <p v-if="usedComponents.length" class="text-muted-foreground">
            It uses
            <span v-for="item in usedComponents" :key="item.slug" class="after:content-[',_'] last:after:content-['.']">
              <RouterLink :to="`/docs/components/${item.slug}`" class="font-medium text-foreground underline underline-offset-4">{{ item.title }}</RouterLink>
            </span>
            Add those first.
          </p>
          <p class="text-muted-foreground">
            Copy these files into <code class="rounded-md bg-muted px-1.5 py-0.5 font-mono text-foreground text-sm">src/components/ui/{{ slug }}/</code>:
          </p>
          <Accordion class="rounded-xl border px-4">
            <AccordionItem v-for="file in files" :key="file.name" :value="file.name">
              <AccordionTrigger class="font-mono text-sm">
                {{ file.name }}
              </AccordionTrigger>
              <AccordionPanel>
                <CodeBlock :code="file.code" :lang="file.name.endsWith('.ts') ? 'ts' : 'vue'" class="[&>div]:max-h-[420px]" />
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </TabsPanel>
      </Tabs>
    </section>

    <div ref="content" class="mt-12" @click="onContentClick">
      <component :is="page.default" v-if="page" />
    </div>
  </DocsPage>
  <DocsPage v-else title="Not found" description="This component does not exist." />
</template>
