import Vue from 'vue'
import Router from 'vue-router'
import { default as HelloWorld } from '@/components/HelloWorld'
import { default as NextFrame } from '@/components/NextFrame'
import { default as Table } from '@/components/eltable'
import { default as Page } from '@/components/page'
import { default as PageWidget } from '@/components/pagewidget'
import { default as ImageCropper } from '@/components/imageCropper'
import { default as TestEscroll } from '@/components/testescroll'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/escroll',
      name: 'escroll',
      component: TestEscroll
    },
    {
      path: '/image',
      name: 'image',
      component: ImageCropper
    },
    {
      path: '',
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
