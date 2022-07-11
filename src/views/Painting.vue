<template>
  <div v-if="Many" class="painting">
     <div  class="card p-3 m-3 mx-auto" style="width:30rem;">
  <img :src="Many.img_url" class="card-img-top" alt="...">
  <div class="card-body">
     <p> {{ Many.id }}</p>
     <h1 class="card-title">{{Many.title}}</h1>
     <ul class="list-group list-group-flush">
        <li class="list-group-item">Artist name: {{Many.artist}}</li>
        <li class="list-group-item">Description: {{}}</li>
        <li class="list-group-item">Dimensions: {{Many.size}}</li>
        <li class="list-group-item">Medium {{}}</li>
        <li class="list-group-item">Price: {{Many.price}}</li>
     </ul>
        <div class="card-body">
            <button>Buy now</button>
        </div>
        
 </div>
 </div>
  </div>
 
 <div v-else>

 </div>
  
</template>
<script>
    export default{
        props : ['id',],
        data(){
            return {
                Many: null
            }
        },
        mounted(){
            fetch(' http://localhost:3000/Many/' +this.id)
            .then(res => res.json())
            .then(data => this.Many = data)
        }
    }
</script>

<style>

</style>