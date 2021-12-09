<template>
  <!-- <img src="assets/ceo-picture.png" class="ceo-image" /> -->
  <div class="ceo-image"></div>
</template>
<style>
.ceo-image {
  background: transparent
      url('/assets/maw-ceo/maw-ceo.png') 0% 0% no-repeat
      padding-box;
  width: 88px;
  height: 88px;
  opacity: 1;
  border: 1px solid #FFFFFF;
  border-radius: 50%;
  background-position: 50%;
}
@media screen and (min-width: 768px) {
  .ceo-image {
    width: 88px;
    height: 88px;
    opacity: 1;
  }
}
@media screen and (min-width: 1366px) {
  .ceo-image {
    top: 225px;
    left: 558px;
  }
}
</style>
