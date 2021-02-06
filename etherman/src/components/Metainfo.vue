<template>
    <center>
            <div class="card" >
            <div class="card-body">
                
                <h3 class="badge bg-primary">Wallet Address</h3>
                <h4 class="walletAddress mb-3">{{ walletAddress ? walletAddress : '-'}}</h4>
                <hr>
                <div class="row">
                    <div class="col">
                        <h3 class="badge bg-primary">Total Balance</h3>
                        <h4 class="walletBalance mb-3">{{ balance ?  balance : '-'}}</h4>
                        
                           
                    </div>
                    <div class="col">
                        <h3 class="badge bg-primary">Last Update</h3>
                        <h4 class="lastUpdateWallet">{{ updateAt ?  updateAt : '-' }}</h4>
                    </div>
                </div>
                <span class="mb-3">Change Currency</span><br/>
                            <div class="form-check form-check-inline"> 
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked>
                            <label class="form-check-label" for="inlineRadio1">USD</label>
                            </div>
                            <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option1">
                            <label class="form-check-label" for="inlineRadio2">EUR</label>
                            </div>
                            <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option1">
                            <label class="form-check-label" for="inlineRadio3">JPY</label>
                            </div>
                
            </div>
            </div>
        </center>
</template>

<script>
export default {
    
}
</script>