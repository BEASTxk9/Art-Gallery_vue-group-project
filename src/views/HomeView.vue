<template>
  <div id="img1">
    <div class="container container-fluid">
      <div class="home">
      
        <div class="row">
          <div class="col-6">
            <h3>GALLERIA <br> D'ARTE MODERNA</h3>
          </div>
          <div class="col-7">
            <router-link to="/shop">
              <button>Browse</button>
            </router-link>
            <router-link to="/about">
              <button>Read More</button>
            </router-link>
          </div>
        </div>
        <!-- <img src="https://media.architecturaldigest.com/photos/5900c7e70638dd3b70018b2f/master/w_1920%2Cc_limit/blanton-art-museum.jpg" alt=""> -->
      </div>
    </div>

  </div>
</template>

<script>


export default {
  name: 'HomeView',
  components: {

  }
}
</script>

<style scoped>
#img1 {
  background: linear-gradient(rgba(254, 250, 250, 0.7), rgba(0, 0, 0, 0.6)), url("https://media.architecturaldigest.com/photos/5900c7e70638dd3b70018b2f/master/w_1920%2Cc_limit/blanton-art-museum.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
  object-fit: cover;
  overflow-x: hidden;
  overflow-y: hidden;


}



.row {
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 210px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;


}

button {
  margin: 10px;
  font-size: 20px;
  width: 120px;
  border-radius: 5px;
  font-family: 'Crimson Text', serif;
  background-color: transparent;
  color: white;
  border-color:white;
  outline: none;
}

button:hover{
   background-color: darkslateblue;
}

h3 {
  font-size: 40px;
  font-weight: bold;
  font-family: 'Crimson Text', serif;
  color: black
  
}

@import url('https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@1,600&display=swap');
</style>
