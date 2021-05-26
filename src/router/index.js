import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'index',
        name: '首页',
        component: () => import(/* webpackChunkName: "about" */ '../views/PageContent/index.vue')
      },
      {
        path: 'taskCenter',
        name: '任务中心',
        component: () => import(/* webpackChunkName: "about" */ '../views/PageContent/taskCenter.vue')
      },
      {
        path: 'companyNews',
        name: '新闻公告',
        component: () => import(/* webpackChunkName: "about" */ '../views/PageContent/companyNews.vue')
      },
      {
        path: 'waitHandle',
        name: '待办事宜',
        component: () => import(/* webpackChunkName: "about" */ '../views/PageContent/waitHandle.vue')
      },
      {
        path: 'appCenter',
        name: '应用中心',
        component: () => import(/* webpackChunkName: "about" */ '../views/PageContent/appCenter.vue')
      },
      {
        path: 'commonFun',
        name: '常用功能',
        component: () => import(/* webpackChunkName: "about" */ '../views/PageContent/commonFun.vue')
      }
    ]
  },
  // {
  //   path: '/',
  //   redirect: '/index'
  // },
  // {
  //   path: '*',
  //   redirect: '/index'
  // },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
