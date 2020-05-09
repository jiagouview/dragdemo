import Demo from '../view/demo'
import Home from '../view/home'
import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/demo',
            component: Demo,
        }
    ]
});

export default router