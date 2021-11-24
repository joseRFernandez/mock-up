<template>
  <div class="header-title">
    <div class="header-p-container">
      <p>Help us grant more wishes <span>like Audrey’s!</span></p>
    </div>
  </div>
  <div class="header-conditional-form-white-background"></div>
</template>

<script>
export default {
  data() {
    return {
      desktop: false,
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
.header-title {
  position: absolute;
  top: 70px;
  left: 0px;
  width: 375px;
  height: 129px;
  background: #ffc700 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;
}
.header-p-container {
  padding: 31px 12px 22px;
}
p {
  text-align: center;
  font-weight: 500;
  font-size: 32px;
  font-family: omnes;
  letter-spacing: 0px;
  opacity: 1;
  margin: 0;
}
span {
  color: #b33cc8;
}
@media screen and (min-width: 376px) {
  .header-title {
    width: 768px;
    height: 84px;
  }
  .header-p-container {
    padding: 20px 16px 19px;
  }
}
@media screen and (min-width: 769px) {
  .header-title {
    position: absolute;
    top: 99px;
    left: 134px;
    width: 384px;
    height: 76px;
    text-align: center;
    font: normal normal medium 32px/36px Omnes;
    letter-spacing: 0px;
    opacity: 1;
  }
  .header-p-container {
    position: absolute;
    top: -20px;
  }

  .header-conditional-form-white-background {
    position: absolute;
    top: 208px;
    left: 115px;
    width: 423px;
    height: 1019px;
    background: #ffffff 0% 0% no-repeat padding-box;
    border-radius: 10px;
    opacity: 1;
  }
}
</style>
