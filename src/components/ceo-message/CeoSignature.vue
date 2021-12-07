<template>
  <div class="ceo-signature-container">
    <CeoImage />
    <div class="ceo-signature-text-container">
      <p class="ceo-signature-header">Richard K. Davis<br /></p>

      <p class="ceo-signature-text-p">
        President and CEO<br />
        Make-A-Wish America
      </p>
    </div>
  </div>
</template>

<script>
import CeoImage from './CeoImage.vue';
export default {
  components: {
    CeoImage,
  },
};
</script>
<style scoped>
.ceo-signature-container {
  width: 78.67%;
  height: 88px;
  letter-spacing: 0px;
  font: normal normal normal 14px/20px Lato;
  color: #ffffff;
  opacity: 1;
  font-weight: 300;
  display: flex;
  justify-content: space-evenly;
}
.ceo-signature-text-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.ceo-signature-header {
  font-size: 16px;
  font-weight: bold;
  text-align: left;
}
@media screen and (min-width: 376px) {
  .ceo-signature {
    top: 240px;
    left: 358px;
  }
}
@media screen and (min-width: 769px) {
  .ceo-signature {
    top: 240px;
    left: 670px;
    font: normal normal normal 14px/20px Lato;
  }
}
</style>
