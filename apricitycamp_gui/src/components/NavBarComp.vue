<template>
    
    <div class="nav justify-content-start logo">
      <img src="https://i.postimg.cc/760tLqm1/Apricity-Camp-logo.jpg" style="width:145px; padding-top:5px;">
    </div>
  
  <ul class="nav justify-content-end">
   <router-link to="/login"><h7>Login</h7> <router-link to='/register'><h7>|Register</h7></router-link> <img src="https://i.postimg.cc/SxshZBFb/istockphoto-1337144146-612x612.jpg" style="width:40px; height:6vh; border-radius:50px;"></router-link>
      
    <li class="nav-item">
      <router-link to="/"> Home
  
  </router-link>  
      
    </li>
    <li class="nav-item">
      <router-link to="/about"> About
  
  </router-link> 
      
    </li>
    <li class="nav-item">
      <router-link to="/products"> Purchase Here
        
  </router-link> 
      
    </li>
    <li class="nav-item">
      <router-link to="/admin"> Admin
        
  </router-link> 
      
    </li>
    
    <li class="nav-item">
      <router-link to="/contact"> Contact
        
  </router-link> 
      
    </li>
    
  </ul>
  
  
  </template>
  
  
  
  <script>
  
  </script>
  
  
  
  
  <style scoped>
  
  * {
    margin:0;
  }
  
  .nav-item {
    margin-left: 30px;
    font-size: 20px;
    font-weight: bold;
  }
  
.nav a {
  color: antiquewhite;
  text-decoration: none;
  font-family:  Georgia, "Times New Roman", Times, serif;
  font-size: 20px;
  color: black

}

.nav-item hover:a {
  color: black;
}

.nav {
  color:antiquewhite;
}

.nav {
  background-color: #f0d699;
  height:70px;
  }

img{
  height: 20vh;
}

h7{
  font-size:13px;
  font-weight: bold;
}
  
  </style>