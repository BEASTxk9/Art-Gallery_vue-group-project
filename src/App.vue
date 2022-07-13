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
    <Footer />
</template>
<script>
 import navbar from "@/components/navbar.vue";
 import Footer from "./components/footer.vue";

 export default{
  components:{
    navbar,
    Footer
  },
 }
</script>
<style>
#app {
  font-family: 'Crimson Text', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: black;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}


nav a.router-link-exact-active {
  color:white;
  background-color:mediumslateblue;

}
</style>