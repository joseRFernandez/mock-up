<template>
  <div class="navbar-hamburger-container">
    <div class="navbar-inner-hamburger-container">
      <img src="/assets/hamburger_icon.png" class="hamburger" />
    </div>
  </div>
</template>

<script></script>

<style scoped>
.navbar-hamburger-container {
  display: flex;
  align-items: center;
  padding: 28px 25px 30px 171px;
}
.hamburger {
  width: 16.14px;
  height: 12.25px;
  opacity: 100%;
}

@media screen and (min-width: 768px) {
  .navbar-hamburger-container {
    width: 544px;
    height: 50px;
    padding: 25px 27px 28px 600px;
  }
  .hamburger {
    width: 24.81px;
    height: 16.54px;
  }
}

/* @media screen and (max-width: ) {

} */
</style>
