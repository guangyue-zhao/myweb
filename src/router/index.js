import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect:'/index'
    },
    {
      path: '/index',
      name: '首页',
      component: resolve => require(['@/pages/index'], resolve),
    },
    {
      path: '/archive',
      name: '归档',
      component: resolve => require(['@/pages/archive'], resolve)
    },
    {
      path: '/resource',
      name: '资源',
      component: resolve => require(['@/pages/resource'], resolve)
    },
    {
      path: '/about',
      name: '关于',
      component: resolve => require(['@/pages/about'], resolve)
    },
    {
      path: '/viewArticle',
      name: '查看文章',
      query:{},
      component: resolve => require(['@/pages/article_detail'], resolve)
    },
    {
      path: '/archive/category',
      name: '标签查询',
      query:{},
      component: resolve => require(['@/pages/category_detail'], resolve)
    },
  ]
})
