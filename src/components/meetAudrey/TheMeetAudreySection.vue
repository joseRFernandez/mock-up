<template>
  <section class="meet-audrey-wrapper">
    <MeetAudreyTitle />
    <div class="meet-audrey-image-and-text-container">
      <MeetAudreyImage />
      <div class="meet-audrey-quote-and-text-small-container">
        <MeetAudreyQuote />
        <MeetAudreyText />
      </div>
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
.meet-audrey-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 60px;
}
.meet-audrey-image-and-text-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.meet-audrey-quote-and-text-small-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
@media screen and (min-width: 768px) {
  .meet-audrey-image-and-text-container {
    display: flex;
    flex-direction: row-reverse;
    width: 100%;
    height: 980px;
  }
  .meet-audrey-quote-and-text-small-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
  }
}
@media screen and (min-width: 1366px) {
  .meet-audrey-wrapper {
    flex-direction: row;
  }
}
</style>
