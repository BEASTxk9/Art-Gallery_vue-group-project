<template>
  <div class="painting"> </div>
  <h2>please work</h2>
  <div v-if="Many">
     <p> {{ Many.id }}</p>
     <img :src="Many.img_url">

 </div>
 <div v-else>
Please Try Again Later...
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