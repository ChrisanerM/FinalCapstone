<template>
  <AddProducts/>
  <h1>Admin Page</h1>
  <button v-on:click="addProduct" class="btn btn-secondary">Add Product</button>
  <td>
    <table class="list" id="adminList">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>Description</th>
          <th>Image</th>
          <th>Quantity</th>
          <th>Action1</th>
          <th>Action2</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.prodName }}</td>
          <td>{{ product.category }}</td>
          <td>R{{ product.price }}</td>
          <td>{{ product.prodDescription }}</td>
          <td>
            <img
              :src="product.imgURL"
              class="card-img-top"
              alt="..."
              style="width: 55px; height: 60px"
            />
          </td>
          <td>R{{ product.prodQuantity }}</td>
          <td><button class="btn btn-success">Edit</button></td>
          <td><button class="btn btn-danger">Delete</button></td>
        </tr>
      </tbody>
    </table>
  </td>

  <br />
  <h1>User Profile</h1>
  <td>
    <table class="userlist">
      <thead>
        <tr>
          <th>#</th>
          <th>firstName</th>
          <th>lastName</th>
          <th>gender</th>
          <th>emailAdd</th>
          <th>userRole</th>
          <th>userProfile</th>
          <th><button class="btn btn-success">Delete</button></th>
          <th><button class="btn btn-danger">Edit</button></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in Users" :key="user.userID">
          <td>{{ user.userID }}</td>
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.gender }}</td>
          <td>{{ user.emailAdd }}</td>
          <td>{{ user.userRole }}</td>
          <td>{{ user.userProfile }}</td>
        </tr>
      </tbody>
    </table>
  </td>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import AddProducts from '../components/AddProduct.vue'
export default {
  setup() {
    const store = useStore();
    store.dispatch("fetchProducts");
    store.dispatch("fetchUsers");
    const products = computed(() => store.state.products);
    const Users = computed(() => store.state.users);
    return {
      products,
      Users,
    };
  },
  components:{
    AddProducts,
  }
};
</script>

<style scoped>
.list,
.userlist {
  width: 90rem;
}
</style>
