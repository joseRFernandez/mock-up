<template>
  <div class="header-meet-audrey-quote-and-text-container">
    <MeetAudreyQuote />
    <MeetAudreyText />
  </div>
</template>

<script>
import MeetAudreyQuote from './MeetAudreyQuote.vue';
import MeetAudreyText from './MeetAudreyText.vue';
export default {
  components: {
    MeetAudreyQuote,
    MeetAudreyText,
  },
};
</script>

<style scoped>
@media screen and (min-width: 1366px) {
  .header-meet-audrey-quote-and-text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 650px;
    margin-bottom: 6.9%;
  }
}
</style>
