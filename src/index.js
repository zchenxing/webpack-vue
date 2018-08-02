import Vue from 'vue';
import App from './App.vue';
import router from './routes'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'


import './assets/javascript/application.js'

Vue.use(VueAwesomeSwiper)

new Vue({
    el: "#root",
    router,
    store,
    render:h=>h(App)
})