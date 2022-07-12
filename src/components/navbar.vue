<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <h1>MOSHi</h1>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
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

<style>
button {
  font-size: 20px;
  width: 120px;
  border-radius: 5px;
   font-family: 'Crimson Text', serif;
   background-color: transparent;
}

button:hover{
   background-color: grey;
}

.navbar{
    font-family: 'Crimson Text', serif;
}
</style>