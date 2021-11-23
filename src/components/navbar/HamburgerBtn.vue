<template>
  <div class="menu-container">
    <div class="navbar-hamburger-container">
      <img src="/assets/hamburger_icon.png" class="hamburger" />
    </div>
  </div>
</template>

<script></script>

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
  .menu-container {
    position: absolute;
    top: 8px;
    left: 214px;
    width: 544px;
    height: 50px;
    background: #ffffff 0% 0% no-repeat padding-box;
    opacity: 1;
  }
  .hamburger {
    top: 17px;
    left: 502px;
    width: 25px;
    height: 17px;
    background: #b33cc8 0% 0% no-repeat padding-box;
  }
}
</style>
