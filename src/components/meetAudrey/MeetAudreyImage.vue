<template>
  <div class="meet-audrey-image-container">
    <div class="meet-audrey-image"></div>
  </div>
</template>

<style scoped>
.meet-audrey-image-container {
  width: 100%;
  height: 563px;
  opacity: 1;
  background-size: cover;
  margin: 30px 0 28px;
}
.meet-audrey-image {
  background: transparent url('../../assets/Real_AudreyChair/IMG_0308.png') 0%
    0% no-repeat padding-box;
  background-size: cover;
  height: 100%;
}
@media screen and (min-width: 450px) {
  .meet-audrey-image-container {
    background: transparent url('../../assets/Real_AudreyChair/IMG_0308.png') 0%
      0% no-repeat padding-box;
    background-position: center;
  }
}
@media screen and (min-width: 768px) {
  .meet-audrey-image-container {
    width: 453px;
    height: 680px;
    background-size: contain;
  }
}
@media screen and (min-width: 1366px) {
  .meet-audrey-image-container {
    width: 616px;
    height: 925px;
  }
}
</style>
