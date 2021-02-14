<template>
  <center>
    <div class="card mt-4">
      <div class="card-header">
        <strong>C R Y P T O</strong>
      </div>
      <div class="card-body">
        <div class="scrollable">
          <div class="container">
            <table class="table">
              <thead class="table-light">
                <tr>
                  <td><strong>No</strong></td>
                  <td></td>
                  <td><strong>Contract Name</strong></td>
                  <td><strong>Contract Address</strong></td>
                  <td><strong>Ticker</strong></td>
                  <td><strong>Type</strong></td>
                  <td><strong>Amount</strong></td>
                  <td><strong>Balance</strong></td>
                  <td><strong></strong></td>
                </tr>
              </thead>
              <tbody v-if="infoTable">
                <tr v-for="(row, index) in infoTable.items" :key="row">
                  <td width="5%" v-if="row.type !== 'nft'">{{ index + 1 }}</td>
                  <td width="5%" v-if="row.type !== 'nft'">
                    <img
                      :src="row.logo_url"
                      style="width:30px;height:30px"
                      onerror="this.src='../defaultImg.png'"
                    />
                  </td>
                  <td width="5%" v-if="row.type !== 'nft'">
                    {{ row.contract_name }}
                  </td>
                  <td width="5%" v-if="row.type !== 'nft'">
                    {{ row.contract_address }}
                  </td>
                  <td width="5%" v-if="row.type !== 'nft'">
                    {{ row.contract_ticker_symbol }}
                  </td>
                  <td width="5%" v-if="row.type !== 'nft'">{{ row.type }}</td>
                  <td width="5%" v-if="row.type !== 'nft'">
                    {{
                      numberWithCommas(
                        (
                          row.balance / Math.pow(10, row.contract_decimals)
                        ).toFixed(3)
                      )
                    }}
                  </td>
                  <td width="5%" v-if="row.type !== 'nft'">
                    {{ infoTable.quote_currency === "USD" ? '$' : '' }}{{ infoTable.quote_currency === "EUR" ? '€' : '' }}{{ infoTable.quote_currency === "JPY" ? '¥' : '' }}{{ numberWithCommas(row.quote.toFixed(2)) }}
                  </td>
                  <td width="35%" v-if="row.type !== 'nft'">
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      @click="
                        getErc20TokenTransfer(
                          row.contract_address,
                          infoTable.address
                        )
                      "
                      >ERC20 Token Transfer</a
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable"
        >
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                ERC20 Token Transfer
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <BodyModal :infoTransfer="erc20Transfer" />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- end Modal -->
    </div>
  </center>
</template>

<script>
import axios from "axios";
import BodyModal from "../components/BodyModal.vue";

export default {
  components: {
    BodyModal
  },
  data() {
    return {
      erc20Transfer: ""
    };
  },
  props: {
    infoTable: {
      type: Object
    }
  },

  methods: {
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },

    getErc20TokenTransfer(contract, address) {
      let url = `https://api.covalenthq.com/v1/1/address/${address}/transfers_v2/`;
      axios
        .get(url, { params: { "contract-address": contract } })
        .then(response => {
          this.erc20Transfer = response.data.data;
        })
        .catch(error => {
          console.log(error);
        });
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