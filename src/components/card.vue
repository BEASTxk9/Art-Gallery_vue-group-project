<template>
    <div class="card p-3 m-3 mx-auto" v-for="single of Many" :key="single.id" style="width:350px;">
        <img :src="single.img_url" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title"></h5>
            <p class="card-text">{{ single.title }}</p>
             <router-link :to="{name:'painting' , params: { id: single.id }}">
                <a href="#" class="btn btn-primary">View</a>
            </router-link>
        </div>
    </div>
</template>
+++++
<script>
export default {
    data() {
        return {

            Many: [
                
            ]
        };
    },
    mounted(){
        fetch(" http://localhost:3000/Many")
        .then((res) => res.json())
        .then((data) => (this.Many = data));
    },
};


</script>

<style scoped>
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
</style>