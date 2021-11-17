<template>
  <div class="getACardContainer">
    <GetACardText />
    <BuzzRxCard />
    <OptionButton />
  </div>
</template>

<script>
import GetACardText from './GetACardText.vue';
import BuzzRxCard from './BuzzRxCard.vue';
import OptionButton from './OptionButton.vue';

export default {
  components: {
    GetACardText,
    BuzzRxCard,
    OptionButton,
  },
};
</script>

<style scoped>
.getACardContainer {
  height: 500px;
}
</style>
