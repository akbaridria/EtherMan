<template>
  <div class="card">
    <div class="card-body">
      <center>
        <h3 class="mt-3"><strong>SPOT PRICE</strong></h3>
        <p class="card-title">
          <em>Last Updated (update every minute)</em>
        </p>
        <p>
          {{ new Date(updated_at).toDateString() + ' ' + new Date(updated_at).toLocaleTimeString() }}
        </p>
        <span class="mb-3">Change Currency</span><br />
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            v-model="currency"
            id="inlineRadio1"
            value="usd"
            name="currency"
            checked
          />
          <label class="form-check-label" for="inlineRadio1">USD</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            v-model="currency"
            id="inlineRadio2"
            value="eur"
            name="currency"
          />
          <label class="form-check-label" for="inlineRadio2">EUR</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            v-model="currency"
            id="inlineRadio3"
            value="jpy"
            name="currency"
          />
          <label class="form-check-label" for="inlineRadio3">JPY</label>
        </div>
        <p class="mb-5" ></p>
      </center>
      <table class="table">
        <thead class="table-light">
          <tr>
            <td><strong>No</strong></td>
            <td></td>
            <td><strong>Contract Address</strong></td>
            <td><strong>Contract Name</strong></td>
            <td><strong>Ticker</strong></td>
            <td><strong>Market Cap Rank</strong></td>
            <td><strong>Value</strong></td>
            <td></td>
          </tr>
        </thead>
        <tbody v-if="infoSpotPrice">
            <tr v-for="(row, index) in infoSpotPrice.items" :key="row">
                <td>{{ index + 1}}</td>
                <td><img :src="row.logo_url" class="rounded" style="width:30px;height:30px" onerror="this.src='../defaultImg.png'" /></td>
                <td>{{ row.contract_address }}</td>
                <td>{{ row.contract_name }}</td>
                <td>{{ row.contract_ticker_symbol }}</td>
                <td>{{ row.rank }}</td>
                <td>{{ currency === "usd" ? '$' : '' }}{{ currency === "eur" ? '€' : '' }}{{ currency === "jpy" ? '¥' : '' }}{{ numberWithCommas(parseFloat(row.quote_rate).toFixed(2)) }}</td>
            </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
    data() {
      return {
        currency : 'usd'
      }
    },
    props : {
        infoSpotPrice : {
            type : Object
        },
        updated_at : {
          type : String
        }
    },
    methods : {
      numberWithCommas(x) {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
    },
    watch : {
      currency(){
        this.$emit("changeCurrency", this.currency)
      }

    }
};
</script>
<style scoped>
td {
  vertical-align: middle;
  text-align: center;
}
.scrollable {
  overflow-y: auto;
  max-height: 10000px;
}
</style>