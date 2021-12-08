<template>
  <section class="header-desktop-wrapper" v-if="desktop">
    <div class="header-desktop-image-container">
      <div class="header-signup-form-container">
        <HeaderTitle />
        <TheSignUpForm />
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

export default {
  components: {
    HeaderTitle,
    HeaderImageMobile,
    TheSignUpForm,
    HeaderQuote,
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
    height: 1056px;
    width: 1366px;
    object-fit: cover;
    display: flex;
  }
  .header-signup-form-container {
    width: 486px;
    height: 1200px;
    background-color: #ffc700;
    margin-left: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  .header-quote-desktop-container {
    width: 96px;
    height: 71px;
    position: relative;
    top: 608px;
    left: 604px;
  }

  @media screen and (min-width: 1400px) {
    .header-desktop-image-container {
      margin-top: 2%;
      background-position-x: center;
    }
  }
}
</style>
