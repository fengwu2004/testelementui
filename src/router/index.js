import Vue from 'vue'
import Router from 'vue-router'
import { default as HelloWorld } from '@/components/HelloWorld'
import { default as NextFrame } from '@/components/NextFrame'
import { default as Table } from '@/components/eltable'
import { default as Page } from '@/components/page'
import { default as PageWidget } from '@/components/pagewidget'
import { default as Image } from '@/components/image'
import { default as TestEscroll } from '@/components/testescroll'
import { default as TestHeight } from '@/components/testheight'
import { default as menu } from '@/components/testmenu'
import { default as RichEditor } from '@/components/richTextEditor'
import { default as TestPopover } from '@/components/test_popover'
import { default as Login } from '@/components/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/height',
      name: 'height',
      component: TestHeight
    },
    {
      path: '/escroll',
      name: 'escroll',
      component: TestEscroll
    },
    {
      path: '',
      name: 'Login',
      component: Login
    },
    {
      path: '/hello',
      redirect:'/hello',
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
