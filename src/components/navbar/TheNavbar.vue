<template>
  <div class="navbar-container">
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
.navbar-container {
  display: fixed;
  height: 70px;
}
.navbar-buzz-logo {
  position: absolute;
  top: 16px;
  left: 8px;
  width: 154px;
  height: 37px;
  opacity: 1;
}

@media screen and (max-width: 768px) {
}
</style>
