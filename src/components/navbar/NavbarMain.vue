<template>
  <navbar>
  <BuzzRxLogo />
  <HamburgerBtn />
  </navbar>
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
navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0px;
  left: 0px;
  /* width: 375px; */
  height: 70px;
  opacity: 1;
}
</style>
