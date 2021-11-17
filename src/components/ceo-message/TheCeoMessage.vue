<template>
  <section class="ceo">
    <MessageText class="inner-text" />
    <CeoImage />
  </section>
</template>

<script>
import MessageText from './MessageText.vue';
import CeoImage from './CeoImage.vue';

export default {
  components: {
    MessageText,
    CeoImage,
  },
};
</script>
<style scoped>
.ceo {
  top: 4115px;
  left: 0px;
  width: 375px;
  height: 470px;
  background: #1e5aaa 0% 0% no-repeat padding-box;
  opacity: 1;
}
</style>
