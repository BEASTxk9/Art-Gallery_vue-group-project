<template>
   <div>
    <h2>Gallery</h2>
    <div id="shopcard" class="container">
        <div v-if="Many">
        <div class="row m-sm-0">
            <Card></Card>
        </div>
        </div>
        <div v-else>
            Loading...
        </div>
    </div>
    </div>
</template>

<script>
import Card from '@/components/card.vue'
export default {
    data() {
        return {

            Many: [
                
            ]
        };
    },
    components:{ Card }
};
</script>

<style scoped>

</style>
