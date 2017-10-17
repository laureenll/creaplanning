// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import jQuery from 'jQuery'
import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'
import {messages} from 'vue-bootstrap-calendar'

Vue.config.productionTip = false
window.jQuery = window.$ = jQuery
Vue.use(VueI18n)
window.i18n = new VueI18n({
  locale: 'fr',
  messages
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
