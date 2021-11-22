<template>
  <div class="header-title-container">
    <HeaderTitle />
  </div>
  <HeaderImageMobile />
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
.header-title-container {
  position: absolute;
  top: 70px;
  left: 0px;
  width: 375px;
  height: 129px;
  background: #ffc700 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;
}
</style>
