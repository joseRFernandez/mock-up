<template>
  <form class="signup-form-main-container">
    <div class="signup-content-container">
      <SignUpMainText />
      <SignUpInputForm />
      <AgreeToVisit />
      <SignUpBadge />
      <SignupFinePrint />
      <MakeAWishLogo />
    </div>
  </form>
</template>
<script>
import SignUpMainText from './SIgnUpMainText.vue';
import SignUpInputForm from './SignUpInputForm.vue';
import AgreeToVisit from './AgreeToVisit.vue';
import SignUpBadge from './SignUpBadge.vue';
import SignupFinePrint from './SignupFinePrint.vue';
import MakeAWishLogo from './MakeAWishLogo.vue';
export default {
  components: {
    SignUpMainText,
    SignUpInputForm,
    AgreeToVisit,
    SignUpBadge,
    MakeAWishLogo,
    SignupFinePrint,
  },
};
</script>

<style scoped>
.signup-form-main-container {
  width: 375px;
  display: flex;
  justify-content: center;
}
.signup-content-container {
  padding: 20px 22px 61px;
}
@media screen and (min-width: 376px) {
  .signup-form-main-container {
    width: 765px;
  }
  .signup-content-container {
    padding: 36px 42px 0;
  }
}
</style>
