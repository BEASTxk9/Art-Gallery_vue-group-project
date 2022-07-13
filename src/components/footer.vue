<template>
  <footer class=" foot">
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
    <div class="">
      <router-link to="/"><button>Home</button></router-link> |
      <router-link to="/About"><button>About</button></router-link> |
      <router-link to="/Contact"><button>Contact Us</button></router-link>
    </div>
  </footer>
</template>
<script>
export default {
}
</script>
<style scoped>
button{
   font-size: 20px;
  width: 120px;
  border-radius: 5px;
   font-family: 'Crimson Text', serif;
   background-color: transparent;
}


footer{
  background-color:silver;
  width: 100%;
  color:grey;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
}
#heart{
color: mediumslateblue;
padding: 0;
}

.bi{
  color:mediumslateblue;
  padding: 20px;
  font-size: 30px;
  
  
}
.foot{
  padding: 20px;
}

</style>