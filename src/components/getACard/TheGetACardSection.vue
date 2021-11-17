<template>
  <div class="getACardContainer">
    <GetACardText />
    <BuzzRxCard />
  </div>
</template>

<script>
import GetACardText from './GetACardText.vue';
import BuzzRxCard from './BuzzRxCard.vue';

export default {
  components: {
    GetACardText,
    BuzzRxCard,
  },
};
</script>

<style scoped>
.getACardContainer {
  height: 500px;
}
</style>
