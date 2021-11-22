<template>
  <div class="navbar-wrapper">
    <BuzzRxLogo class="navbar-buzz-logo" />
    <HamburgerBtn />
  </div>
</template>

<script>
import BuzzRxLogo from './BuzzRxLogo.vue';
import HamburgerBtn from './HamburgerBtn.vue';

export default {
  components: {
    BuzzRxLogo,
    HamburgerBtn,
  },
};
</script>

<style scoped>
.navbar-wrapper {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 375px;
  height: 70px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;
}
.navbar-buzz-logo {
  position: absolute;
  top: 16px;
  left: 8px;
  width: 154px;
  height: 37px;
  opacity: 1;
}
</style>
