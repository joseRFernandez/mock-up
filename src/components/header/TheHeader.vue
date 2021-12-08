<template>
  <section class="header-desktop-wrapper" v-if="desktop">
    <div class="header-desktop-image-container">
      <div class="header-signup-form-container">
        <TheSignUpForm />
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
// import HeaderQuote from './HeaderQuote.vue';

export default {
  components: {
    HeaderTitle,
    HeaderImageMobile,
    TheSignUpForm,
    // HeaderQuote,
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
    display: flex;
    flex-direction: row;
    height: 1200px;
    width: 100%;
    box-sizing: border-box;
  }
  .header-signup-form-container {
    width: 486px;
    height: 1200px;
    background-color: #ffc700;
  }
  .header-desktop-image-container {
    background: transparent url('/assets/mobile-header/IMG_0049/IMG_0049.png')
      0% 0% no-repeat;
    opacity: 1;
    margin-left: -2.5%;
    height: 1056px;
    width: 1366px;
    object-fit: cover;

  }
  .header-signup-form-container {
    position: relative;
    left:100px;
  }
  @media screen and (min-width: 1400px) {
    .header-desktop-image-container {
      margin-top: 2%;
      background-position-x: center;
    }
  }
}
</style>
