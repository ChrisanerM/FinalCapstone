<template>
    <h2>Administration</h2>
  <div class="container-fluid admin">
    <h5>Products Administration</h5>
    <div class="tab">
      <table class="table" v-for="product in products"
      :key="product.id">
        <thead>
          <tr>
            <th scope="col">Product Name</th>
            <th scope="col">Product Description</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
            <th scope="col">Product Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"></th>
            <td>{{ product.prodName }}</td>
            <td>{{ product.prodDescription}}</td>
            <td>{{ product.category }}</td>
            <td>{{ product.price }}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="container">
    <h5>Users Administration</h5>
    <div>
      <table class="table" v-for="user in users"
      :key="user.userID">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">UserName</th>
            <th scope="col">Surname</th>
            <th scope="col">Gender</th>
            <th scope="col">Email Address</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"></th>
            <td>{{user.userID}}</td>
            <td>{{ user.firstName}}</td>
            <td>{{user.lastName}}</td>
            <td>{{user.gender}}</td>
            <td>{{user.emailAdd}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    store.dispatch("fetchProducts", "fetchUsers");
    const products = computed(() => store.state.products);
    const users = computed(() => store.state.users);
    return {
      products,users
    };
  },
};
</script>

<style scoped>

</style>
