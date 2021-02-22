import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path : '/',
        name : 'ethereum',
        component : () => import("../views/home.vue")
    },
    {
        path : '/matic',
        name : "matic",
        component : () => import("../views/Matic.vue")
    },
    {
        path : '/uniswap',
        name : "uniswap",
        component : () => import("../views/uniswap.vue")
    },
    {
        path : '/sushiswap',
        name : "sushiswap",
        component : () => import("../views/sushiSwap.vue")
    },
    {
        path : '/spotprice',
        name : 'spotprice',
        component : () => import("../views/spotPrice.vue")
    },
    {
        path : '/twitter-bot-1inch',
        name : '1inch',
        component : () => import("../views/1inch.vue")
    }
]

const router = createRouter({
        history : createWebHistory(),
        routes
    })

export default router;