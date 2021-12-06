<template>
  <!-- this below is the yellow input form container - unlock when ready-->
  <HeaderDesktopImage v-if="desktop" />
  <div class="header-mobile-wrapper">
    <HeaderTitle />
  </div>
  <HeaderImageMobile v-if="!desktop" />
</template>

<script>
import HeaderTitle from './HeaderTitle.vue';
import HeaderImageMobile from './HeaderImageMobile.vue';
// import HeaderDesktopImage from './HeaderDesktopImage.vue';

export default {
  components: {
    HeaderTitle,
    HeaderImageMobile,
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

@media screen and (min-width: 768px) {
  .header-title-container {
    width: 100%;
    height: 84px;
  }
}
</style>
