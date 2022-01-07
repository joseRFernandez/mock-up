<template>
  <body class="body-container">
    <TheNavbar />
    <TheHeader />
    <TheSignUpForm v-if="!desktop"/>
    <TheMeetAudreySection v-if="!desktop"/>
    <TheMAWPartnershipSection />
    <TheGetACardSection />
    <TheCeoMessage />
    <TheFooter />
  </body>
</template>

<script>
import TheNavbar from './components/navbar/TheNavbar.vue';
import TheHeader from './components/header/TheHeader.vue';
import TheSignUpForm from './components/signup-form/TheSignUpForm.vue';
import TheMeetAudreySection from './components/meetAudrey/TheMeetAudreySection.vue';
import TheMAWPartnershipSection from './components/MAW-partnership/TheMAWPartnershipSection.vue';
import TheGetACardSection from './components/getACard/TheGetACardSection.vue';
import TheCeoMessage from './components/ceo-message/TheCeoMessage.vue';
import TheFooter from './components/footer/TheFooter.vue';

export default {
  name: 'App',
  components: {
    TheNavbar,
    TheHeader,
    TheSignUpForm,
    TheMeetAudreySection,
    TheMAWPartnershipSection,
    TheGetACardSection,
    TheCeoMessage,
    TheFooter,
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

<style>
html {
  font-family: 'Lato', sans-serif;
  width: 100%;
}
body {
  margin: 0;
}
.body-container {
  width: 100%;
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;
  box-sizing: border-box;
  overflow-x: hidden;
}
p {
  margin: 0;
}
</style>
