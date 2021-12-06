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
  /* justify-content: center; */
  width: 100%;
  margin: 60px 0 43px;
  height: 1513px;
}
</style>
