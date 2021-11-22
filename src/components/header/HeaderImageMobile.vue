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
</style>
