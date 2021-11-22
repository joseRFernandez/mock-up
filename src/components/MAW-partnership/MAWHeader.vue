<template>
  <header class="maw-header">
    <div class="maw-header-text-container">
      <p class="maw-header-caption">
        OUR MAKE-A-WISH PARTNERSHIP:<br />
        NATIONAL REACH, LOCAL IMPACT
      </p>
    </div>
  </header>
</template>

<style scoped>
.maw-header {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 375px;
  height: 60px;
  opacity: 1;
  background-color: #b33cc8;
}
.maw-header-text-container {
  position: absolute;
  top: 9px;
  left: 24px;
  width: 327px;
  height: 44px;
  text-align: center;
  font: normal normal medium 18px/22px Omnes;
  letter-spacing: 0px;
  color: #ffffff;
  text-transform: uppercase;
  opacity: 1;
}
@media screen and (min-width: 376px) {
  .maw-header {
    width: 768px;
    height: 34px;
  }
  .maw-header-text-container {
    left: 16px;
    width: 736px;
    height: 16px;
    text-align: center;
    font: normal normal medium 18px/22px Omnes;
    letter-spacing: 0px;
    color: #ffffff;
    text-transform: uppercase;
    opacity: 1;
  }
}
</style>
