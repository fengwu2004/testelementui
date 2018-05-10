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
import { dateRangeUtilIntance } from './dateRange.js'

import { validateAccountName, isvalidUsername, trim} from "@/utils/validate";

Vue.component(Loadmore.name, Loadmore)
Vue.component(Spinner.name, Spinner)
Vue.use(InfiniteScroll)

Vue.use(Element)
Vue.use(Croppa)

let v = dateRangeUtilIntance.getCurrentDay()

console.log(v)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

let a = '   sjdksdwsss_SAf   '

console.log(trim(a))
console.log('sjdkf')

console.log(validateAccountName(trim(a)))
