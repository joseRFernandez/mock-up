<template>
  <MeetAudreyTitle />
  <div class="inline">
    <MeetAudreyImage />
    <MeetAudreyQuote />
    <MeetAudreyText />
  </div>
</template>

<script>
import MeetAudreyTitle from './MeetAudreyTitle.vue';
import MeetAudreyImage from './MeetAudreyImage.vue';
import MeetAudreyQuote from './MeetAudreyQuote.vue';
import MeetAudreyText from './MeetAudreyText.vue';

export default {
  components: {
    MeetAudreyTitle,
    MeetAudreyImage,
    MeetAudreyQuote,
    MeetAudreyText,
  },
};
</script>

<style scoped>
/* @media screen and (max-width: 768px) {
  .meet-audrey-container {
    margin-top: 76px;
  }
  .inline {
    display: inline;
  }
} */
</style>
