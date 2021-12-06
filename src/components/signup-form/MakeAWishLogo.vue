<template>
  <section class="maw-logo-flexbox">
    <div class="maw-logo-container">
      <div class="maw-header-container">
        <p class="maw-logo-header-text">PROUD SUPPORTER OF</p>
      </div>
      <img src="assets/Make-A-Wish-Logo.png" class="maw-logo-image" />
    </div>
  </section>
</template>

<style scoped>
.maw-logo-flexbox {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* margin-top: 28px; */
}
.maw-logo-container {
  width: 186px;
  height: 64px;
  opacity: 1;
  box-sizing: border-box;
}
.maw-header-container {
  color: #0f70b8;
  margin-left: 14px;
  letter-spacing: 2px;
}
.maw-logo-header-text {
  font-size: 10px;
  /* position: absolute; */
  position: relative;
  left: 14px;
}
.maw-logo-image {
  width: 186px;
  height: 39px;
  background: #0f70b8 0% 0% no-repeat padding-box;
  opacity: 1;
  /* position: absolute; */
  position: relative;
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
