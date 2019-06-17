import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Index'
import Write from '@/components/Write'

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
    }
  ]
})
