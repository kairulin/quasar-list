import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About2 from '../views/About2.vue'

import PageInfo from '../components/PageInfo.vue'
import PageInfo2 from '../components/PageInfo2.vue'

import PagePassword from '../components/PagePassword.vue'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about/',
    name: 'About',
    children:[
      {
        path:'info',
        component:PageInfo,
      },
      {
        path:'change',
        component:PagePassword,
      }
    ],    
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/about2/',
    component: About2,
    children:[
      {
        path:'info2',
        component:PageInfo2,
      },
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
