<template>
  <form @submit.prevent="register">
    <p>First Name:</p>
    <input v-model="firstName" type="text" placeholder="Enter Your Name" />
    <p>Last Name:</p>
    <input v-model="lastName" type="text" placeholder="Enter Your Surname" />

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
    <p>Select Gender</p>

    <input v-model="gender" type="radio" name="gender" value="Female" />
    <label for="female">Female</label>

    <input v-model="gender" type="radio" name="gender" value="Male" />
    <label for="male">Male</label>

    <input v-model="gender" type="radio" name="gender" value="Other" />
    <label for="other">Other</label>

    <div>
      <p class="lead">{{ message }}</p>
    </div>
    <div class="col-12">
      <button class="btn btn-primary" type="submit">
        Click here to register
      </button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      emailAdd: "",
      userPass: "",
      gender: "",
    };
  },
  computed: {
    message() {
      return this.$store.state.message;
    },
  },
  methods: {
    register() {
      this.$store.dispatch("createUser", {
        firstName: this.firstName,
        lastName: this.lastName,
        emailAdd: this.emailAdd,
        userPass: this.userPass,
        gender: this.gender,
      });
    },
  },
};
</script>

<style scoped></style>
