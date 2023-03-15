<template>
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
    <div>
      <p class="lead">{{ message }}</p>
    </div>
    <div class="col-12">
      <button class="btn btn-primary" type="submit">Click here to login</button>
    </div>
  </form>
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
    message() {
      return this.$store.state.message;
    },
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

<style lang="scss" scoped></style>
