import {createRouter, createWebHistory, createWebHashHistory} from "vue-router"

const Home = () => import("@/components/HelloWorld.vue")
const Apple = () => import("@/pages/Apple.vue");
const Tesla = () => import("@/pages/Tesla.vue")
const Negocios = () => import("@/pages/Negocios.vue")

const routes = [
    {
        path: '/',
        name: 'Apple',
        component: Apple
    },
    {
        path: '/apple',
        name: 'Home',
        component: Apple
    },
    {
        path: '/tesla',
        name: 'Tesla',
        component: Tesla
    },
    {
        path: '/negocios',
        name: 'Negocios',
        component: Negocios
    },
]

const router = createRouter({
    mode: 'history',
    history: createWebHistory(),
    routes
})

export default router