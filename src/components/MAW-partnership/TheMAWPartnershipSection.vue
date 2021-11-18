<template>
  <div class="MAW-container">
    <MAWHeader />
    <section>
      <MAWText />
    </section>
    <!-- <div>Number section coming soon</div> -->
  </div>
</template>

<script>
import MAWHeader from './MAWHeader.vue';
import MAWText from './MAWText.vue'
export default {
  components: {
    MAWHeader,
    MAWText
  },
};
</script>

<style scoped>
.MAW-container {
  height: 644px;
}
section {
  height: 584px;
  background-color: #ffc60b;
}
p {
  width: 327px;
  height: 307px;
  text-align: left;
  font: normal normal normal 16px/24px Lato;
  letter-spacing: 0px;
  color: #262626;
  opacity: 1;
  margin: 0 24px;
  padding-top: 27px;
}
</style>
