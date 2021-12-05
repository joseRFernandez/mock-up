<template>
  <div class="header-desktop-image"></div>
  <div class="header-desktop-quote">
    <p class="header-desktop-quote-text">
      I wish to star in a fashion shoot Audrey, 12 nervous system disorder
    </p>
  </div>
</template>

<style scoped>
.header-desktop-image {
  position: absolute;
  top: 70px;
  /* left: -32.85546875px; */
  left: -38px;
  right: -32.85546875px;
  height: 1057px;
  background: transparent url('/assets/mobile-header/IMG_0049/IMG_0049.png') 0%
    0% no-repeat padding-box;
  background-size: cover;
  opacity: 1;
}

.header-desktop-quote {
  position: absolute;
  top: 678px;
  left: 1173px;
  width: 94px;
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
@media screen and (min-width: 768px) {
  .header-desktop-image {
    background: transparent
      url('/assets/mobile-header/IMG_0049/IMG_0049.png') 0% 0% no-repeat
      padding-box;
  }
}
</style>
