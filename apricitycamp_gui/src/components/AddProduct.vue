<template>
  <div class="modal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="adds">
            <p>Product Name:</p>
            <input
              v-model="prodName"
              type="text"
              placeholder="Product Name"
            />
            <p>Category:</p>
            <input
              v-model="category"
              type="text"
              placeholder="Equipment,Clothing,Safety"
            />
            <p>Price:</p>
            <input v-model="price" type="text" placeholder="e.g R150" />
            <p>Descrip:</p>
            <input v-model="prodDescription" type="text" placeholder="Description" />
            <p>Quantity:</p>
            <input v-model="prodQuantity" type="text" placeholder="1-50" />
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="submit"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="submit" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      prodName: "",
      category: "",
      prodDescription: "",
      prodQuantity: "",
      price: "",
    };
  },
  computed: {
    message() {
      return this.$store.state.message;
    },
  },

  methods: {
    adds() {
      this.$store.dispatch("addProduct", {
        prodName: this.prodName,
        category: this.category,
        price: this.price,
        prodDescription: this.prodDescription,
        prodQuantity: this.prodQuantity,
      });
    },
  },
};
</script>

<style scoped>

</style>
