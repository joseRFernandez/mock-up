<template>
  <div class="navbar-hamburger-container">
    <img src="/assets/hamburger_icon.png" class="hamburger" />
  </div>
</template>

<style scoped>
.navbar-hamburger-container {
  display: flex;
  align-items: center;
  justify-content: end;
  width: 70.8%;
  height: 50px;
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;
}
.hamburger {
  position: relative;
  right: 2%;
  width: 16px;
  height: 12px;
  background: #b33cc8 0% 0% no-repeat padding-box;
  opacity: 1;
}

@media screen and (min-width: 768px) {
  .navbar-hamburger-container {
    top: 8px;
    right: 10px;
    width: 70.8%;
    height: 50px;
    background: #ffffff 0% 0% no-repeat padding-box;
    opacity: 1;
  }
  .hamburger {
    width: 25px;
    height: 17px;
  }
}
</style>
