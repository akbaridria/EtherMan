<template>
    <div>
        <navbar />
        <div class="top">
            <div class="container">
                <card-spot-price :infoSpotPrice="dataSpotPrice" :updated_at = "updated" @changeCurrency="changeCur"/>
                <Footer />
            </div>
        </div>
    </div>
    
</template>

<script>
import Navbar from "../components/Navbar.vue"
import Footer from "../components/Footer.vue"
import cardSpotPrice from "../components/spotprice/cardSpotPrice.vue"
import axios from 'axios'

export default {
    data() {
        return {
            apiKey : 'ckey_4e7ba38c8e50410a92ed0989d8f',
            dataSpotPrice : {},
            updated : '',
            currency : 'usd'
        }
    },
    components : { Navbar, Footer, cardSpotPrice },
    methods : {
        getSpotPrice(){
            this.updated = new Date()
            let url = `https://api.covalenthq.com/v1/pricing/tickers/`
            axios.get(url, {params : { key : this.apiKey, "quote-currency" : this.currency }}).then(response => { 
                this.dataSpotPrice = response.data.data
            }).catch(error => {
                console.log(error)
            })
        },

        changeCur(cur) {
            console.log("oke gan masuk" )
            this.currency = cur
            this.getSpotPrice()
        }
    },

    mounted() {
        this.getSpotPrice()
        setInterval(() => {
            this.getSpotPrice()
        }, 60000);
    }
}
</script>
<style scoped>
.top {
    margin-top: 100px;
}

</style>