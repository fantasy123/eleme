import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'  // ES 6语法,import引入文件的export内容并赋值给Hello

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello  // 注册Hello组件
    }
  ]
})
