<template>
    <div>
        <navbar />
        <div class="top"></div>
        <div class="container">
            <div class="row mt-5">
                <div class="col">
                    <searching @getBalanceWallet="getBalance" :loading="loading"/>
                </div>
                <div class="col">
                    <metainfo :infoMeta="infoEther" :totalBalance="totalBalance" @changeCurrency="changeCurrency"/>
                </div>
            </div>
            <CryptoTable :infoTable="infoEther" />
            <transactions :infoTransactions="allTransactions" />
            <nft :infoNFT="infoEther" />
            
            <Footer /> 
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Searching from '../components/matic/Searching.vue'
import Metainfo from '../components/matic/Metainfo.vue'
import CryptoTable from '../components/matic/CryptoTable.vue'
import Nft from '../components/matic/Nft.vue'
import Footer from '../components/matic/Footer.vue'
import axios from 'axios'
import Transactions from '../components/matic/Transactions.vue'

export default {
    components : { Navbar, Searching, Metainfo, CryptoTable, Nft, Footer, Transactions },
    data() {
        return {
            apiKey : 'ckey_4e7ba38c8e50410a92ed0989d8f',
            infoEther : '',
            infoMatic : '',
            chain_id_et : 137,
            chain_id_m : 137,
            loading : false,
            currency : "usd",
            totalBalance : 0.00,
            allTransactions : '',
            wallet : ''
        }
    },
    methods : {
        numberWithCommas(x) {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            },
        
        getTotalBalance(info) {
            this.totalBalance = 0.00
            for(let i=0;i<info.items.length;i++) {
                this.totalBalance = this.totalBalance + parseFloat(info.items[i].quote)
            }
            this.totalBalance = this.numberWithCommas(parseFloat(this.totalBalance).toFixed(2))         
        },
        getBalance(wallet) {
            this.wallet = wallet
            this.loading = true
            let url1 = `https://api.covalenthq.com/v1/${this.chain_id_et}/address/${wallet}/balances_v2/`
            axios.get(url1,{ params : {"quote-currency" : this.currency, key : this.apiKey, nft : true}})
            .then(response => { 
                this.infoEther = response.data.data,
                this.getTotalBalance(this.infoEther),
                this.getTransactions(wallet)
            }).catch(error => {
                console.log(error),
                this.$swal({
                    icon : 'error',
                    title : 'Oops..',
                    text : 'Something went wrong or Wallet Address or ENS Names Not Found'
                }),
                this.loading = false
            })
        },
        getTransactions(wallet) {
            let url = `https://api.covalenthq.com/v1/${this.chain_id_et}/address/${wallet}/transactions_v2/`;
            axios.get(url, {params : {"quote-currency" : this.currency, key : this.apiKey, nft : true }})
            .then(response => {
                this.allTransactions = response.data.data
            }).catch(error => {
                console.log(error)
            }).finally(() => this.loading = false)
        },

        changeCurrency(cur) {
            this.currency = cur
            this.getBalance(this.wallet)
        }
    }
    
}
</script>

<style scoped>
.top {
    margin-top: 100px;
}



</style>