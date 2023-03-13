import { createStore } from 'vuex'
import axios from 'axios';
const apricityURL='https://finalcapstone.onrender.com'; 
export default createStore({
  state: {
    users:null,
    user:null,
    products:null,
    product:null,
    showSpinner:true,
    message:null
  },
  getters: {
  },

  mutations: {
    setUsers(state,values){
      state.users=values
    },
    setProducts(state,values){
      state.products=values
    },
    setMessage(state,message){
      state.message=message
    }
    
  },
  actions: {
    async fetchUsers (context){
      const res= await axios.get (`${apricityURL}users`);
      if (res.data){
        context.commit('setUsers',res.data)
      } else {
        context.commit('setMessage', 'An error occurred')
      }
  },
    async fetchProducts (context){
      const res= await axios.get(`${apricityURL}products`);
      const {results,err}= await res.data;
      if (results){
        context.commit('setProducts',results)
      } else {
        context.commit('setMessage',err)
      }
  },

},
  modules: {
  }
})
