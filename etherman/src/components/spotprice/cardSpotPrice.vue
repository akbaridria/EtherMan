<template>
  <div class="card">
    <div class="card-body">
      <center>
        <h3 class="mt-3"><strong>SPOT PRICE</strong></h3>
        <p class="card-title">
          <em>Last Updated (update every minute)</em>
        </p>
        <p class="mb-2">{{ updated_at }}</p>
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
            <td>No</td>
            <td></td>
            <td>Contract Name</td>
            <td>Ticker</td>
            <td>Rank</td>
            <td>Value</td>
            <td></td>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
</style>