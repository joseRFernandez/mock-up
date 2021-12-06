<template>
  <div class="maw-partnership-wrapper">
    <MAWHeader />
    <div class="maw-figures-container">
      <MAWText />
      <MAWFigures />
    </div>
  </div>
</template>

<script>
import MAWHeader from './MAWHeader.vue';
import MAWText from './MAWText.vue';
import MAWFigures from './MAWFigures.vue';

export default {
  components: {
    MAWHeader,
    MAWText,
    MAWFigures,
  },
};
</script>

<style scoped>
.maw-partnership-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  /* height: 644px; */
  opacity: 1;
  background-color: #ffc60b;
  margin-top: 60px;
}
.maw-figures-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
@media screen and (min-width: 768px) {
  .maw-partnership-wrapper {
    position: absolute;
    top: 2409px;
    left: 0px;
    width: 768px;
    height: 341px;
    opacity: 1;
  }
}
@media screen and (min-width: 1366px) {
  .maw-partnership-wrapper {
    top: 2349px;
    left: 0px;
    width: 1366px;
    height: 330px;
  }
}
</style>
