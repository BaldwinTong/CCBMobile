import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: 'Login'
    }, {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ('../views/Login.vue')
    }, {
        path: '/audit',
        name: 'Audit',
        component: () =>
            import ('../views/bossPages/audit.vue')
    },
    {
        path: '/approve',
        name: 'Approve',
        component: () =>
            import ('../views/bossPages/approve.vue')
    },
    {
        path: '/bill',
        name: 'Bill',
        component: () =>
            import ('../views/farmPages/Bill')
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router