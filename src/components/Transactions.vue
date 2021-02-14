<template>
  <center>
    <div class="card mt-4">
      <div class="card-header">
        <strong>T R A N S A C T I O N S</strong>
      </div>
      <div class="card-body scrollable">
          <div class="container">
          <table class="table">
              <thead class="table-light">
                  <tr>
                      <td><strong>No</strong></td>
                      <td><strong>Date</strong></td>
                      <td><strong>From Address</strong></td>
                      <td><strong>To Address</strong></td>
                      <td><strong>Status</strong></td>
                      <td><strong></strong></td>
                  </tr>
              </thead>
              <tbody v-if="infoTransactions">
                  <tr v-for="(row, index) in infoTransactions.items" :key="row">
                      <td>{{ index + 1 }}</td>
                      <td>{{ new Date(row.block_signed_at).toDateString() }}</td>
                      <td>{{ row.from_address }}</td>
                      <td>{{ row.to_address }}</td>
                      <td>{{ row.successful ? 'Success' : '-' }}</td>
                      <td><a :href="'https://etherscan.io/tx/' + row.tx_hash" target="_blank">More details..</a></td>
                  </tr>
              </tbody>
          </table>
          </div>
      </div>
    </div>
  </center>
</template>

<script>
export default {
    props : {
        infoTransactions : {
            type : Object
        }
    }
};
</script>

<style scoped>
.scrollable {
  overflow-y: auto;
  max-height: 300px;
}
td {
  vertical-align: middle;
  text-align: center;
}
</style>