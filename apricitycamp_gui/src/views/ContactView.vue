<template>
  <div class="apricon">
  <div class="cont">


    <form action="https://formspree.io/f/moqznnpp" class="forms" method="post">
      <p class="descrip">
      We'd be delighted to hear from you, your experience is what our business
      thrives upon so any feedback is welcome!
    </p>
      <div class="mb-3">
        <label for="exampleName" class="form-labels" name="username" required
          >Name:
        </label>
        <input
          type="text"
          class="form-controls"
          id="exampleInputPassword1"
          name="username"
          required
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-labels">Email:</label>
        <input type="text" class="form-controls" id="exampleInputPassword1" />
      </div>
      <div class="mb-3">
        <label for="Message">Message:</label>
      <textarea
        id="bio"
        name="bio"
        placeholder="Type your message here"
      ></textarea>
        </div>
      <button>Submit</button>
    </form>
  </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.apricon{
  background: url("https://i.postimg.cc/3JbhRmFL/S2-E-Contact-Title-Banners-2000px-2000x.webp")
    no-repeat;
  background-size: cover;
}
.cont {
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: bold;
  padding: 25px;
  width:55%;
  margin-left: 650px;
  height:85vh
}

.forms {
  height: 75vh;
  margin-top: 20px;
  background-color: whitesmoke;
  border-radius: 25px;
  padding:8px;
}
.descrip {
  font-style: italic;
  margin-top:85px;
}
.form-controls {
  padding: 8px;
  width: 50%;
}
button {
  background-color: tan;
  border-radius: 5px;
  border-color: tan;
  padding: 1px;
  margin-left: 200px;
  margin-right: 200px;
}

#bio{
  width:27rem;
  height: 20vh;

}
</style>
