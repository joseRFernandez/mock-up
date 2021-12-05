<template>
  <body class="body-container">
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
// import TheMeetAudreySection from './components/meetAudrey/TheMeetAudreySection.vue';
// import TheMAWPartnershipSection from './components/MAW-partnership/TheMAWPartnershipSection.vue';
// import TheGetACardSection from './components/getACard/TheGetACardSection.vue';
// import TheCeoMessage from './components/ceo-message/TheCeoMessage.vue';
// import TheFooter from './components/footer/TheFooter.vue';

export default {
  name: 'App',
  components: {
    TheNavbar,
    TheHeader,
    TheSignUpForm,
    // TheMeetAudreySection,
    // TheMAWPartnershipSection,
    // TheGetACardSection,
    // TheCeoMessage,
    // TheFooter,
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
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 4796px;
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;
}
p {
  margin: 0;
}
@media screen and (min-width: 376px) {
  .body-container {
    height: 4107px;
  }
}
@media screen and (min-width: 1366px) {
  .body-container {
    height: 3987px;
  }
}
</style>
