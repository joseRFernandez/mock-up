<template>
  <div class="checkbox"></div>
  <div class="agree-text-container">
    <p>
      YES, I would like a BuzzRx Representative to visit my pharmacy and
      occasionally bring FREE
    </p>
  </div>
</template>

<style scoped>
.checkbox {
  position: absolute;
  top: 652px;
  left: 27px;
  width: 13px;
  height: 13px;
  background: transparent url('/assets/check-box/check-box.png') 0% 0% no-repeat
    padding-box;
  opacity: 1;
}
.agree-text-container {
  position: absolute;
  top: 648px;
  left: 55px;
  width: 298px;
  height: 36px;
  text-align: left;
  font: normal normal normal 14px/18px Lato;
  letter-spacing: 0px;
  color: #262626;
  opacity: 1;
}
@media screen and (min-width: 376px) {
  .checkbox {
    position: absolute;
    top: 1125px;
    left: 223px;
  }
  .agree-text-container {
    top: 1121px;
    left: 251px;
    width: 298px;
    height: 36px;
    text-align: left;
    font: normal normal normal 14px/18px Lato;
    letter-spacing: 0px;
    color: #262626;
    opacity: 1;
  }
}
</style>
