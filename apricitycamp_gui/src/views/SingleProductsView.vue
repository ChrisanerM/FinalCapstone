<template>
  <div class="singlep">
   <div class="card"
   style="width: 18rem;">
  <img
  :src="product.imgURL" class="card-img-top" :alt="product.category">
  <div class="card-body">
    <p class="card-text">Description:{{ product.prodDescription }}</p>
    <p class="card-text">Category:{{ product.category }}</p>
    <p class="card-text">Quantity:{{ product.prodQuantity }}</p>
    <button class="products"><router-link to="/products"> Back to all products </router-link></button>
  </div>
</div>
</div>


</template>

<script>
    import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const product = computed(() => store.state.product);
    return {
      product,
    };
  },
  created() {
    this.$store.dispatch("fetchProduct", this.$route.params.id);
  }
};
</script>

<style scoped>
.singlep{
  height: 80vh;
}
.card{
  margin-left: 40rem;
  justify-content: center;
}
.products{
  background-color: black;
  text-decoration: none;
}
.card-text{
  font-family:  Georgia, "Times New Roman", Times, serif;
}

</style>