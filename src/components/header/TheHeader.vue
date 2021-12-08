<template>
  <section class="header-desktop-wrapper" v-if="desktop">
    <div class="header-desktop-image-container"></div>
  </section>
  <div class="header-mobile-wrapper" v-else>
    <HeaderTitle />
    <HeaderImageMobile />
  </div>
</template>

<script>
import HeaderTitle from './HeaderTitle.vue';
import HeaderImageMobile from './HeaderImageMobile.vue';
// import HeaderQuote from './HeaderQuote.vue';
// import HeaderDeskTopTitle from './HeaderDeskTopTitle.vue'

export default {
  components: {
    HeaderTitle,
    HeaderImageMobile,
    // HeaderQuote,
    // HeaderDeskTopTitle
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
@media screen and (min-width: 1366px) {
  .header-desktop-wrapper {
    display: flex;
    flex-direction: row;
    height: 1200px;
    width: 100%;
  }
  .header-desktop-image-container {
    background: transparent url('/assets/mobile-header/IMG_0049/IMG_0049.png')
      0% 0% no-repeat;
    width: 108%;
    height: 100%;
    opacity: 1;
    background-size: cover;
    margin-left: -2.5%;
    box-sizing: border-box;
  }
}
@media screen and (min-width:1500px) {
  .header-desktop-image-container {
     background: transparent
      url('/assets/mobile-header/IMG_0049/IMG_0049.png') no-repeat top/80% padding-box;
  }
}
@media screen and (min-width: 2000px) {
  .header-desktop-image-container {
    background: transparent
      url('/assets/mobile-header/IMG_0049/IMG_0049@2x.png') no-repeat top/80% padding-box;
  }
}
</style>
