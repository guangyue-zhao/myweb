import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import mywebHeader from '@/components/header'
import index from '@/pages/index'
import archive from '@/pages/archive'
import resource from '@/pages/resource'
import about from '@/pages/about'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '首页',
      component: index
    },
    {
      path: '/archive',
      name: '归档',
      component: archive
    },
    {
      path: '/resource',
      name: '资源',
      component: resource
    },
    {
      path: '/about',
      name: '关于',
      component: about
    },
  ]
})
