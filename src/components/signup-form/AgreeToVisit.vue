<template>
  <div class="agree-to-visit-container">
    <div class="checkbox"></div>
    <div class="agree-text-container">
      <p class="agree-text-paragraph">
        YES, I would like a BuzzRx Representative to visit my pharmacy and
        occasionally bring treats.
      </p>
    </div>
  </div>
</template>

<style scoped>
.agree-to-visit-container {
  position: absolute;
  top: 1002px;
  left: 7.2%;
  right: 5.867%;
  height: 36px;
}
.checkbox {
  width: 13px;
  height: 13px;
  background: transparent url('/assets/check-box/check-box.png') 0% 0% no-repeat
    padding-box;
  /* display: inline; */
}
.agree-text-container {
  position: relative;
  top: -15px;
  left: 28px;
  width: 90%;
  text-align: left;
  font: normal normal normal 14px/18px Lato;
  letter-spacing: 0px;
  color: #262626;
  opacity: 1;
}
@media screen and (min-width: 768px) {
  .checkbox {
    top: 1125px;
    left: 223px;
    width: 13px;
    height: 13px;
  }
  .agree-text-container {
    top: 1121px;
    left: 251px;
    width: 298px;
    height: 36px;
  }
}
@media screen and (min-width: 1366px) {
  .checkbox {
    position: absolute;
    top: 860px;
    left: 148px;
    width: 13px;
    height: 13px;
    opacity: 1;
  }
  .agree-text-container {
    top: 856px;
    left: 176px;
    width: 336px;
    height: 36px;
    text-align: left;
    font: normal normal normal 14px/18px Lato;
    letter-spacing: 0px;
    color: #262626;
    opacity: 1;
  }
}
</style>
