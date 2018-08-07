import Vue from 'vue';
import App from './App.vue';
import router from './routes'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
import Plugin from './assets/javascript/plugins'
import VueAnime from './assets/javascript/anime'
import UILib from './components'

import './assets/javascript/application.js'

Vue.use(VueAwesomeSwiper)
Vue.use(Plugin)
Vue.use(VueAnime)
Vue.use(UILib)

new Vue({
    el: "#root",
    router,
    store,
    render:h=>h(App)
})