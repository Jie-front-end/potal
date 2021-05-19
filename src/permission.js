import router from './router'
import { getToken } from '@/utils/auth'
import NProgress from 'nprogress'
NProgress.configure({ showSpinner: false })
// const whiteList = ['/login']

router.beforeEach((to, from, next) => {
  NProgress.start()
  const hasToken = getToken()
  console.log('hasToken', hasToken)
  next()
  // if (hasToken) {
  //   if (to.path === '/login') {
  //     next({ path: '/' })
  //   } else {
  //     next()
  //   }
  // } else {
  //   if (whiteList.indexOf(to.path) !== -1) {
  //     next()
  //   } else {
  //     next(`/login?redirect=${to.path}`)
  //   }
  // }
  // if (hasToken) {
  //   next()
  //   NProgress.done()
  // } else {
  //   NProgress.done()
  // }
})

router.afterEach(() => {
  NProgress.done()
})
