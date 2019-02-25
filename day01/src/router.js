/* global Vue */
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import WebComponent from '@/components/WebComponent'
Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/',
      name: 'WebComponent',
      component: WebComponent
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
