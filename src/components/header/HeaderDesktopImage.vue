<template>
  <div class="header-desktop-image-wrapper">
    <div class="header-desktop-image-container">
      <div class="header-desktop-image"></div>
    </div>
    <div class="header-desktop-quote">
      <p class="header-desktop-quote-text">
        I wish to star in a fashion shoot Audrey, 12 nervous system disorder
      </p>
    </div>
  </div>
</template>

<style scoped>
.header-desktop-image-wrapper {
  width: 100%;
  height: 1057px;
  overflow: hidden;
}
.header-desktop-image-container {
  height: 1057px;
  width: 100%;
}
.header-desktop-image {
  background: transparent url('/assets/mobile-header/IMG_0049/IMG_0049.png') 0%
    0% no-repeat padding-box;
  opacity: 1;
  height: 1057px;
  background-size: cover;
  width: 105%;
  position: relative;
  left: -2.4%;
}

.header-desktop-quote {
  height: 71px;
  text-align: right;
  letter-spacing: 0px;
  color: #ffffff;
  text-shadow: 0px 3px 6px #00000029;
  opacity: 1;
}
.header-desktop-quote-text {
  font: italic normal normal 12px/14px Lato;
}
@media screen and (min-width: 2600px) {
  .header-desktop-image {
    background: transparent
      url('/assets/mobile-header/IMG_0049/IMG_0049@2x.png') 0% 0% no-repeat
      padding-box;
  }
}
</style>
