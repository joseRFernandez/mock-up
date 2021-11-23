<template>
  <div class="ceo">
    <MessageText />
    <CeoImage />
    <CeoSignature />
  </div>
</template>

<script>
import MessageText from './MessageText.vue';
import CeoImage from './CeoImage.vue';
import CeoSignature from './CeoSignature.vue';

export default {
  components: {
    MessageText,
    CeoImage,
    CeoSignature,
  },
};
</script>
<style scoped>
.ceo {
  position: absolute;
  top: 4115px;
  left: 0px;
  width: 375px;
  height: 470px;
  background: #1e5aaa 0% 0% no-repeat padding-box;
  opacity: 1;
}
@media screen and (min-width: 376px) {
  .ceo {
    top: 3417px;
    left: 0px;
    width: 768px;
    height: 351px;
    background: #1e5aaa 0% 0% no-repeat padding-box;
    opacity: 1;
  }
}
</style>
