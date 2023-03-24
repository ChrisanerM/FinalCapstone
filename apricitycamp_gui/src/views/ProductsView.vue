<template>
  <div class="allprod">

    <div class="products-page grid">
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

             <button class="more"> <router-link class="view" :to="{name: 'singleview', params: {id: product.id}}"> View more </router-link></button>
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

<style scoped>
.allprod{
display: grid;
margin-top: 45px;
}
.card-body{
  text-decoration: none;
}
.products-page{
  width:80%;
  height:80%;
  margin-left: 10rem;
  display: grid;
  font-family:  Georgia, "Times New Roman", Times, serif;
  font-style: italic;
  margin-top: 15px;
}
.card{
  background-color: rgb(255, 255, 255);

}
.name{
  font-size:18px;
  font-weight: bold;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.price{
  font-size:18px;
  font-weight: bold;  
}
.view{
  background-color: black;
  color: white;
  text-decoration: none;
  font-size: 18px;
  border-radius: 5px;
}
.more{
  background-color: black;
  border-radius: 5px;
}
.card-body{
  font-family:  Georgia, "Times New Roman", Times, serif;
}

</style>
