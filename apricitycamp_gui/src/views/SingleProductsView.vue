<template>
   <div class="card"
   style="width: 18rem;">
  <img
  :src="product.imgURL" class="card-img-top" :alt="product.category">
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

<style lang="scss" scoped>

</style>