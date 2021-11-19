<template>
  <div class="navbar">
    <BuzzRxLogo />
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
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 38px;
  opacity: 1;
  padding: 15px 0 17px 8px;
}
</style>
