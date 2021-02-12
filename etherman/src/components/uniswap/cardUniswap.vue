<template>
    <div class="card">
      <div class="card-body">
          <div class="container">
        <center>
        <img src="uniswap.png" style="width : 100px; height : 100px;" />
        </center>
        <h3 class="mt-2" style="text-align:center"><strong>Uniswap V2 Assets</strong></h3>
        <p class="card-title" style="text-align:center">
          <em>Last Update (Updated every minute)</em> 
        </p>
        <p class="mb-5" style="text-align : center">{{ new Date(updated_at).toDateString() + ' ' + new Date(updated_at).toLocaleTimeString() }}</p>
        <table class="table">
            <thead class="table-light">
                <tr>
                    <td></td>
                    <td>Pairs</td>
                    <td>Total Liquidity</td>
                    <td>Volume (24h)</td>
                    <td>Fee (24h)</td>
                    <td>Swap Action (24h)</td>
                </tr>
            </thead>
            <div v-if="loading">
                <center>
                <div class="spinner-border text-primary m-4" role="status">
                </div>
                </center>
            </div>
            <tbody v-else>
                <tr v-for="row in infoUniswap.items" :key="row">
                    <td><img class="rounded" :src="row.token_0.logo_url"  onerror="this.src='../defaultImg.png'" style="width : 35px; height : 35px"><img class="rounded" :src="row.token_1.logo_url" style="width : 35px; height : 35px"  onerror="this.src='../defaultImg.png'"></td>
                    <td>{{ row.token_0.contract_ticker_symbol + '-' + row.token_1.contract_ticker_symbol}}</td>
                    <td>${{ numberWithCommas(row.total_liquidity_quote) }}</td>
                    <td>${{ numberWithCommas(row.volume_24h_quote) }}</td>
                    <td>${{ numberWithCommas(row.fee_24h_quote) }}</td>
                    <td>{{ numberWithCommas(row.swap_count_24h) }}</td>
                </tr>    
            </tbody>
            
        </table>
          </div>
      </div>
    </div>
</template>
<script>
export default {
    props : {
        infoUniswap : {
            type : Object
        },
        updated_at : {
            type : String
        },
        loading : {
            type : Boolean
        }
    },
    methods : {
        numberWithCommas(x) {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
    }
    
}
</script>
<style scoped>
td {
  vertical-align: middle;
  text-align: center;
}
</style>