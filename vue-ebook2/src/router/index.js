import Vue from 'vue'
import VueRouter from 'vue-router'
import Ebook from '../views/Ebook.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Ebook',
    component: Ebook
  }
]

const router = new VueRouter({
  routes
})

export default router
