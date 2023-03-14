<template>
  <form>
    <p>First Name:</p>
    <input type="text" placeholder="Enter Your Name" v-model="firstName" />
    <p>Last Name:</p>
    <input type="text" placeholder="Enter Your Surname" v-model="lastName" />

    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Email address:</label>
      <input
        v-model="emailAdd"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="name@example.com"
      />
    </div>
    <div class="form-floating">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="userPass">
  <label for="floatingPassword">Password</label>
</div>
    <p>Select Gender</p>

    <input type="checkbox" id="female" value="Female" v-model="gender" />
    <label for="female">Female</label>

    <input type="checkbox" id="John" value="Male" v-model="gender" />
    <label for="male">Male</label>

    <input type="checkbox" id="other" value="Other" v-model="gender" />
    <label for="other">Other</label>

    <div class="col-12">
      <button class="btn btn-primary" type="submit">
        Click here to register
      </button>
    </div>
  </form>
</template>

<script>
export default{
  data(){
    return{
      Name: "",
      Surname:"",
      Email:"",
      Password:"",
      gender:[]
    }
  },
  computed:{
    message(){
      return this.$store.state.message
    }
  },
  methods:{
    register(){
      this.$store.dispatch('createUser',{
        Name: this.Name,
        Surname: this.Surname,
        Email: this.Email,
        Password: this.Password,
        gender: this.gender

      })
    }
  }
}
</script>

<style scoped></style>
