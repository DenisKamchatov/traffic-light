import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from "../pages/MainPage";


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'MainPage',
        component: MainPage,
    },
    {
        path: '/red/',
        name: 'RedPage',
        component: () => import(/* webpackChunkName: "RedPage" */'../pages/RedPage')
    },
    {
        path: '/yellow/',
        name: 'YellowPage',
        component: () => import(/* webpackChunkName: "YellowPage" */'../pages/YellowPage')
    },
    {
        path: '/green/',
        name: 'GreenPage',
        component: () => import(/* webpackChunkName: "GreenPage" */'../pages/GreenPage')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

// router.beforeEach((to, from, next) => {
//     setTimeout(() => {
//         next()
//     }, 1000)
// })


export default router
