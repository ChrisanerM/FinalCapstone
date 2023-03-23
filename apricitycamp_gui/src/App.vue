<template>
<NavBarComp/>
<router-view/>
<AddProduct/>
<FooterComp/>
</template>

<script>
import NavBarComp from './components/NavBarComp.vue';
import FooterComp from './components/FooterComp.vue';
import AddProduct from './components/AddProduct.vue';
export default{
  components: {
    NavBarComp,
    FooterComp,
    AddProduct,
    
  }}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
