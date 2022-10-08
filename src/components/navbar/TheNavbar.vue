<template>
  <div class="navbar-wrapper">
    <div class="navbar-logo-and-content-container">
      <BuzzRxLogo />
      <HamburgerBtn v-if="!desktop" />
      <NavLinks v-if="desktop" />
    </div>
  </div>
</template>

<script>
import BuzzRxLogo from './BuzzRxLogo.vue';
import HamburgerBtn from './HamburgerBtn.vue';
import NavLinks from './NavLinks.vue';
import Resize from '../../mixins/resize';

export default {
  components: {
    BuzzRxLogo,
    HamburgerBtn,
    NavLinks,
  },
  mixins: [Resize],
};
</script>

<style scoped>
.navbar-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;
}
.navbar-logo-and-content-container {
  display: flex;
  width: 96%;
  justify-content: space-between;
}

@media screen and (min-width: 1366px) {
  .navbar-wrapper {
    height: 70px;
  }
  .navbar-logo-and-content-container {
    display: flex;
    width: 82%;
  }
}
</style>
