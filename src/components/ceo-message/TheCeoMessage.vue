<template>
  <section class="ceo">
    <MessageText />
    <div class="ceo-signature-container">
      <CeoImage />
      <CeoSignature />
    </div>
  </section>
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
  width: 100%;
  height: 470px;
  background: #1e5aaa 0% 0% no-repeat padding-box;
  opacity: 1;
}
.ceo-signature-container {
  display: flex;
  align-items: center;
}

</style>
