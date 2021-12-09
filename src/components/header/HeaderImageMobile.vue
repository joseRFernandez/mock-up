<template>
  <div class="header-mobile-image"></div>
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
.header-mobile-image {
  width: 100%;
  height: 155px;
  background: transparent url('/assets/mobile-header/mobile-header.png') 0% 0%
    no-repeat padding-box;
  background-size: cover;
}
@media screen and (min-width: 500px) {
  .header-mobile-image {
    background: transparent url('/assets/mobile-header/mobile-header@2x.png') 0%
      0% no-repeat padding-box;
    background-size: contain;
    height: 310px;
    margin-bottom: -50px;
  }
}
@media screen and (min-width: 640px) {
  .header-mobile-image {
    margin-bottom: 0;
  }
}

@media screen and (min-width: 750px) {
  .header-mobile-image {
    background-size: cover;
  }
}
@media screen and (min-width: 768px) {
  .header-mobile-image {
    height: 334px;
    background: transparent url('/assets/tablet-header/tablet-header.png') 0% 0%
      no-repeat padding-box;
    background-size: cover;
  }
}

@media screen and (min-width:950px) {
  .header-mobile-image {
    background: transparent url('/assets/tablet-header/tablet-header@2x.png') 0% 0%
      no-repeat padding-box;
      background-position: 50% 100%;
      background-size: contain;
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
