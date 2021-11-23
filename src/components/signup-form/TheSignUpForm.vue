<template>
    <SignUpMainText />
    <SignUpInputForm />
    <AgreeToVisit />
    <SignUpBadge />
    <SignupFinePrint />
    <MakeAWishLogo />
</template>
<script>
import SignUpMainText from './SIgnUpMainText.vue';
// import SignUpInputForm from './SignUpInputForm.vue';
import AgreeToVisit from './AgreeToVisit.vue';
// import SignUpBadge from './SignUpBadge.vue';
// import SignupFinePrint from './SignupFinePrint.vue';
// import MakeAWishLogo from './MakeAWishLogo.vue';
export default {
  components: {
    SignUpMainText,
    // SignUpInputForm,
    AgreeToVisit,
    // SignUpBadge,
    // MakeAWishLogo,
    // SignupFinePrint,
  },
};
</script>

<style scoped>
/* .signup-wrapper {
  position: absolute;
  top: 354px;
  width: 375px;
  height: 952px;
} */
/* @media screen and (min-width: 376px) {
  .signup-wrapper {
    position: absolute;
    top: 488px;
    width: 768px;
    height: 883px;
  }
} */
</style>
