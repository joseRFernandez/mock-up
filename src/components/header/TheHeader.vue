<template>
  <section class="header-desktop-wrapper" v-if="desktop">
    <div class="header-desktop-image-container">
      <div class="header-signup-form-container">
        <HeaderTitle />
        <TheSignUpForm />
      </div>
      <div class="header-meet-audrey-title-and-audrey-chair-container">
        <MeetAudreyTitle />
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
import MeetAudreyImage from '../meetAudrey/MeetAudreyImage.vue';

export default {
  components: {
    HeaderTitle,
    HeaderImageMobile,
    TheSignUpForm,
    HeaderQuote,
    MeetAudreyTitle,
    MeetAudreyImage
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
    justify-content: space-between;
  }
  .header-desktop-image-container {
    background: transparent url('/assets/mobile-header/IMG_0049/IMG_0049.png')
      0% 0% no-repeat;
    opacity: 1;
    margin-left: -2.5%;
    margin-right: -6%;
    height: 1056px;
    width: 100%;
    background-size: cover;
    display: flex;
    justify-content: space-evenly;
  }
  .header-signup-form-container {
    width: 486px;
    height: 1248px;
    background-color: #ffc700;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
  .header-quote-desktop-container {
    width: 96px;
    height: 71px;
    position: relative;
    top: 608px;
    right: 7.25%;
  }
  .header-meet-audrey-title-and-audrey-chair-container{
    height: 2279px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
