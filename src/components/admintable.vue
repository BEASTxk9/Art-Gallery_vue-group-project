<template>
  <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Title</th>
      <th scope="col">Image</th>
      <th scope="col">Artist</th>
      <th scope="col">Size</th>
      <th scope="col">Price</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="admin of Many" :key="admin.id">
      <th scope="row">{{admin.id}}</th>
      <td>{{admin.title}}</td>
      <img :src="admin.img_url" class="card-img-top" alt="..."/>
      <td>{{admin.artist}}</td>
      <td>{{admin.size}}cm </td>
      <td>${{admin.price}}.00</td>
      <td>
        <button class="btn btn-primary">Edit</button>
        <button class="btn btn-danger">Delete</button>
      </td>
    </tr>
  </tbody>
 </table>
</template>

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
}
</script>

<style scoped>
img{
    width: 200px;
    height: 200px;
}

/* table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
} */
td button{
    width: 100%;
    display: flex;
    margin: 20px;
    justify-content: center;
}
</style>