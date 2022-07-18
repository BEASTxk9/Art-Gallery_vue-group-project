
<template>
<!-- <div class="container"> -->
            <div id="card" class="card p-3 m-3 mx-auto" v-for="single of Many" :key="single.id" style="width:360px;">
        <div class="frame">
            <img :src="single.img_url" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
            <h5 class="card-title"></h5>
            <p class="card-text">{{ single.title }}</p>
            <router-link :to="{ name: 'painting', params: { id: single.id } }">
                <button>View Details</button>
            </router-link>
        </div>
    </div>
<!-- </div> -->
</template>

<script>
export default {
    data() {
        return {

            Many: [

            ]
        };
    },
    mounted() {
        fetch("http://localhost:3000/Many")
            .then((res) => res.json())
            .then((data) => (this.Many = data));
    },

}
</script>


<style scoped>
.card{
    flex-wrap: wrap;
    align-content: space-around;
    padding-top: 20px;
    border:none;
}
button{
  color:black;
  border: 1px solid black;
  border-radius: 10px;
  width: 100px;
}
button:hover{
   background-color: darkslateblue;
}
   img{
    top: 0;
    object-fit: cover;
    position: relative;
    object-position: 0 7px;
    margin: auto;
    align-items: center;
    width: 200px;
    height: 200px;
}

.card-img, .card-img-top {
    border-top-left-radius: calc(0.25rem - 1px);
    border-top-right-radius: calc(0.25rem - 1px);
    width: 100% !important;
    aspect-ratio: 1;
    height: 100% !important;
}

.frame {
  background-color:silver;
  border:solid 5vmin #eee;
  border-bottom-color:#fff;
  border-left-color:#eee;
  border-radius:2px;
  border-right-color:#eee;
  border-top-color:#ddd;
  box-shadow:0 0 5px 0 rgba(0,0,0,.25) inset, 0 5px 10px 5px rgba(0,0,0,.25);
  box-sizing:border-box;
  display:inline-block;
  /* margin:10vh 10vw; */
  height:50vh;
  width: 50vh;
  padding:8vmin;
  position:relative;
  text-align:center;
}
    @media only screen and (min-width:320px)  and (max-width: 321px) {

}
</style>
