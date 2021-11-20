<template>
  <div class="navbar-hamburger-container">
    <div class="navbar-inner-hamburger-container">
      <img src="/assets/hamburger_icon.png" class="hamburger" />
    </div>
  </div>
</template>

<script></script>

<style scoped>
.hamburger {
  width: 16.14px;
  height: 12.25px;
  opacity: 100%;
}
@media screen and (min-width: 765px) {
  .hamburger {
    width: 24.81px;
    height: 16.54px;
  }
  .navbar-hamburger-container {
    width: 544px;
    height: 50px;
    padding: 17px 23px 8px 0px;
  }
  .navbar-inner-hamburger-container {
    width: 33px;
    height: 33px;
    padding: 8.27px 4.14px;
    text-align: center;
    padding: 9px 13px 8px 498px;
  }

}
</style>
