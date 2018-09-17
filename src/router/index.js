import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRouter = [
  {
    path: '/login',
    component: () => import('@/views/login/login')
  }
]

export default new Router({
  routes: constantRouter
})
