<template>
  <section class="ceo">
    <MessageText class="inner-text" />
    <div>
      <CeoSignature />
    </div>
  </section>
</template>

<script>
import MessageText from './MessageText.vue';
import CeoSignature from './CeoSignature.vue';

export default {
  components: {
    MessageText,
    CeoSignature,
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
