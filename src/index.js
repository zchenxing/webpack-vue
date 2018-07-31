import Vue from 'vue';
import App from './App.vue';
import router from './routes'
import VueAwesomeSwiper from 'vue-awesome-swiper'


import 'swiper/dist/css/swiper.css'
import './assets/stylesheets/reset.css'
import './assets/stylesheets/layout.less'
import './views/home/home.less'

Vue.use(VueAwesomeSwiper)

new Vue({
    el: "#root",
    router,
    render:h=>h(App)
})