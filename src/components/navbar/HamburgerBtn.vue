<template>
  <!-- <div class="menu-container"> -->
  <img src="/assets/hamburger_icon.png" class="hamburger" />
  <!-- </div> -->
</template>

<style scoped>
.hamburger {
  position: absolute;
  top: 28px;
  left: 334px;
  width: 16px;
  height: 12px;
  background: #b33cc8 0% 0% no-repeat padding-box;
  opacity: 1;
}
@media screen and (min-width: 376px) {
  .hamburger {
    top: 25px;
    left: 716px;
    width: 25px;
    height: 17px;
  }
}
</style>
