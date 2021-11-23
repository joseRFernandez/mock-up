<template>
  <div class="header-mobile-image"></div>
</template>

<style scoped>
.header-mobile-image {
  position: absolute;
  top: 199px;
  left: 0px;
  width: 375px;
  height: 155px;
  background: transparent url('/assets/mobile-header/mobile-header.png') 0% 0%
    no-repeat padding-box;
  opacity: 1;
}
@media screen and (min-width: 376px) {
  .header-mobile-image {
    position: absolute;
    top: 154px;
    left: 0px;
    width: 768px;
    height: 334px;
    background: transparent url('/assets/mobile-header/mobile-header.png') 0% 0%
      no-repeat padding-box;
    background-size: cover;
  }
}
@media screen and (min-width: 769px) {
  .header-mobile-image {
    top: 70px;
    left: -32.85546875px;
    width: 1432px;
    height: 1057px;
    background: transparent url('/assets/mobile-header/mobile-header@2x.png') 0%
      0% no-repeat padding-box;
      background-size: cover;
    opacity: 1;
  }
}
</style>
