import Vue from 'vue';
import Router from 'vue-router';
const WebAppIndex = resolve => {require(['../views/layouts/root.vue'], resolve)}
const Home = resolve => {require(['../views/home/home.vue'], resolve)}
const My = resolve => {require(['../views/my/my.vue'], resolve)}
const Work = resolve => {require(['../views/work/work.vue'], resolve)}

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/', component: WebAppIndex,
            children: [
                {path: '', component: Home},
                {path: '/work', component: Work},
                {path: '/my', component: My}
            ]
        }
    ]
})