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
.navbar-hamburger-container {
  display: flex;
  align-items: center;
}

@media screen and (min-width: 768px) {
  .navbar-hamburger-container {
    width: 544px;
    height: 50px;
    padding-left: 600px
  }
  .hamburger {
    width: 24px;
    height: 17px;
  }
}
</style>
