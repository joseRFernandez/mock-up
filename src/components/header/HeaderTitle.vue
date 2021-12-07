<template>
  <div class="header-title-wrapper">
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
.header-title-wrapper {
  width: 100%;
  height: 129px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffc700 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;
}
.header-p-container {
  width: 94%;
}
p {
  text-align: center;
  font-weight: 500;
  font-size: 32px;
  font-family: omnes;

}
span {
  color: #b33cc8;
}
@media screen and (min-width: 768px) {
  .header-title-wrapper {
    height: 84px;
  }
}
@media screen and (min-width: 1366px) {
  .header-title {
    position: absolute;
    top: 109px;
    left: 134px;
    width: 384px;
    height: 76px;
    text-align: center;
    font: normal normal lighter 32px/36px Omnes;
    letter-spacing: 0px;
    box-shadow: none;
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
