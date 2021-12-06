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
    // SignupFinePrint,
    // MakeAWishLogo,
  },
};
</script>

<style scoped>
.signup-wrapper {
  height: 923.84px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 22px;
}
@media screen and (min-width: 376px) {
  .signup-wrapper {
    margin-top: -20%;
  }
}
@media screen and (min-width: 485px) {
  .signup-wrapper {
    margin-top: -15%;
  }
  @media screen and (min-width: 550px) {
    .signup-wrapper {
      margin-top: 0;
    }
  }
  @media screen and (min-width: 750px) {
    .signup-wrapper {
      margin-top: 22px;
    }
  }
}
</style>
