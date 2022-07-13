<template>
  <h1>Admin</h1>
 <div v-if="Many">

<table class="container">
<thead>
  <th>Admin</th>
</thead>
<div v-for="single of Many" :key="single.id">
<tbody>
  <td>{{single.title}}</td>
</tbody>
</div>
</table>


    <!-- <div class="container">
     
      <div class="row">
          <div class="col-md-3">
           <p>Admin</p>
          </div>

<div class="col-md-9">
  <p>hi</p>
  
</div>

        </div>

  
<div class="col-md-3">
<p>{{single.title}}</p>
</div>

<div class="col-md-9">
<p>{{single.id}}</p>
</div>
</div> -->
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