<template>
  <h1>Admin Page</h1>
  <td>
    <table class="list" id="adminList">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>Decription</th>
          <th>Image</th>
          <th>Quantiy</th>
          <div>
          <th>Action1</th>
          <th>Action2</th>
        </div>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.prodName }}</td>
          <td>{{ product.category }}</td>
          <td>R{{ product.price }}</td>
          <td>{{ product.prodDescription }}</td>
          <td>R{{ product.prodQuantity }}</td>
          <td>
            <img
              :src="product.imgURL"
              class="card-img-top"
              alt="..."
              style="width: 55px; height: 60px"
            />
          </td>
          <div>
            <input v-model="newProd"/>
          <td><button class="btn btn-success"> Edit </button></td>
          <td><button class="btn btn-danger"> Delete </button></td>
          <td></td></div>
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
          <th> <button class="btn btn-success"> Delete </button></th>
          <th> <button class="btn btn-danger"> Edit </button></th>
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
export default{
  setup() {
    const store = useStore();
    store.dispatch("fetchProducts");
    store.dispatch("fetchUsers");
    // store.dispatch("deleteUsers");
    // store.dispatch("deleteProduct");
    // store.dispatch("updateUsers");
    // store.dispatch("updateUsers");
    const products = computed(() => store.state.products);
    // const delprod = computed(() => store.state.products);
    // const editprod = computed(() => store.state.editprod);
    const Users = computed(() => store.state.users);
    // const del = computed(() => store.state.users);
    // const edit = computed(() => store.state.users);
    return {
      products,
      // delprod,
      // editprod,
      Users,
      // del,
      // edit,

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
