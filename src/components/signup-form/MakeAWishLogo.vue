<template>
    <div class="maw-logo-container">
      <div class="maw-header-container">
        <p class="maw-logo-header-text">PROUD SUPPORTER OF</p>
      </div>
      <img src="assets/Make-A-Wish-Logo.png" class="maw-logo-image" />
    </div>
</template>

<style scoped>
.maw-logo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 186px;
  height: 64px;
  opacity: 1;
  box-sizing: border-box;
}
.maw-header-container {
  color: #0f70b8;
  letter-spacing: 2px;
}
.maw-logo-header-text {
  font-size: 10px;
}
.maw-logo-image {
  width: 186px;
  height: 39px;
  background: #0f70b8 0% 0% no-repeat padding-box;
  opacity: 1;
  position: relative;
  top: 18px;
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
