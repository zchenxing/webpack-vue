import Vue from 'vue';
import App from './App.vue';
import router from './routes'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
import MintUI from 'mint-ui'
import Plugin from './assets/javascript/plugins'
import VueAnime from './assets/javascript/anime'

import './assets/javascript/application.js'

Vue.use(VueAwesomeSwiper)
Vue.use(MintUI)
Vue.use(Plugin)
Vue.use(VueAnime)

new Vue({
    el: "#root",
    router,
    store,
    render:h=>h(App)
})