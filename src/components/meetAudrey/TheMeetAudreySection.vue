<template>
  <section>
    <MeetAudreyTitle />
    <MeetAudreyImage />
    <MeetAudreyQuote />
    <MeetAudreyText />
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
section {
  margin-top: 61px;
}
</style>
