<template>
  <div class="agree-container">
    <div class="checkbox"></div>
    <div class="text">
      <p>
        YES, I would like a BuzzRx Representative to visit my pharmacy and
        occasionally bring FREE
      </p>
    </div>
  </div>
</template>

<style scoped>
.agree-container {
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 22px;
}
.checkbox {
  width: 13px;
  height: 13px;
  background: transparent url('/assets/check-box/check-box.png') 0% 0% no-repeat
    padding-box;
  opacity: 1;
  margin-right: 15px;
}
p {
  margin: 0;
  width: 298px;
}
.text {
  min-width: 298px;
  height: 36px;
  text-align: left;
  font: normal normal normal 14px/18px Lato;
  letter-spacing: 0px;
  color: #262626;
  opacity: 1;
  line-height: 18px;
}

@media screen and (min-width: 768px) {
  .checkbox {
    margin: 26px 15px 48px;
  }
  .text {
    margin: 0;
  }
}
</style>
