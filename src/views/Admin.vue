<template>
  <h1>Admin</h1>
 <div v-if="Many">

<table class="container table-bordered text-start">
<thead>
  <th class="col-md-1">id</th>
  <th class="col-md-3">Title</th>
  <th>hi</th>
  <th>ahhh</th>
</thead>
<div v-for="single of Many" :key="single.id">
<tbody>
  <td class="col-md-3">
     <img :src="single.img_url" class="card-img-top" alt="..." width="50rem" />
  </td>
  <td class="col-md-1">{{single.id}}</td>
  <td class="col-md-3">{{single.title}}</td>
</tbody>
</div>
</table>



      </div>
 
  <div v-else>
    Loading...
  </div>

</template>

<script>
export default {
  data() {
    return {
        Many: []
    };
  },
  mounted() {
    fetch("http://localhost:3000/Many")
      .then((res) => res.json())
      .then((data) => (this.Many = data));
  },
};
</script>

<style>
.container{
  box-shadow: 10px 10px 24px rgba(0, 0, 0, 0.4);
}

#gap{
  border-right: 1px solid  rgb(126, 126, 126);
}

#r1{
  border-bottom: 1px solid rgb(126, 126, 126);
}

#r2{
   border-bottom: 1px solid rgb(126, 126, 126);
}
</style>