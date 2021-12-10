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
  opacity: 1;
  background-color: #ffc60b;
  margin-top: 60px;
  height: 644px;
}
.maw-figures-container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  height: 584px;
}
@media screen and (min-width: 768px) {
  .maw-partnership-wrapper {
    margin-top: 0;
    height: 341px;
    opacity: 1;
  }
  .maw-figures-container {
    width: 100%;
    flex-direction: row;
    height: 306px;
  }
}
@media screen and (min-width: 1366px) {
}
</style>
