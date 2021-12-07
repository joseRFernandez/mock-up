<template>
  <div class="badge-container">
    <div class="badge">
      <p class="agree-badge-text">Sign Up To Give Back</p>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.badge-container {
  display: flex;
  justify-content: center;
  background: #b33cc8 0% 0% no-repeat padding-box;
  border-radius: 28px;
  opacity: 1;
  margin-top: 29px;
  width: 88.53%;
}
.badge {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  font: normal normal bold 16px/19px Lato;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
}
.agree-badge-text {
  margin: 0;
}
@media screen and (min-width: 768px) {
  .badge-container {
    width: 46.88%;
  }
  .badge {
    top: 9px;
    left: 64px;
    width: 232px;
  }
}
@media screen and (min-width: 1366px) {
  .badge-container {
    position: absolute;
    top: 915px;
    left: 193px;
    width: 267px;
    height: 40px;
    background: #b33cc8 0% 0% no-repeat padding-box;
    border-radius: 28px;
    opacity: 1;
  }
  .badge {
    left: 25px;
  }
}
</style>
