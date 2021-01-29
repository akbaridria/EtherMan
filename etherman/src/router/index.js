import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path : '/',
        name : 'Home',
        component : () => import("../views/home.vue")
    },

    {
        path : '/spotprice',
        name : "Spot Price",
        component : () => import("../views/spotPrice.vue")
    }
]

const router = createRouter({
        history : createWebHistory(),
        routes
    })

export default router;