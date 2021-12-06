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
    if (document.documentElement.clientWidth >= 1366) {
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
      if (this.width >= 1366) {
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
  width: 100%;
  height: 70px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;
}

@media screen and (min-width: 1366px) {
  .navbar-wrapper {
    height: 70px;
  }
  .navbar-buzz-logo {
    width: 159px;
    height: 38px;
    left: 90px;
  }

}
</style>
