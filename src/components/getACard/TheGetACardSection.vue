<template>
  <div class="getACardContainer">
    <BuzzRxCard />
  </div>
</template>

<script>
import BuzzRxCard from './BuzzRxCard.vue';
export default {
  components: {
    BuzzRxCard,
  },
};
</script>

<style scoped>
.getACardContainer {
  height: 500px;
}
</style>
