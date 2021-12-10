<template>
  <div class="header-desktop-image-container" v-if="desktop"></div>
  <section class="header-desktop-wrapper" v-if="desktop">
    <div class="header-signup-form-and-text-container">
      <div class="header-signup-mini-container">
        <HeaderTitle />
        <TheSignUpForm />
      </div>
      <div class="header-meet-audrey-quote-and-text-container">
        <MeetAudreyQuoteAndText />
      </div>
    </div>
    <div class="header-meet-audrey-title-and-chair-image-container">
      <div class="header-meet-audrey-title-container">
        <MeetAudreyTitle />
      </div>

      <div class="header-meet-audrey-chair-image">
        <MeetAudreyImage />
      </div>
    </div>
    <div class="header-quote-desktop-container">
      <HeaderQuote />
    </div>
  </section>

  <div class="header-mobile-wrapper" v-else>
    <HeaderTitle />
    <HeaderImageMobile />
  </div>
</template>

<script>
import HeaderTitle from './HeaderTitle.vue';
import HeaderImageMobile from './HeaderImageMobile.vue';
import TheSignUpForm from '../signup-form/TheSignUpForm.vue';
import HeaderQuote from './HeaderQuote.vue';
import MeetAudreyTitle from '../meetAudrey/MeetAudreyTitle.vue';
import MeetAudreyQuoteAndText from '../meetAudrey/MeetAudreyQuoteAndText.vue';
import MeetAudreyImage from '../meetAudrey/MeetAudreyImage.vue';

export default {
  components: {
    HeaderTitle,
    HeaderImageMobile,
    TheSignUpForm,
    HeaderQuote,
    MeetAudreyTitle,
    MeetAudreyQuoteAndText,
    MeetAudreyImage,
  },

  data() {
    return {
      desktop: false,
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
@media screen and (min-width: 1366px) {
  .header-desktop-wrapper {
    height: 2279px;
    width: 108%;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
  }
  .header-desktop-image-container {
    background: transparent url('/assets/mobile-header/IMG_0049/IMG_0049.png')
      0% 0% no-repeat;
    opacity: 1;
    height: 1057px;
    width: 100%;
    background-size: cover;
    position: absolute;
  }
  .header-signup-form-and-text-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-left: 8.27%;
  }
  .header-meet-audrey-title-and-chair-image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    right: 4.9%;
  }
  .header-signup-mini-container {
    width: 486px;
    height: 1200px;
    background-color: #ffc700;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    z-index: 1;
  }
  .header-meet-audrey-quote-and-text-container {
    height: 1015px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }
  .header-quote-desktop-container {
    width: 96px;
    height: 71px;
    position: absolute;
    top: 700px;
    right: 7.4%;
  }
  .header-meet-audrey-title-container {
    height: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }
}
@media screen and (min-width: 2000px) {
  .header-desktop-image-container {
    background: transparent url('/assets/mobile-header/IMG_0049/IMG_0049@2x.png')
      0% 0% no-repeat;
      background-size: cover;
  }
}
</style>
