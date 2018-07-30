import Vue from 'vue';
import Router from 'vue-router';

const Main = resolve => {require(['../views/main/main.vue'], resolve)}
const Home = resolve => {require(['../views/home/home.vue'], resolve)}
const My = resolve => {require(['../views/my/my.vue'], resolve)}
const Discover = resolve => {require(['../views/discover/discover.vue'], resolve)}

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', component: Main,
            children: [
                {path: '', component: Home},
                {path: '/my', component: My},
                {path: '/discover', component: Discover},
            ]
        }
    ]
})