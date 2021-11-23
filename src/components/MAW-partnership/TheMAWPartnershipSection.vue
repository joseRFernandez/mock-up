<template>
  <div class="maw-partnership-wrapper">
    <MAWHeader />
    <MAWText />
    <MAWFigures />
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
@media screen and (min-width: 376px) {
  .maw-partnership-wrapper {
    position: absolute;
    top: 2409px;
    left: 0px;
    width: 768px;
    height: 341px;
    opacity: 1;
    background-color: #ffc60b;
  }
}
</style>
