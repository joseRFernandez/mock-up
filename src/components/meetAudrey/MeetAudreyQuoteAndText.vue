<template>
  <div class="header-meet-audrey-quote-and-text-container">
    <div class="meet-audrey-quote-and-text-content">
      <MeetAudreyQuote />
      <MeetAudreyText />
    </div>
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
    height: 925px;
  }
  .meet-audrey-quote-and-text-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    height: 650px;
  }
}
</style>
