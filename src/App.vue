<template>
  <body class="mobile">
    <TheNavbar />
    <TheHeader />
    <TheSignUpForm />
    <TheMeetAudreySection />
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
import TheCeoMessage from './components/ceo-message/TheCeoMessage.vue';
import TheGetACardSection from './components/getACard/TheGetACardSection.vue';
import TheMAWPartnershipSection from './components/MAW-partnership/TheMAWPartnershipSection.vue';
import TheMeetAudreySection from './components/meetAudrey/TheMeetAudreySection.vue';
import TheFooter from './components/footer/TheFooter.vue';

export default {
  name: 'App',
  components: {
    TheNavbar,
    TheFooter,
    TheHeader,
    TheCeoMessage,
    TheGetACardSection,
    TheMAWPartnershipSection,
    TheMeetAudreySection,
    TheSignUpForm,
  },
};
</script>

<style>
html {
  font-family: 'Lato', sans-serif;
  /* font-family: 'Omnes', sans-serif; */
}
body {
  margin: 0;
}
.mobile {
  top: 0px;
  left: 0px;
  width: 375px;
  height: 4796px;
  margin: 0;

  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;
}
</style>
