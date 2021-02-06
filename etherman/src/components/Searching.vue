<template>
        <center>
            <div class="card">
            
            <div class="card-body">
                <h3 class="mb-4 mt-2">Ethereum Wallets</h3>
                <h5 class="card-title m-2">Enter your Ethereum Wallet Address or ENS Names Here</h5>
                <input type="text" v-model="walletOrEns" class= "form-control form-control-sm mt-3 mb-3">
                <button class="btn btn-primary" type="button" id="buttonBalance" @click="getBalance(walletOrEns)">
                <div id="showSpinner">
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    <span class="sr-only">Loading...</span>
                </div>
                <div id="unshowSpinner">
                    <span>Get Balance</span>
                </div>
                </button>
            </div>
           
            </div>
        </center> 
</template>

<script>
export default {
    data() {
        return {
            walletOrEns : ''
        }
    },

    methods: {
        getBalance(wallet) {
            if(wallet === "") {
                this.$swal('No Wallet Address', 'Please fill the input box with your wallet address!', 'question')
            } else {
                this.$emit("getBalanceWallet", wallet)
            }
            
        } 
    }
}
</script>

<style scoped>
#showSpinner {
    display: none ;
}

#unshowSpinner {
    display: block;
}

#buttonBalance {
    margin-bottom: 30px;
}
</style>