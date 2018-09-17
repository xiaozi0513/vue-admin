import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/',
    name: 'router-login',
    component: () => import('@/views/login/index')
  }
]

export default new Router({
  routes: constantRouterMap
})
