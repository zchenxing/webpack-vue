import Vue from 'vue';
import App from './App.vue';
import router from './routes'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import './assets/javascript/application.js'

Vue.use(VueAwesomeSwiper)
Vue.use(MintUI)

new Vue({
    el: "#root",
    router,
    store,
    render:h=>h(App)
})