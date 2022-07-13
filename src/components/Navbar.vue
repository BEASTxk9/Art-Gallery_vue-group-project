<template>
    <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/About">About</router-link> |
    <router-link to="/Shop">Gallery</router-link> |
    <router-link to="/Contact">Contact</router-link> |
    <router-link to="/Admin">Admin</router-link> 
  </nav>
</template>

<script>

export default {
}
</script>

<style>
    nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  outline: none;
  list-style: none;
}

nav a.router-link-exact-active {
  color: rgb(34, 114, 206);
}
</style>