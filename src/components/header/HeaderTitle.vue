<template>
  <div class="header-title">
    <div class="header-p-container">
      <p>Help us grant more wishes <span>like Audrey’s!</span></p>
    </div>
  </div>
</template>

<style scoped>
.header-title {
  width: 375px;
  height: 129px;
  background: #ffc700 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;
}
.header-p-container {
  padding: 31px 12px 22px;
}
p {
  text-align: center;
  font-weight: 500;
  font-size: 32px;
  font-family: omnes;
  letter-spacing: 0px;
  opacity: 1;
  margin: 0;
}
span {
  color: #b33cc8;
}
@media screen and (min-width: 376px) {
  .header-title {
    width: 768px;
    height: 84px;
  }
  .header-p-container {
    padding: 20px 16px 19px;
  }
}
</style>
