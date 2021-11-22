<template>
  <div class="header-title">
    <div class="header-p-container">
      <p>Help us grant more wishes <span>like Audrey’s!</span></p>
    </div>
  </div>
</template>

<style scoped>
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
