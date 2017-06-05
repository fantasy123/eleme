// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }  // ES-lint规定:注释的斜杠与文字要空1格
})// components: { App }是ES 5 { App:App }的简写(key是App,value是import进来的值)
// 在这里注册组件 才能使用自定义组件标签
