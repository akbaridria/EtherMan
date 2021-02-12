import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path : '/',
        name : 'Ethereum Wallet Checker',
        component : () => import("../views/home.vue")
    },
    {
        path : '/matic',
        name : "Matic Wallet Checker",
        component : () => import("../views/Matic.vue")
    },
    {
        path : '/uniswap',
        name : "Uniswap V2 Assets",
        component : () => import("../views/uniswap.vue")
    },
    {
        path : '/sushiswap',
        name : "SushiSwap V2 Assets",
        component : () => import("../views/sushiSwap.vue")
    },
    {
        path : '/spotprice',
        name : 'Spot Price',
        component : () => import("../views/spotPrice.vue")
    }
]

const router = createRouter({
        history : createWebHistory(),
        routes
    })

export default router;