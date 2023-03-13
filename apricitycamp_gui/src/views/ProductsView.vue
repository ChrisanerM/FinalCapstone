<template>
  <div>
    <h2>Products</h2>

    <div class="products-page">
      <h1>Browse through our Products:</h1>
      <div class="row">
        <div
          class="card col-3"
          v-for="product in products"
          :key="product.id"
          style="height: 350px"
        >
          <img
            :src="product.imgURL"
            class="card-img-top"
            alt="..."
            style="height: 200px"
          />
          <div class="card-body">
            <p class="name">{{ product.prodName }}</p>
            <p class="price">R{{ product.price }}</p>
            <!-- <RouterLink> -->
<button class="view"><router-link to="/singleview"> View more
</router-link></button>
            <!-- </RouterLink> -->
          </div>
        </div>
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
    store.dispatch("fetchProducts");
    const products = computed(() => store.state.products);
    return {
      products,
    };
  },
};
</script>

<style lang="scss" scoped></style>
