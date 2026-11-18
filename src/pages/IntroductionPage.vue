<script setup lang="ts">
import { RouterLink } from 'vue-router'
import DocsPage from '../site/DocsPage.vue'

const differences = [
  { react: 'render={<Button variant="outline" />}', vue: ':as="Button" variant="outline", or the #render slot' },
  { react: 'className', vue: 'class, merged with cn' },
  { react: 'open + onOpenChange', vue: 'v-model:open, or @open-change' },
  { react: 'value + onValueChange', vue: 'v-model:value (v-model:checked for checkboxes and switches)' },
  { react: 'children as a function', vue: 'scoped slots' },
]
</script>

<template>
  <DocsPage
    title="Introduction"
    description="coss ui for Vue: the same components and styles, rebuilt as idiomatic Vue."
  >
    <div class="flex flex-col gap-4 leading-relaxed">
      <p>
        <a class="font-medium underline underline-offset-4" href="https://coss.com/ui" target="_blank" rel="noreferrer">coss ui</a>
        is the React component library of Cal.com, built on Base UI. This project ports it to Vue on top of
        <a class="font-medium underline underline-offset-4" href="https://ui-sdk.dev" target="_blank" rel="noreferrer">UI SDK</a>,
        a library of UI behaviors with a Vue adapter. The classes, the data-slot attributes and the component names are the same as in coss ui.
      </p>
      <p>
        You do not install a package of components. You copy the source of each component into your app and make it your own,
        as with coss ui and shadcn-vue.
      </p>

      <h2 class="mt-6 scroll-m-20 font-heading font-semibold text-xl">
        Written for Vue
      </h2>
      <p>
        Each part is a single-file component with <code class="rounded-md bg-muted px-1.5 py-0.5 font-mono text-sm">&lt;script setup lang="ts"&gt;</code>.
        Props of the UI SDK part pass through as attributes, events and <code class="rounded-md bg-muted px-1.5 py-0.5 font-mono text-sm">v-model</code> work as in the UI SDK docs,
        and React patterns become their Vue form:
      </p>
      <div class="overflow-x-auto rounded-xl border">
        <table class="w-full text-sm">
          <thead class="bg-muted/72 text-left">
            <tr>
              <th class="px-4 py-2.5 font-medium">
                coss ui (React)
              </th>
              <th class="px-4 py-2.5 font-medium">
                coss ui for Vue
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in differences" :key="row.react" class="border-t">
              <td class="px-4 py-2.5 font-mono text-xs">
                {{ row.react }}
              </td>
              <td class="px-4 py-2.5 font-mono text-xs">
                {{ row.vue }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        <RouterLink to="/docs/get-started" class="font-medium underline underline-offset-4">
          Get started
        </RouterLink>
        to set up a project, or browse the
        <RouterLink to="/docs/components" class="font-medium underline underline-offset-4">
          components
        </RouterLink>.
      </p>
    </div>
  </DocsPage>
</template>
