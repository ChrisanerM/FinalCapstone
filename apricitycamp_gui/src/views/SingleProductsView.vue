<template>
   <div class="card" 
   v-for="product in products"
   :key="product.id"
   style="width: 18rem;">
  <img
  :src="product.imgURL" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Description:{{ product.prodDescription }}</p>
    <p class="card-text">Category:{{ product.category }}</p>
    <p class="card-text">Quantity:{{ product.prodQuantity }}</p>
  </div>
</div>


</template>

<script>
    import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    store.dispatch("fetchProducts");
    const products = computed(() => store.state.products);
    return {
      products,
    };
  },
};
</script>

<style lang="scss" scoped>

</style>