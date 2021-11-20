<template>
  <div class="navbar-container">
    <div class="logo.navbar">
      <BuzzRxLogo class="navbar-buzz-logo" />
    </div>
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
.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 38px;
  opacity: 1;
  padding: 15px 0 17px 8px;
}
.navbar-buzz-logo {
  width: 154.2px;
  height: 37.2px;
  background-position: 8.21px 15.62px;
}
.logo-navbar {
  width: 154px;
  height: 37px;
  background-position: 8.21px 15.62px;
  opacity: 1;
  margin-left: 8.21px;
}
</style>
