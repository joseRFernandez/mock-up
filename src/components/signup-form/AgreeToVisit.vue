<template>
  <div class="agree-to-visit-container">
    <div class="checkbox"></div>
    <div class="agree-text-container">
      <p class="agree-text-paragraph">
        YES, I would like a BuzzRx Representative to visit my pharmacy and
        occasionally bring FREE treats.
      </p>
    </div>
  </div>
</template>

<style scoped>
.agree-to-visit-container {
  margin-top: 22px;
  width: 86.9%;
  height: 36px;
}
.checkbox {
  width: 13px;
  height: 13px;
  background: transparent url('../../assets/check-box/check-box.png') 0% 0% no-repeat
    padding-box;
    opacity: 1;
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
  .agree-to-visit-container {
    width: 42.45%;
  }
  .agree-text-container {
    height: 36px;
  }
}
@media screen and (min-width: 1366px) {
  .agree-to-visit-container {
    width: unset;

  }
  .agree-text-container {
    width: 336px;
    height: 36px;
  }
}
</style>
