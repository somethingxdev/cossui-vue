import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import MarkdownItAnchor from 'markdown-it-anchor'
import Markdown from 'unplugin-vue-markdown/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown({
      wrapperClasses: 'docs-prose',
      markdownOptions: { html: true },
      markdownSetup(md) {
        // markdown-exit runs markdown-it plugins, but the anchor plugin is typed against markdown-it.
        // eslint-disable-next-line slop/no-chained-type-assertions
        md.use(MarkdownItAnchor as unknown as Parameters<typeof md.use>[0])
        // Fences render through the site's CodeBlock, which highlights and adds the copy button.
        md.renderer.rules.fence = (tokens, index) => {
          const token = tokens[index]!
          const lang = token.info.trim() || 'vue'
          return `<CodeBlock lang="${lang}" :code="${md.utils.escapeHtml(JSON.stringify(token.content))}" />\n`
        }
      },
    }),
    tailwindcss(),
  ],
  // Vite's scan regex reads the vite.config snippet in GetStartedPage.vue as real imports.
  optimizeDeps: {
    exclude: ['@tailwindcss/vite', '@vitejs/plugin-vue', 'vite'],
  },
})
