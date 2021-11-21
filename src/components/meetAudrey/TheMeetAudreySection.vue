<template>
  <section class="meet-audrey-container">
    <MeetAudreyTitle />
    <div class="inline">
      <MeetAudreyQuote />
      <MeetAudreyText />
      <MeetAudreyImage />
    </div>
  </section>
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
.meet-audrey-container {
  margin-top: 61px;
}
@media screen and (max-width: 768px) {
  .meet-audrey-container {
    margin-top: 76px;
  }
  .inline {
    display: inline;
  }
}
</style>
