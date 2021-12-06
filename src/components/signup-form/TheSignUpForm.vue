<template>
  <div class="signup-wrapper">
    <SignUpMainText />
    <SignUpInputForm />
    <AgreeToVisit />
    <SignUpBadge />
    <SignupFinePrint />
    <MakeAWishLogo />
  </div>
</template>
<script>
import SignUpMainText from './SIgnUpMainText.vue';
// import SignUpInputForm from './SignUpInputForm.vue';
// import AgreeToVisit from './AgreeToVisit.vue';
// import SignUpBadge from './SignUpBadge.vue';
// import SignupFinePrint from './SignupFinePrint.vue';
// import MakeAWishLogo from './MakeAWishLogo.vue';
export default {
  components: {
    SignUpMainText,
    // SignUpInputForm,
    // AgreeToVisit,
    // SignUpBadge,
    // SignupFinePrint,
    // MakeAWishLogo,
  },
};
</script>

<style scoped>
.signup-wrapper {
  position: absolute;
  height: 923.84px;
  width: 100%;
  top: 354px;
  display: flex;
  justify-content: center;
}
@media screen and (min-width: 375px) {
  .signup-wrapper {
   margin-top: 22px;
   /* position: initial; */
  }
}
</style>
