import { createRouter, createWebHistory } from 'vue-router'
import ShowCase from './views/ShowCase.vue'
import HelloWorld from './designs/HelloWorld.vue'

const routes = [
  { path: '/', component: ShowCase },
  { path: '/design/1', component: HelloWorld },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
