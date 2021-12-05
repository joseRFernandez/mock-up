<template>
  <section class="maw-logo-container">
    <div class="maw-header-container">
      <p class="maw-logo-header-text">PROUD SUPPORTER OF</p>
    </div>
    <img src="assets/Make-A-Wish-Logo.png" class="maw-logo-image" />
  </section>
</template>

<style scoped>
.maw-logo-container {
  position: absolute;
  top: 1331px;
  left: 94px;
  width: 186px;
  height: 64px;
  opacity: 1;
}
.maw-header-container {
  color: #0F70B8;
  margin-left: 14px;
  letter-spacing: 2px;
}
.maw-logo-header-text {
  font-size: 10px;
  position: absolute;
  left: 14px;
}
.maw-logo-image {
  width: 186px;
  height: 39px;
  background: #0F70B8 0% 0% no-repeat padding-box;
  opacity: 1;
  position: absolute;
  top: 18px;
}
@media screen and (min-width: 768px) {
  .maw-logo-container {
    top: 1371px;
    left: 290px;
  }
}
@media screen and (min-width: 1366px) {
  .maw-logo-container {
    top: 1132px;
    left: 232px;
    width: 186px;
    height: 64px;
    background: transparent 0% 0% no-repeat padding-box;
    opacity: 1;
  }
}
</style>
