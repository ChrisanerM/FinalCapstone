<template>
  <td>
    <table class="list" id="adminList">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>Description</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </td>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default{
  setup() {
    const store = useStore();
    store.dispatch("addProduct");
    const product = computed(() => store.state.products);    
    return {
      product,
    };
  },
};
</script>

<style scoped>
.list,
.userlist {
  width: 90rem;
}
</style>
