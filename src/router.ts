import { createRouter, createWebHashHistory } from 'vue-router'
import Foo from './Foo.vue'
import Bar from './Bar.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/bar'
    },
    {
      path: '/foo',
      component: Foo
    },
    {
      path: '/bar',
      component: Bar
    }
  ]
})

export default router
