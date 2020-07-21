import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/ebook'
  },
  {
    path: '/ebook',
    component: () => import('../views/Ebook.vue'),
    children: [
      {
        // 动态路由 fileName为接收的参数名称
        path: ':fileName',
        component: () => import('../components/ebook/EbookReader.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
