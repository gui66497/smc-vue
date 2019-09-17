import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/NavMenu/Home.vue'
import AssetManage from './views/AssetManage.vue'
import TopoView from './views/TopoView.vue'
import About from './views/About.vue'
import HelloWorld from './components/HelloWorld.vue'
import Devops from './views/NavMenu/DevopsView.vue'
import TopoManage from './views/TopoManage.vue'
import AssetHistory from './views/AssetHistory.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home/topoView'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'topoView',
          component: TopoView
        },{
          path: 'mapView',
          component: About
        },{

          path: 'listView',
          component: HelloWorld
        }
      ]
    },
    {
      path: '/devops',
      name: 'devops',
      component: Devops,
      children: [
        {
          path: 'topoManage',
          component: TopoManage
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index'),
      hidden: true
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      children: [
        {
          path: 'assetManage',
          component: AssetManage
        }
      ]
    },
    {
      path: '/system',
      name: 'system',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/NavMenu/SystemSetting.vue'),
      children: [
        {
          path: 'assetManage',
          component: AssetManage
        },
        {
          path: 'assetHistory',
          component: AssetHistory
        }
      ]
    }
  ]
})
