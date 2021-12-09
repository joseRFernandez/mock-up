<template>
  <section class="header-desktop-wrapper" v-if="desktop">
    <div class="header-desktop-image-container">
      <div class="header-signup-form-container">
        <HeaderTitle />
        <TheSignUpForm />
      </div>
      <div class="header-meet-audrey-title-container">
        <MeetAudreyTitle />
      </div>
      <div class="header-quote-desktop-container">
        <HeaderQuote />
      </div>
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
import MeetAudreyTitle from '../meetAudrey/MeetAudreyTitle.vue'

export default {
  components: {
    HeaderTitle,
    HeaderImageMobile,
    TheSignUpForm,
    HeaderQuote,
    MeetAudreyTitle,
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
    height: 1200px;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
  }
  .header-desktop-image-container {
    background: transparent url('/assets/mobile-header/IMG_0049/IMG_0049.png')
      0% 0% no-repeat;
    opacity: 1;
    margin-left: -2.5%;
    margin-right: -2.5%;
    height: 1056px;
    width: 109%;
    background-size: 108%;
    display: flex;
    justify-content: space-around;
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
  }
  .header-meet-audrey-title-container {
    height: 1248px;
    display: flex;
    align-items: flex-end;
  }
}
</style>
