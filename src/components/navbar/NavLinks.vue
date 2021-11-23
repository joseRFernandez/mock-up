<template>
  <span v-if="desktop" class="nav-link-1">HOW IT WORKS</span>
  <span v-if="desktop" class="nav-link-2">GET A CARD</span>
  <span v-if="desktop" class="nav-link-3">GIVING BACK</span>
  <span v-if="desktop" class="nav-link-icon-1"></span>
  <span v-if="desktop" class="nav-link-4">MORE</span>

  <span v-if="desktop" class="nav-link-icon-2"></span>
</template>

<script>
export default {
  data() {
    return {
      desktop: null,
    };
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
.nav-link-1 {
  position: absolute;
  top: 26px;
  left: 809px;
  width: 145px;
  height: 29px;
  text-align: center;
  font: normal normal bold 14px/17px Lato;
  letter-spacing: 0px;
  color: #262626;
  opacity: 1;
}
.nav-link-2 {
  position: absolute;
  top: 26px;
  left: 926px;
  width: 145px;
  height: 29px;
  text-align: center;
  font: normal normal bold 14px/17px Lato;
  letter-spacing: 0px;
  color: #262626;
  opacity: 1;
}
.nav-link-3 {
  position: absolute;
  top: 26px;
  left: 1059px;
  width: 100px;
  height: 29px;
  text-align: center;
  font: normal normal bold 14px/17px Lato;
  letter-spacing: 0px;
  color: #262626;
  opacity: 1;
}
.nav-link-4 {
  position: absolute;
  top: 26px;
  left: 1197px;
  width: 86px;
  height: 29px;
  text-align: left;
  font: normal normal bold 14px/17px Lato;
  letter-spacing: 0px;
  color: #262626;
  opacity: 1;
}
.nav-link-icon-1 {
  position: absolute;
  top: 32px;
  left: 1162px;
  width: 12px;
  height: 7px;
  background: transparent url('/assets/nav-bar-icon.png') 0% 0% no-repeat
    padding-box;
  opacity: 1;
}
.nav-link-icon-2 {
  position: absolute;
  top: 32px;
  left: 1246px;
  width: 12px;
  height: 7px;
  background: transparent url('/assets/nav-bar-icon.png') 0% 0% no-repeat
    padding-box;
  opacity: 1;
}
</style>
