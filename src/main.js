import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import IconFont from '@/components/IconFont'
import './permission'
import './assets/scss/style.scss'
import './assets/iconfont/iconfont.css'
import './assets/css/common.css'
import SSO from './sso.js'
Vue.config.productionTip = false
Vue.component('icon-font', IconFont)
SSO.init(() => {
  main()
})
function main () {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}
