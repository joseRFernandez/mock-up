<template>
  <header class="maw-header">
    <div class="maw-header-text-container">
      <p class="maw-header-caption">
        OUR MAKE-A-WISH PARTNERSHIP: NATIONAL REACH, LOCAL IMPACT
      </p>
    </div>
  </header>
</template>

<style scoped>
.maw-header {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  opacity: 1;
  background-color: #b33cc8;
}
.maw-header-text-container {
  width: 87.2%;
  height: 44px;
  text-align: center;
  font: normal normal medium 18px/22px Omnes;
  letter-spacing: 0px;
  color: #ffffff;
  text-transform: uppercase;
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
@media screen and (min-width: 768px) {
  .maw-header {
    width: 100%;
    height: 34px;
  }
  .maw-header-text-container {
    height: 16px;
  }
}
@media screen and (min-width: 1366px) {
  .maw-header {
    min-height: 48px;
    position: relative;
    top: 25px;
  }
  .maw-header-text-container {
    text-align: center;
    font: normal normal medium 24px/24px Omnes;
    letter-spacing: 0px;
    color: #ffffff;
    text-transform: uppercase;
    opacity: 1;
  }
}
</style>
