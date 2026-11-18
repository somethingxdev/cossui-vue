import type { Router } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import ComponentPage from './pages/ComponentPage.vue'
import ComponentsIndexPage from './pages/ComponentsIndexPage.vue'
import DocsLayout from './pages/DocsLayout.vue'
import GetStartedPage from './pages/GetStartedPage.vue'
import HomePage from './pages/HomePage.vue'
import IntroductionPage from './pages/IntroductionPage.vue'

export const router: Router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    {
      path: '/docs',
      component: DocsLayout,
      children: [
        { path: '', component: IntroductionPage },
        { path: 'get-started', component: GetStartedPage },
        { path: 'components', component: ComponentsIndexPage },
        { path: 'components/:slug', component: ComponentPage },
      ],
    },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition)
      return savedPosition
    if (to.hash)
      return { el: to.hash, top: 80 }
    return { top: 0 }
  },
})
