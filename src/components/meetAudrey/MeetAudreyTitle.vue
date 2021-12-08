<template>
  <div class="meet-audrey-title-and-text-container">
    <div class="meet-audrey-title">
      <p class="purple">Meet Audrey</p>
    </div>
    <div class="meet-audrey-bottom-text">
      <p class="bottom-text">Our 500<sup>th</sup> Wish Granted</p>
    </div>
  </div>
</template>

<style scoped>
.meet-audrey-title {
  width: 308px;
  height: 42px;
  text-align: center;
  font: normal normal normal 34px/36px Omnes;
  letter-spacing: 0px;
  color: #b33cc8;
  opacity: 1;
}
.purple {
  text-align: center;
}
.meet-audrey-bottom-text {
  width: 308px;
  height: 35px;
  text-align: center;
  font: normal normal normal 28px/36px Omnes;
  letter-spacing: 0px;
  color: #262626;
}
@media screen and (min-width: 738px) {
  .meet-audrey-title {
    top: 1511px;
    left: 189px;
    width: 391px;
    height: 42px;
    text-align: center;
    font: normal normal normal 34px/36px Omnes;
    letter-spacing: 0px;
    color: #b33cc8;
    opacity: 1;
  }
  .meet-audrey-bottom-text {
    top: 1551px;
    left: 189px;
    width: 391px;
    opacity: 1;
  }
}
@media screen and (min-width: 1366px) {
  .meet-audrey-title-and-text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .meet-audrey-title {
    width: 515px;
  }
}
</style>
