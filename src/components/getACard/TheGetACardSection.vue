<template>
  <section class="GAC-section-wrapper">
    <GetACardText />
    <BuzzRxCard />
    <BadgeList />
  </section>
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
.GAC-section-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  height: 526px;
}
</style>
