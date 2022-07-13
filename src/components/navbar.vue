<template>
  <header>
    <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid ">
    <h1>MOSHi</h1>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
          <li class="nav-item ps-4">
              <router-link to="/">Home</router-link> 
        </li>
        <li class="nav-item ps-4">
            <router-link to="/about">About</router-link> 
        </li>
        <li class="nav-item ps-4">
            <router-link to="/shop">Gallery</router-link> 
        </li>
        <li class="nav-item ps-4">
            <router-link to="/contact">Contact Us</router-link> 
        </li> 
        <li class="nav-item ps-4">
            <router-link to="/admin">Admin</router-link> 
        </li>
      </ul>
      <div class="login ps-5">
          <button>login</button>

      </div>
    </div>
  </div>
</nav>
  </header>
</template>

<script>
export default {

} 
</script>

<style scoped>

button {
  font-size: 20px;
  width: 120px;
  border-radius: 5px;
   font-family: 'Crimson Text', serif;
   background-color: transparent;
   color: white;
    border-color: white;
    outline: none;
}

button:hover{
   background-color:mediumslateblue;
}
nav{
  background-color:silver;
}
.navbar{
    
    font-family: 'Crimson Text', serif;
   
}



h1:hover{
  color: mediumslateblue;
  transform:rotateY(45deg);

}


h1  {
    list-style: none;
    float:right;
    padding-left: 20px;
    transition: 2s;
    color: black;
}

h1:hover  {
    transform: rotateY(360deg);
}

</style>