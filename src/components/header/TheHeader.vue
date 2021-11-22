<template>
  <div class="main-header">
    <HeaderTitle />
    <HeaderImageMobile />
  </div>
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
  width: 375px;
  height: 284px;
}
@media screen and (min-width: 768px) {
  .main-header {
    height: 418px;
    width: 100%;
  }
}
</style>
