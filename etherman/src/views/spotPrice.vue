<template>
    <div>
        <navbar />
        <div class="top">
            <div class="container">
                <card-spot-price />
                <Footer />
            </div>
        </div>
    </div>
    
</template>

<script>
import Navbar from "../components/Navbar.vue"
import Footer from "../components/Footer.vue"
import cardSpotPrice from "../components/spotprice/cardSpotPrice.vue"

export default {
    components : { Navbar, Footer, cardSpotPrice }
}
</script>
<style scoped>
.top {
    margin-top: 100px;
}
</style>