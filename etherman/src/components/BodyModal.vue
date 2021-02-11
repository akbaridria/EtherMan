<template>
  <div>
    <p style="text-align : right">
      <em>Token Name : </em>
      <span class="badge bg-primary">{{
        infoTransfer ? infoTransfer.items[0].transfers[0].contract_name : "-"
      }}</span>
    </p>
    <table class="table">
      <thead class="table-light">
        <tr>
          <td>No</td>
          <td>Date</td>
          <td>Status</td>
          <td>From or To Address</td>
          <td>Label</td>
          <td>Transfer Type</td>
          <td>Amount</td>
          <td>Total</td>
        </tr>
      </thead>
      <tbody v-if="infoTransfer">
        <tr v-for="(row, index) in infoTransfer.items" :key="row">
          <td>{{ index + 1 }}</td>
          <td>{{ new Date(row.block_signed_at).toDateString() }}</td>
          <td>{{ row.successful ? "Success" : "-" }}</td>
          <td>
            {{
              row.transfers[0].transfer_type === "OUT"
                ? row.transfers[0].to_address
                : row.transfers[0].from_address
            }}
          </td>
          <td>
            {{
              row.transfers[0].transfer_type === "OUT"
                ? row.transfers[0].to_address_label
                : row.transfers[0].from_address_label
            }}
          </td>
          <td>{{ row.transfers[0].transfer_type }}</td>
          <td>
            {{ infoTransfer.quote_currency === "USD" ? "$" : ""
            }}{{ infoTransfer.quote_currency === "EUR" ? "€" : ""
            }}{{ infoTransfer.quote_currency === "JPY" ? "¥" : ""
            }}{{
              numberWithCommas(
                (
                  row.transfers[0].delta /
                  Math.pow(10, row.transfers[0].contract_decimals)
                ).toFixed(3)
              )
            }}
          </td>
          <td>
            {{
              row.transfers[0].delta_quote !== null
                ? numberWithCommas(row.transfers[0].delta_quote.toFixed(3))
                : "-"
            }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    infoTransfer: {
      type: Object
    }
  },

  methods: {
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
};
</script>

<style scoped>
</style>