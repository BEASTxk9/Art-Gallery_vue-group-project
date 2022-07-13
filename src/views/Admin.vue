<template>
    <h2>Admin</h2>
    <div id="admin" class="container">
        <div v-if="artGallery">
          <div>
            <AdminTable></AdminTable>
          </div>
        </div>
    </div>

</template>

<script>
import AdminTable from '@/components/admintable.vue'
export default {
    data() {
        return {
          artGallery: this.$store.state.art
        };
    },
    components:{ AdminTable }
};


</script>

<style scoped>
    
footer{
    bottom: 0;
    position: relative;
    padding-bottom: 20px;
    margin-top: 200px;
}
</style>