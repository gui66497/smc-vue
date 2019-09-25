import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import http from './api/http';
import '@/styles/index.scss' // global css

Vue.use(ElementUI);

Vue.config.productionTip = false

// 全局使用axios
Vue.prototype.$http = http;

// mock数据
require('./mock/mock')

import ElTreeSelect from 'el-tree-select';
Vue.use(ElTreeSelect);

router.beforeEach((to, from, next) => {
  //用你的方式获取登录的用户信息
  const token = localStorage.token
  if (token || to.name === 'login') {
    //如果存在用户信息，或者进入的页面是登录页面，则直接进入
    next()
  } else {
    //不存在用户信息则说明用户未登录，跳转到登录页面，带上当前的页面地址，登录完成后做回跳，
    //如未登录用户进入用户中心的页面地址，检测到未登录，
    //自动跳转到登录页面，并且带上用户中心的页面地址，登录完成后重新跳到个人中心页面。
    next({
      name: 'login',
      query: {
        redirect: to.path
      }
    })
  }

})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
