<template>
  <div class="login">
  <div class="container">
    <h4>Please login here:</h4>
  <form @submit.prevent="login">
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label"
        >Email address:</label
      >
      <input
        v-model="emailAdd"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="name@example.com"
      />
    </div>
    <div class="form-floating">
      <input
        v-model="userPass"
        type="password"
        class="form-control"
        id="floatingPassword"
        placeholder="Password"
      />
      <label for="floatingPassword">Password</label>
    </div>
    <div class="col-12">
      <button class="btn btn-primary" type="submit">Click here to login</button>
      <router-link to="/register" ><button class="btn btn-primary" type="submit">Not Registered? Click here</button></router-link>
    </div>
  </form>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      emailAdd: "",
      userPass: "",
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        emailAdd: this.emailAdd,
        userPass: this.userPass,
      });
    },
  },
};
</script>

<style scoped>
.login{
  background: url("https://i.postimg.cc/ncWfDgCB/johannes-plenio-Rw-Hv7-Lge-C7s-unsplash.jpg")
    no-repeat;
  background-size: cover;
  height:75vh;
}
.container{
  background-color: whitesmoke;
  width:40rem;
  height:60vh;
}
.btn{
  background-color: rgb(225, 159, 78);
  border-color: rgb(225, 159, 78);
}


</style>
