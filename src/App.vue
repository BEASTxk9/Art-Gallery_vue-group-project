<template>
  <navbar></navbar>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/shop">Gallery</router-link> |
    <router-link to="/contact">Contact Us</router-link> |
    <router-link to="/admin">Admin</router-link> 

  </nav> -->
  <router-view></router-view>
</template>
<script>
 import navbar from "./components/navbar.vue";

 export default{
  components:{
    navbar
  },
 }
</script>
<style>
#app {
  font-family:Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>