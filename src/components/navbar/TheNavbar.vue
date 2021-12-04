<template>
  <div class="navbar-wrapper">
    <BuzzRxLogo class="navbar-buzz-logo" />
    <HamburgerBtn v-if="!desktop" />
    <NavLinks v-if="desktop" />
  </div>
</template>

<script>
import BuzzRxLogo from './BuzzRxLogo.vue';
import HamburgerBtn from './HamburgerBtn.vue';
import NavLinks from './NavLinks.vue';

export default {
  components: {
    BuzzRxLogo,
    HamburgerBtn,
    NavLinks,
  },
  data() {
    return {
      desktop: '',
    };
  },
  beforeMount() {
    if (document.documentElement.clientWidth > 768) {
      this.desktop = true;
    } else {
      this.desktop = false;
    }
  },
  mounted() {
    window.addEventListener('resize', this.getDimensions);
  },
  unmounted() {
    window.removeEventListener('resize', this.getDimensions);
  },
  methods: {
    getDimensions() {
      this.width = document.documentElement.clientWidth;
      if (this.width > 768) {
        this.desktop = true;
      } else {
        this.desktop = false;
      }
    },
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
@media screen and (min-width: 769px) {
  .navbar-wrapper {
    width: 100%;

    height: 70px;
  }
  .navbar-buzz-logo {
    width: 159px;
    height: 38px;
    left: 90px;
  }
}
</style>
