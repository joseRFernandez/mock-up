<template>
  <div class="navbar-hamburger-container">
    <img src="/assets/hamburger_icon.png" class="hamburger" />
  </div>
</template>

<style scoped>
.hamburger {
  position: absolute;
  top: 28px;
  right: 24.73px;
  width: 16px;
  height: 12px;
  background: #b33cc8 0% 0% no-repeat padding-box;
  opacity: 1;
}
@media screen and (min-width: 768px) {
  .navbar-hamburger-container {
    position: absolute;
    top: 8px;
    right: 10px;
    width: 70.8%;
    height: 50px;
    background: #ffffff 0% 0% no-repeat padding-box;
    opacity: 1;
  }
  .hamburger {
    top: 25px;
    width: 25px;
    left: unset;
    right: 27px;
    height: 17px;
  }
}
</style>
