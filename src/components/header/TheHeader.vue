<template>
  <header class="main-header">
    <HeaderTitle />
    <HeaderImageMobile />
  </header>
</template>

<script>
import HeaderTitle from './HeaderTitle.vue';
import HeaderImageMobile from './HeaderImageMobile.vue';

export default {
  components: {
    HeaderTitle,
    HeaderImageMobile,
  },
};
</script>

<style scoped>
.main-header {
  width: 100%;
  height: 129px;
}
@media screen and (max-width: 768px) {
  .main-header {
    height: 418px;
    width: 100%;
  }
}
</style>
