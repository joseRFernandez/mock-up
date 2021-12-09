<template>
  <div class="ceo-section-wrapper">
    <MessageText />
    <CeoSignature />
  </div>
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
.ceo-section-wrapper {
  background: #1e5aaa 0% 0% no-repeat padding-box;
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  height: 470px;
}
@media screen and (min-width: 768px) {
  .ceo-section-wrapper {
    height: 351px;
    background: #1e5aaa 0% 0% no-repeat padding-box;
    opacity: 1;
  }
}
/* @media screen and (min-width: 1366px) {
  .ceo-section-wrapper {
    height: 351px;
  }
} */
</style>
