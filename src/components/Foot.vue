<template>
  <footer class="container">
    <div class="icons">
      <a href=""  class="bi bi-envelope-fill" aria-label="Envelope"></a>
      <a href=""  class="bi bi-instagram" aria-label="Instagram"></a>
      <a href=""  class="bi bi-twitter" aria-label="Twitter"></a>
      <a href=""  class="bi bi-facebook"  aria-label="Facebook"></a>
    </div>
    <div>
      <div class="text-center py-2">© 2022 Copyright: Made with <a href=""><i  id="heart" class="bi bi-balloon-heart-fill"></i></a>by Monique,Shane,Ikhlaas,Yaseen
    </div>
    </div>
    
    <div class="footer-links">
      <router-link to="/">Home</router-link> |
      <router-link to="/About">About Us</router-link> |
      <router-link to="/Contact">Contact Us</router-link>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped>

footer{
    bottom: 0;
    position: relative;
    padding-bottom: 20px;
}
.icons a{
  padding: 10px;
}
.footer-links{
  color: black;
}
</style>