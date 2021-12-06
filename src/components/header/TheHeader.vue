<template>
  <!-- this below is the yellow input form container - unlock when ready-->
  <HeaderDesktopImage v-if="desktop" />
  <div class="header-mobile-wrapper">
    <HeaderTitle />
    <!-- <HeaderImageMobile v-if="!desktop" /> -->
  </div>
</template>

<script>
import HeaderTitle from './HeaderTitle.vue';
// import HeaderImageMobile from './HeaderImageMobile.vue';
// import HeaderDesktopImage from './HeaderDesktopImage.vue';

export default {
  components: {
    HeaderTitle,
    // HeaderImageMobile,
    // HeaderDesktopImage,
  },

  data() {
    return {
      desktop: false,
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
.header-mobile-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffc700 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;
}
@media screen and (min-width: 768px) {
  .header-title-container {
    width: 100%;
    height: 84px;
  }
}
</style>
