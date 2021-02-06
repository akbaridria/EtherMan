<template>
    <div>
        <navbar />
        <div class="top"></div>
        <div class="container">
            <div class="row mt-5">
                <div class="col">
                    <searching @getBalanceWallet="getBalance" />
                </div>
                <div class="col">
                    <metainfo />
                </div>
            </div>
            <CryptoTable />
            <nft />
            <growth-analize />
            <Footer /> 
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Searching from '../components/Searching.vue'
import Metainfo from '../components/Metainfo.vue'
import CryptoTable from '../components/CryptoTable.vue'
import Nft from '../components/Nft.vue'
import GrowthAnalize from '../components/GrowthAnalize.vue'
import Footer from '../components/Footer.vue'
import axios from 'axios'

export default {
    components : { Navbar, Searching, Metainfo, CryptoTable, GrowthAnalize, Nft, Footer },
    data() {
        return {
            apiKey : 'ckey_4e7ba38c8e50410a92ed0989d8f',
            info : '',
            chain_id : 1
        }
    },
    methods : {
        getBalance(wallet) {
            console.log(wallet)
            axios
            .get(`https://api.covalenthq.com/v1/${this.chain_id}/address/${wallet}/balances_v2/`, { params : { key : this.apiKey, nft : true}})
            .then(response => (this.info = response.data)) 
            console.log(this.info)
            
        }
    }
    
}
</script>

<style scoped>
.top {
    margin-top: 100px;
}



</style>