import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Index'
import Write from '@/components/Write'
import View from '@/components/View'
import Modify from '@/components/Modify'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/Write',
      name: 'Write',
		  component: Write,
    },
    {
      path: '/View',
      name: 'View',
		  component: View,
    },
    {
      path: '/Modify',
      name: 'Modify',
		  component: Modify,
    }
  ]
})
