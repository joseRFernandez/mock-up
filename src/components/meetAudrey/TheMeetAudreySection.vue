<template>
  <section class="meet-audrey-wrapper">
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
.meet-audrey-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 1431px;
  width: 100%;
  height: 1513px;
}
</style>
