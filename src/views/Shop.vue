<template>
  <div>
    <h2>Galleria</h2>
    <div v-if="Many">
      <div class="container">
        <div class="row">
          <Card></Card>
        </div>

      </div>

    </div>

  </div>

</template>

<script>
import Card from '@/components/card.vue';
export default {
  data() {
    return {
      Many: []
    };
  },
  components: { Card }
};

</script>

<style>
</style>