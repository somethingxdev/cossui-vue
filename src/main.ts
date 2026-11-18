import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import CodeBlock from './site/CodeBlock.vue'
import ComponentPreview from './site/ComponentPreview.vue'
import 'temporal-polyfill/global'
import './styles/site.css'

// Markdown pages in src/content use these without imports.
createApp(App)
  .use(router)
  .component('CodeBlock', CodeBlock)
  .component('ComponentPreview', ComponentPreview)
  .mount('#app')
