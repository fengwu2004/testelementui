// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Croppa from 'vue-croppa'
import Element from 'element-ui'
import { Loadmore, Spinner, InfiniteScroll } from 'mint-ui'

import 'vue-croppa/dist/vue-croppa.css'
import 'element-ui/lib/theme-chalk/index.css';
import 'mint-ui/lib/style.css'


Vue.component(Loadmore.name, Loadmore)
Vue.component(Spinner.name, Spinner)
Vue.use(InfiniteScroll)

Vue.use(Element)
Vue.use(Croppa)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
