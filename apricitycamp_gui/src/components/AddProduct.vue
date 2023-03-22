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
          <form @submit.prevent="addProduct">
            <p>Product Name:</p>
            <input
              v-model="productName"
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
            <input v-model="descrip" type="text" placeholder="Description" />
            <p>Quantity:</p>
            <input v-model="quantity" type="text" placeholder="1-50" />
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
      productName: "",
      category: "",
      descrip: "",
      quantity: "",
      price: "",
    };
  },
  computed: {
    message() {
      return this.$store.state.message;
    },
  },

  methods: {
    addProduct() {
      this.$store.dispatch("addProduct", {
        productName: this.productName,
        category: this.category,
        price: this.price,
        descrip: this.descrip,
        quantity: this.quantity,
      });
    },
  },
  name: 'addProduct',
};
</script>

<style scoped>

</style>
