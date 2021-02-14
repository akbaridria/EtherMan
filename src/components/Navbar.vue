<template>
  <div class="container">
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><h2>EtherMan</h2></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link class="nav-link" :to="{ name: 'ethereum'}">Ethereum Wallet Checker</router-link>
            <router-link class="nav-link" :to="{ name: 'matic'}">Matic Wallet Checker</router-link>
            <router-link class="nav-link" :to="{ name: 'uniswap'}">Uniswap V2 Assets</router-link>
            <router-link class="nav-link" :to="{ name: 'sushiswap'}">Sushiswap</router-link>
            <router-link class="nav-link" :to="{ name: 'spotprice'}">Spot Price</router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive : ''
    }
  }
};
</script>

<style scoped>

</style>