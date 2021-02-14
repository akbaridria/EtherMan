<template>
  <center>
    <div class="card">
      <div class="card-body">
        <h3 class="mb-4 mt-2">Ethereum Wallet Checker</h3>
        <h5 class="card-title m-2">
          Enter your Ethereum Address or ENS Names Here
        </h5>
        <form class="col-sm-8">
          <input
            type="text"
            v-model="walletOrEns"
            class="form-control form-control-sm mt-3 mb-3"
          />
          <button
            class="btn btn-primary"
            type="button"
            id="buttonBalance"
            @click="getBalance(walletOrEns)"
          >
            <span>Get Balance</span>
          </button>
          <section v-if="loading">
            <div class="spinner-border text-primary" role="status"></div>
          </section>
        </form>
      </div>
    </div>
  </center>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      required: true
    }
  },

  data() {
    return {
      walletOrEns: ""
    };
  },

  methods: {
    getBalance(wallet) {
      if (wallet === "") {
        this.$swal(
          "No Wallet Address",
          "Please fill the input box with your wallet address!",
          "question"
        );
      } else {
        this.$emit("getBalanceWallet", wallet);
      }
    }
  }
};
</script>

<style scoped>
#showSpinner {
  display: none;
}

#unshowSpinner {
  display: block;
}

#buttonBalance {
  margin-bottom: 30px;
}
</style>