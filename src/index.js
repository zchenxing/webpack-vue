import Vue from 'vue';
import App from './App.vue';
import router from './routes'

import './assets/stylesheets/reset.css'

new Vue({
    el: "#root",
    router,
    render:h=>h(App)
})