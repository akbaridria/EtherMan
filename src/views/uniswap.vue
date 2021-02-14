<template>
    <div>
        <navbar />
        <div class="top"></div>
        <div class="container"> 
            <cardUniswap :infoUniswap="uniswapData" :updated_at="updated_at" :loading="loading" />
            <Footer />
        </div>
        
    </div>
</template>
<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import cardUniswap from '../components/uniswap/cardUniswap.vue'
import axios from 'axios'
export default {
    data() {
        return {
            uniswapData : {},
            apiKey : 'ckey_4e7ba38c8e50410a92ed0989d8f',
            updated_at : '',
            loading : false
        }
    },

    components : { Navbar, Footer, cardUniswap },
    methods : {
        getUniswapData() {
            this.loading = true
            this.updated_at = new Date()
            let url = `https://api.covalenthq.com/v1/1/networks/uniswap_v2/assets/`
            axios.get(url, {params : { key : this.apiKey }}).then(response => {
                this.uniswapData = response.data.data
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                this.loading = false
            })
        }
    },
    mounted() {
        this.getUniswapData()
        setInterval(() => {
            this.getUniswapData()
        }, 60000);
    }
}
</script>
<style scoped>
.top {
    margin-top: 100px;
}

</style>