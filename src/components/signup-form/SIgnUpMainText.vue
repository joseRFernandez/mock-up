<template>
  <div class="signup-first-container">
    <p class="signup-text-paragraph-1">
      Sign up for the BuzzRx Pharmacist Newsletter to receive updates on our
      charitable giving program, our local community impact and how you can be a
      part of our mission to give back.
    </p>
  </div>
  <div class="signup-second-container">
    <p class="signup-text-paragraph-2">
      For every entry we receive we’ll donate $5, up to $10K, to Make-A-Wish®
    </p>
  </div>
</template>

<style scoped>
.signup-first-container {
  position: absolute;
  top: 20px;
  left: 22px;
  width: 331px;
  height: 74px;
  text-align: center;
  font: normal normal normal 15px/17px Lato;
  letter-spacing: 0px;
  color: #262626;
  opacity: 1;
}
.signup-second-container {
  position: absolute;
  top: 94px;
  left: 22px;
  width: 331px;
  height: 74px;
  text-align: center;
  font: normal normal bold 17px Lato;
  letter-spacing: 0px;
  color: #262626;
  opacity: 1;
}
@media screen and (min-width: 376px) {
  .signup-first-container {
    left: 42px;
    width: 683px;
    height: 74px;
  }
  .signup-second-container {
    left: 49px;
    width: 683px;
    height: 61px;
    text-align: center;
    font: normal normal bold 18px/22px Lato;
  }
}
@media screen and (min-width: 769px) {
  .signup-first-container {
    top: 228px;
    left: 134px;
    width: 384px;
    height: 74px;
    text-align: center;
    font: normal normal normal 15px/17px Lato;
    letter-spacing: 0px;
    color: #262626;
    opacity: 1;
  }
  .signup-text-paragraph-1 {
    top: 20px;
    left: 134px;
    width: 384px;
    height: 74px;
    text-align: center;
    font: normal normal normal 15px/17px Lato;
    letter-spacing: 0px;
    color: #262626;
    opacity: 1;
  }
  .signup-second-container {
    top: 307px;
    left: 134px;
    width: 384px;
    height: 61px;
    text-align: center;
    font: normal normal bold 18px/22px Lato;
    letter-spacing: 0px;
    color: #262626;
    opacity: 1;
  }
  .signup-text-paragraph-2 {
    top: 22px;
    left: 72px;
    height: 22px;
    text-align: center;
    font: normal normal bold 18px/22px Lato;
    letter-spacing: 0px;
    color: #262626;
  }
}
</style>
