<template>
  <center>
    <div class="card mt-4">
      <div class="card-header">
        <strong>N F T</strong>
      </div>
      <div class="container">
        <div class="card-body scrollable">
          <div class="contoh">
            <div
              class="accordion accordion-flush"
              id="accordionFlushExample"
              v-for="(row, index) in infoNFT.items"
              :key="row"
            >
              <div
                class="accordion-item"
                v-if="row.type == 'nft' && row.nft_data !== null"
              >
                <h2 class="accordion-header" id="flush-headingOne">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    :data-bs-target="'#flush-collapse' + index"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    {{ row.contract_name }}&nbsp;&nbsp;&nbsp;&nbsp;<span
                      class="badge bg-primary"
                      >{{ row.nft_data.length }}</span
                    >
                  </button>
                </h2>
                <div
                  :id="'flush-collapse' + index"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <table class="table">
                    <thead class="table-light">
                      <tr>
                        <td>No</td>
                        <td></td>
                        <td>Token ID</td>
                        <td>Name</td>
                        <td>Description</td>
                        <td></td>
                        <td></td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(nftRow, index) in row.nft_data" :key="nftRow">
                        <td v-if="nftRow.external_data !== null">
                          {{ index + 1 }}
                        </td>
                        <td v-if="nftRow.external_data !== null">
                          <a
                            @click="passTheImage(nftRow.external_data.image)"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#nftModal"
                            ><img
                              :src="nftRow.external_data.image"
                              class="rounded mx-auto d-block"
                              style="width : 100px; height : 100px"
                          /></a>
                        </td>
                        <td v-if="nftRow.external_data !== null">
                          {{ nftRow.token_id }}
                        </td>
                        <td v-if="nftRow.external_data !== null">
                          {{ nftRow.external_data.name }}
                        </td>
                        <td v-if="nftRow.external_data !== null">
                          {{ nftRow.external_data.description }}
                        </td>
                        <td v-if="nftRow.external_data !== null">
                          <a
                            :href="nftRow.external_data.external_url"
                            target="_blank"
                            >More details..</a
                          >
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Modal -->
        <div
          class="modal fade"
          id="nftModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"></h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <modal-body-image :image="img" />
              </div>
            </div>
          </div>
        </div>
        <!-- End Modal -->
      </div>
    </div>
  </center>
</template>

<script>
import ModalBodyImage from "../components/ModalBodyImage.vue";

export default {
  data() {
    return {
      img: ""
    };
  },

  components: {
    ModalBodyImage
  },

  props: {
    infoNFT: {
      type: Object
    }
  },

  methods: {
    passTheImage(img) {
      this.img = img;
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