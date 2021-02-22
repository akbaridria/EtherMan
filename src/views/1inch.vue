<template>
    <div>
        <navbar />
        <div class="top">
            <div class="container">
                <card1inch />
                <Footer />
            </div>
        </div>
    </div>
    
</template>

<script>
import Navbar from "../components/Navbar.vue"
import Footer from "../components/Footer.vue"
import card1inch from "../components/1inch/card1inch.vue"
import axios from 'axios'

export default {

}
</script>
<style scoped>
.top {
    margin-top: 100px;
}

</style>