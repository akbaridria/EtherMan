<template>
    <center>
            <div class="card" >
            <div class="card-body">
                
                <h3 class="badge bg-primary">Wallet Address</h3>
                <p class="walletAddress mb-3">{{ infoMeta.address ? infoMeta.address : '-' }}</p>
                <hr>
                <div class="row">
                    <div class="col">
                        <h3 class="badge bg-primary">Total Balance</h3>
                        <h4 class="walletBalance mb-3">{{ infoMeta.quote_currency === "USD" ? '$' : '' }}{{ infoMeta.quote_currency === "EUR" ? '€' : '' }}{{ infoMeta.quote_currency === "JPY" ? '¥' : '' }}{{ totalBalance ? totalBalance : '-' }}</h4>
                        
                           
                    </div>
                    <div class="col">
                        <h3 class="badge bg-primary">Last Update</h3>
                        <p class="lastUpdateWallet">{{ infoMeta.updated_at ? new Date(infoMeta.updated_at).toDateString() : '-' }}</p>
                    </div>
                </div>
                <span class="mb-3">Change Currency</span><br/>
                            <div class="form-check form-check-inline"> 
                            <input class="form-check-input" type="radio" v-model="currency" id="inlineRadio1" value="usd" name="currency" checked>
                            <label class="form-check-label" for="inlineRadio1">USD</label>
                            </div>
                            <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" v-model="currency" id="inlineRadio2" value="eur" name="currency">
                            <label class="form-check-label" for="inlineRadio2">EUR</label>
                            </div>
                            <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" v-model="currency" id="inlineRadio3" value="jpy" name="currency">
                            <label class="form-check-label" for="inlineRadio3">JPY</label>
                            </div>
                
            </div>
            </div>
        </center>
</template>

<script>
export default {
    data() {
        return {
            currency : ''
        }
    },

    props : {
        totalBalance : {
            type : String
        },
        infoMeta : {
            type : Object
        }
    
    },

    watch : {
        currency() {
            console.log("oke gan disini");
            this.$emit("changeCurrency", this.currency)
        }
    }
}
</script>