<template>
  <section class="meet-audrey-wrapper" v-if="!this.desktop">
    <MeetAudreyTitle />
    <div class="meet-audrey-image-and-text-container">
      <MeetAudreyImage />
      <div class="meet-audrey-quote-and-text-small-container">
        <MeetAudreyQuote />
        <MeetAudreyText />
      </div>
    </div>
  </section>
  <section class="meet-audrey-desktop-wrapper" v-else>
    <div class="meet-audrey-quote-and-text-desktop-container">
      <MeetAudreyQuote />
      <MeetAudreyText />
    </div>
    <div class="meet-audrey-title-and-image-desktop-container">
      <!-- <MeetAudreyTitle /> -->
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

  data() {
    return {
      desktop: null,
    };
  },
  beforeMount() {
    if (document.documentElement.clientWidth >= 1366) {
      this.desktop = true;
    } else {
      this.desktop = false;
    }
  },
  mounted() {
    window.addEventListener('resize', this.getDimensions);
  },
  unmounted() {
    window.removeEventListener('resize', this.getDimensions);
  },
  methods: {
    getDimensions() {
      this.width = document.documentElement.clientWidth;
      if (this.width >= 1366) {
        this.desktop = true;
      } else {
        this.desktop = false;
      }
    },
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
    flex-direction: row-reverse;
    width: 100%;
    height: 829px;
  }
  .meet-audrey-quote-and-text-small-container {
    width: 50%;
  }
}
@media screen and (min-width: 1366px) {
  .meet-audrey-desktop-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 1222px;
  }
  .meet-audrey-quote-and-text-desktop-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .meet-audrey-title-and-image-desktop-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
}
</style>
