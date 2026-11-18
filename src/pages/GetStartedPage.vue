<script setup lang="ts">
import { RouterLink } from 'vue-router'
import CodeBlock from '../site/CodeBlock.vue'
import DocsPage from '../site/DocsPage.vue'

const toc = [
  { id: 'project', title: 'Create a project' },
  { id: 'cli', title: 'Add components with the CLI' },
  { id: 'manual', title: 'Manual setup' },
  { id: 'notes', title: 'Notes' },
]

const createProject = 'pnpm create vite@latest my-app --template vue-ts\ncd my-app\npnpm add tailwindcss @tailwindcss/vite'
const viteConfig = `import { fileURLToPath, URL } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
})`
const componentsJson = `{
  "$schema": "https://shadcn-vue.com/schema.json",
  "style": "new-york",
  "typescript": true,
  "tailwind": {
    "config": "",
    "css": "src/style.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "composables": "@/composables",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib"
  },
  "iconLibrary": "lucide",
  "registries": {
    "@cossui-vue": "${window.location.origin}/r/{name}.json"
  }
}`
const addStyle = 'npx shadcn-vue@latest add @cossui-vue/style'
const addComponents = 'npx shadcn-vue@latest add @cossui-vue/button @cossui-vue/dialog'
const install = 'pnpm add @ui-sdk/vue @ui-sdk/core cn class-variance-authority @lucide/vue'
const utils = `// src/lib/utils.ts
export { cn } from 'cn'`
const layer = `@layer ui-sdk;

@import 'tailwindcss';`
const codeClass = 'rounded-md bg-muted px-1.5 py-0.5 font-mono text-sm'
</script>

<template>
  <DocsPage
    title="Get Started"
    description="Set up a Vue project and add your first component."
    :toc="toc"
  >
    <div class="flex flex-col gap-4 leading-relaxed">
      <h2 id="project" class="scroll-m-20 font-heading font-semibold text-xl">
        Create a project
      </h2>
      <p>
        Start from a Vite app with Vue, TypeScript and Tailwind CSS 4. Map <code :class="codeClass">@</code> to
        <code :class="codeClass">src</code> in Vite and in <code :class="codeClass">paths</code> of your tsconfig.
      </p>
      <CodeBlock :code="createProject" lang="bash" />
      <CodeBlock :code="viteConfig" lang="ts" title="vite.config.ts" />

      <h2 id="cli" class="mt-6 scroll-m-20 font-heading font-semibold text-xl">
        Add components with the CLI
      </h2>
      <p>
        The components are a
        <a class="font-medium underline underline-offset-4" href="https://shadcn-vue.com/docs/registry" target="_blank" rel="noreferrer">shadcn-vue registry</a>.
        Nothing is published to npm: the CLI copies the source into your project, rewrites the imports to your aliases
        and installs the packages. Register the <code :class="codeClass">@cossui-vue</code> namespace in
        <code :class="codeClass">components.json</code>:
      </p>
      <CodeBlock :code="componentsJson" lang="json" title="components.json" />
      <p>Add the coss design tokens and the <code :class="codeClass">cn</code> helper to your CSS and <code :class="codeClass">lib</code>:</p>
      <CodeBlock :code="addStyle" lang="bash" />
      <p>Then add components. The CLI also adds the components they use, such as Button for Dialog:</p>
      <CodeBlock :code="addComponents" lang="bash" />

      <h2 id="manual" class="mt-6 scroll-m-20 font-heading font-semibold text-xl">
        Manual setup
      </h2>
      <p>Without the CLI, install the packages:</p>
      <CodeBlock :code="install" lang="bash" />
      <p>
        Copy <code :class="codeClass">src/styles/globals.css</code> of this project and import it once.
        Each component imports <code :class="codeClass">cn</code> from this file:
      </p>
      <CodeBlock :code="utils" lang="ts" />
      <p>
        Then copy the files of each component from its page, such as
        <RouterLink to="/docs/components/button" class="font-medium underline underline-offset-4">
          Button
        </RouterLink>,
        into <code :class="codeClass">src/components/ui/</code>.
      </p>

      <h2 id="notes" class="mt-6 scroll-m-20 font-heading font-semibold text-xl">
        Notes
      </h2>
      <p>
        UI SDK adds a few rules of its own in a cascade layer named <code :class="codeClass">ui-sdk</code>. Declare that layer on the first line of your global stylesheet, above Tailwind CSS, so that your classes win over it:
      </p>
      <CodeBlock :code="layer" lang="css" />
    </div>
  </DocsPage>
</template>
