<template>
  <div class="header-mobile-image"></div>
</template>

<style scoped>
.header-mobile-image {
  width: 100%;
  height: 155px;
  background: transparent url('/assets/mobile-header/mobile-header.png') 0% 0%
    no-repeat padding-box;
  opacity: 1;
}
@media screen and (max-width: 768px) {
  .header-mobile-image {
    width: 768px;
    height: 334px;
    background: transparent url('/assets/mobile-header/mobile-header@2x.png') 0%
      0% no-repeat padding-box;
      background-size: cover;
  }
}
</style>
