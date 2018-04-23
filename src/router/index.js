import Vue from 'vue'
import Router from 'vue-router'
import { default as HelloWorld } from '@/components/HelloWorld'
import { default as NextFrame } from '@/components/NextFrame'
import { default as Table } from '@/components/eltable'
import { default as Navigtaion } from '@/components/navigation'
import { default as Page } from '@/components/page'
import { default as PageWidget } from '@/components/pagewidget'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/pagewidget',
      name: 'pagewidget',
      component: PageWidget
    },
    {
      path: '/page',
      name: 'page',
      component: Page
    },
    {
      path: '/nav',
      name: 'nav',
      component: Navigtaion
    },
    {
      path: '/table',
      name: 'table',
      component: Table
    },
    {
      path: '/hello',
      name: 'hello',
      component: HelloWorld
    },
    {
      path: '/go',
      name: 'go',
      component: NextFrame
    }
  ]
})
