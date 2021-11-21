<template>
  <div class="MAW-container">
    <MAWHeader />
    <section>
      <MAWText />
      <MAWFigures />
    </section>
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
.MAW-container {
  height: 644px;
}
section {
  height: 584px;
  background-color: #ffc60b;
}
@media screen and (max-width: 768px) {
  .MAW-container {
    height: 34px;
  }
}
</style>
