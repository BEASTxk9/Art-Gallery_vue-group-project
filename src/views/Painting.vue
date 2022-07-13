<template>
  <div class="painting"> </div>
  <br>
  <div class="container container-fluid" v-if="Many">
     <div class="card mx-auto" style="width:300px;">
       <!-- <p> {{ Many.id }}</p> -->
       <img :src="Many.img_url">
       <br>
       <ul class="card-body" style="list-style: none">
          <li>Artist: {{Many.artist}}</li>
          <li>Description: Insert text here</li>
          <li>Dimensions: {{Many.size}}</li>
          <li>Medium: {{}}</li>
          <li>Price: {{Many.price}}</li>
       </ul>
       <button>Purchase</button>
     </div>

 </div>
 <div v-else>

 </div>
  
</template>
<script>
    export default{
        props : ['id'],
        data(){
            return {
                Many: null
            }
        },
        mounted(){
            fetch('http://localhost:3000/Many/' +this.id)
            .then(res => res.json())
            .then(data => this.Many = data)
        }
    }
</script>