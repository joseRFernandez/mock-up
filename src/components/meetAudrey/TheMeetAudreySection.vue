<template>
  <section class="meet-audrey-section">
    <MeetAudreyTitle />
    <div class="inline">
      <MeetAudreyImage />
      <MeetAudreyQuote />
      <MeetAudreyText />
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
.meet-audrey-section {
  width: 375px;
  height: 1436px;
}
</style>
