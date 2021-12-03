<template>
  <!-- this below is the yeloow input form container -->
  <div v-if="desktop" class="header-conditional-desktop-input-container"></div>
  <HeaderTitle />
  <HeaderImageMobile />
</template>

<script>
import HeaderTitle from './HeaderTitle.vue';
import HeaderImageMobile from './HeaderImageMobile.vue';

export default {
  components: {
    HeaderTitle,
    HeaderImageMobile,
  },

  data() {
    return {
      desktop: false,
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
.header-title-container {
  position: absolute;
  top: 70px;
  left: 0px;
  /* width: 375px; */
  width: 100%;

  height: 129px;
  background: #ffc700 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;
}
@media screen and (min-width: 376px) {
  .header-title-container {
    /* width: 768px; */
    height: 84px;
  }
}
@media screen and (min-width: 769px) {
  .header-conditional-desktop-input-container {
    position: absolute;
    top: 70px;
    left: 72px;
    width: 498px;
    height: 1200px;
    background: #ffc700 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    opacity: 1;
  }
}
</style>
