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
    message:null,
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
    },
    setSpinner(state,showSpinner){
      state.showSpinner= showSpinner
    },
  },
  actions: {
    async fetchUsers (context){
      const res= await axios.get(`${apricityURL}users`);
      const {results,err}= await res.data;
      console.log(results);
      if (results){
        context.commit('setUsers',results)
      } else {
        context.commit('setMessage', err)
      }
  },
    async deleteUser (context){
      const res= await axios.delete(`${apricityURL}users`);
      const {results,err}= await res.data;
      console.log(results);
      if (results){
        context.commit('setUsers',results)
      } else {
        context.commit('setMessage', err)
      }
  },
    async updateUser (context){
      const res= await axios.put(`${apricityURL}users`);
      const {results,err}= await res.data;
      console.log(results);
      if (results){
        context.commit('setUsers',results)
      } else {
        context.commit('setMessage', err)
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
async addProduct (context){
  const res= await axios.post(`${apricityURL}product`);
  const {msg,err} = await res.body;
  if (msg){
    context.commit('setMessage',msg)
  } else {
    context.commit('setMessage', err)
  }
},
async updateProduct(context){
  const res= await axios.post(`${apricityURL}product`);
  const {msg,err} = await res.data;
  if (msg){
    context.commit('setMessage',msg)
  } else {
    context.commit('setMessage', err)
  }
},

  async deleteProduct(context, id){
    const res= await axios.delete(`${apricityURL}product/${id}`);
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
      console.log(msg);
    } else {  
      context.commit('setMessage', err)
    }
},
 
    

},
  modules: {
  }
})
