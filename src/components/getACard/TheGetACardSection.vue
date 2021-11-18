<template>
  <div class="getACardContainer">
    <GetACardText />
    <BuzzRxCard />
    <BadgeList />
  </div>
</template>

<script>
import GetACardText from './GetACardText.vue';
import BuzzRxCard from './BuzzRxCard.vue';
import BadgeList from './BadgeList.vue';

export default {
  components: {
    GetACardText,
    BuzzRxCard,
    BadgeList,
  },
};
</script>

<style scoped>
.getACardContainer {
  height: 500px;
}
</style>
