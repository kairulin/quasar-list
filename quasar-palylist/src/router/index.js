import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import Home2 from '../views/Home2.vue'

import Index from '../views/Index.vue'

import Header from '../views/Header.vue'

// import PageInfo from '../components/PageInfo.vue'
import PageInfo2 from '../components/PageInfo2.vue'
import PageChangeInfo from '../components/PageChangeInfo.vue'
import PageEditor from '../components/PageEditor.vue'
import PageLogin from '../components/PageLogin.vue'
import PageRegister from '../components/PageRegister.vue'
import PagePaint from '../components/PagePaint.vue'


import PageMenu1 from '../components/PageMenu1.vue'
import PageMenu2 from '../components/PageMenu2.vue'
import PageDecuss from '../components/PageDecuss.vue'


// import PageNote from '../components/PageNote.vue'
import PageNoteMore from '../components/PageNoteMore.vue'

import PageHistory from '../components/PageHistory.vue'
import PageLike from '../components/PageLike.vue'
import PageUpdate from '../components/PageUpdate.vue'
import PageWish from '../components/PageWish.vue'


import PagePassword from '../components/PagePassword.vue'

import PageNoteContent from '../components/PageNoteContent.vue'




const routes = [
  {
    path: '/',
    component: Index,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
     
    ]
  },
  // {
  //   path: '/about/',
  //   name: 'About',
  //   children: [
  //     {
  //       path: 'info',
  //       component: PageInfo,
  //     },
  //     {
  //       path: 'change',
  //       component: PagePassword,
  //     }
  //   ],
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '/header/',
    component: Header,
    children: [
      {
        path: '',
        component: PageMenu1,
      },
      {
        path: 'changeinfo',
        component: PageChangeInfo,
      },
      {
        path: 'info2',
        component: PageInfo2,
      },
      {
        path: 'change',
        component: PagePassword,
      },
      {
        path: 'editor',
        component: PageEditor,
      },
      {
        path: 'login',
        component: PageLogin,
      },
      {
        path: 'register',
        component: PageRegister,
      },
      {
        path: 'history',
        component: PageHistory,
      },
      {
        path: 'like',
        component: PageLike,
      },
      {
        path: 'paint',
        component: PagePaint,
      },
      {
        path: 'update',
        component: PageUpdate,
      },
      {
        path: 'wish',
        component: PageWish,
      },
      {
        path: 'notemore',
        component: PageNoteMore,
      },
      {
        path:'menu1',
        component:PageMenu1,
      },
      {
        path:'menu2',
        component:PageMenu2,
      },{
        path:'decuss',
        component:PageDecuss,
      }
    ]
  },
  {
    path:'/notecontent',
    component:PageNoteContent,
  }, 
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
