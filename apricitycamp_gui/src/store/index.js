import { createStore } from 'vuex'
import axios from 'axios';
const apricityURL='https://finalcapstone.onrender.com/'; 
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
    setUser(state, value) {
      state.user = value
    },
    setProducts(state,values){
      state.products=values
    },
    setProduct(state,value){
      state.product=value
    },
    setMessage(state,message){
      state.message= message
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
  async fetchProduct(context, id){
    const res= await axios.get(`${apricityURL}product/${id}`);
    const {results,err}= await res.data;
    if (results){
      context.commit('setProduct',results[0])
    } else {
      context.commit('setMessage',err)
    }
}, 
  async createUser (context,payload){
    const res= await axios.post(`${apricityURL}register`,payload);
    const {msg,err} = await res.data;
    if (msg){
      context.commit('setMessage',msg)
    } else {
      context.commit('setMessage', err)
    }
},
  async login (context,payload){
    const res= await axios.post(`${apricityURL}login`,payload);
    const {msg,err} = await res.data;
    if (msg){
      context.commit('setMessage',msg)
    } else {  
      context.commit('setMessage', err)
    }
},
 
    

},
  modules: {
  }
})
