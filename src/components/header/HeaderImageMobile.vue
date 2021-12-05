<template>
  <section class="header-mobile-image-container">
    <div class="header-mobile-image"></div>
  </section>
</template>
<script>
export default {
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
.header-mobile-image-container {
  width: 100%;
}
.header-mobile-image {
  position: absolute;
  top: 199px;
  left: 0px;
  min-width: 100%;
  height: 155px;
  background: transparent url('/assets/mobile-header/mobile-header.png') 0% 0%
    no-repeat padding-box;
    background-size: cover;
}
@media screen and (min-width: 768px) {
  .header-mobile-image {
    position: absolute;
    top: 154px;
    left: 0px;
    height: 334px;
    background: transparent url('/assets/tablet-header/tablet-header.png') 0% 0%
      no-repeat padding-box;
    background-size: cover;
  }
}
@media screen and (min-width: 1366px) {
  .header-mobile-image {
    position: absolute;
    top: 70px;
    left: 569px;
    width: 1432px;
    height: 1057px;
    background: transparent url('/assets/mobile-header/mobile-header@2x.png') 0%
      0% no-repeat padding-box;
    background-size: cover;
    opacity: 1;
  }
  .conditional-sliver {
    position: absolute;
    top: 70px;
    width: 73px;
    height: 1057pxpx;
    background: transparent 0% 0% no-repeat padding-box;
    object-fit: cover;
  }
  .conditional-sliver-image {
    width: 73px;
    height: 1057px;
  }
  .conditional {
    position: absolute;
    top: 70px;
    left: 569px;
    width: 1432px;
    height: 1057px;
    background: transparent 0% 0% no-repeat padding-box;
  }
}
</style>
