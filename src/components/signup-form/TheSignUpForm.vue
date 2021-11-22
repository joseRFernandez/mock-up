<template>
  <div class="signup-wrapper">
    <SignUpMainText />
    <SignUpInputForm />
      <AgreeToVisit />
      <SignUpBadge />
    <!-- <SignupFinePrint /> -->
    <!-- <MakeAWishLogo /> -->
  </div>
</template>
<script>
import SignUpMainText from './SIgnUpMainText.vue';
import SignUpInputForm from './SignUpInputForm.vue';
import AgreeToVisit from './AgreeToVisit.vue';
// import SignUpBadge from './SignUpBadge.vue';
// import SignupFinePrint from './SignupFinePrint.vue';
// import MakeAWishLogo from './MakeAWishLogo.vue';
export default {
  components: {
    SignUpMainText,
    SignUpInputForm,
    AgreeToVisit,
    // SignUpBadge,
    // MakeAWishLogo,
    // SignupFinePrint,
  },
};
</script>

<style scoped>
.signup-wrapper {
  position: absolute;
  top: 354px;
  width: 100%;
  height: 952px;
}
</style>
