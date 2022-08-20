import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/computed'
  },
  {
    path: '/computed',
    component: () => import('@/views/computed')
  },
  {
    path: '/watch',
    component: () => import('@/views/watch')
  },
  {
    path: '/vue2-bug',
    component: () => import('@/views/vue2-bug')
  },
  {
    path: '/provide-inject',
    component: () => import('@/views/provide-inject/index.vue')
  },
  {
    path: '/keeplive',
    component: () => import('@/views/keeplive/index.vue')
  },
  {
    path: '/$attrs',
    component: () => import('@/views/$attrs/index.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
