// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App'
import Vue from 'vue'
import Vuex from 'vuex'
import store from './store/store'
import filter from './helper/filter'
import directive from './helper/directive'
import router from './router'
import VueResource from 'vue-resource'
import GlobalComponents from './GlobalComponent'
import {VueMasonryPlugin} from 'vue-masonry'
import VueI18n from 'vue-i18n'
import i18n from './locales/config'
import ElementUI from 'element-ui'
import VueProgressiveImage from 'vue-progressive-image'
import VueLazyload from 'vue-lazyload'
import 'element-ui/lib/theme-chalk/index.css'

import './assets/css/bootstrap.css'
import './assets/css/jquery.bxslider.css'
import './assets/css/prettyPhoto.css'
import './assets/styling/style.scss'

Vue.use(ElementUI)
Vue.use(VueI18n)
Vue.use(Vuex)
Vue.use(router)
Vue.use(VueResource)
Vue.use(GlobalComponents)
Vue.use(VueMasonryPlugin)
Vue.use(VueProgressiveImage)

Vue.use(VueLazyload, {
  preLoad: 2.0,
  attempt: 1,
  observer: true,
  observerOptions: {
    rootMargin: '0px',
    threshold: 0.1
  }
})

Vue.http.options.root = process.env.SERVER_IP

// set header for all request
Vue.http.headers.common['Access-Control-Allow-Origin'] = '*'
Vue.http.headers.common['Access-Control-Allow-Methods'] = 'POST, GET, PUT, OPTIONS, DELETE'
Vue.http.headers.common['Access-Control-Allow-Headers'] = 'Access-Control-Allow-Methods, Access-Control-Allow-Origin, Origin, Accept, Content-Type'
Vue.http.headers.common['X-My-Custom-Header'] = 'Header-Value'
Vue.http.headers.common['Content-Type'] = 'application/json'
Vue.http.headers.common['Accept'] = 'application/json'
Vue.http.headers.common['Access-Token'] = localStorage.getItem('ACCESS_TOKEN')
Vue.http.headers.common['Uid'] = localStorage.getItem('UID')
Vue.http.headers.common['Provider'] = localStorage.getItem('PROVIDER')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  i18n,
  filter,
  directive,
  template: '<App/>',
  components: { App }
})
