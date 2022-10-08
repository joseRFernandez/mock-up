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
import SignUpBadge from './SignUpBadge.vue';
import SignupFinePrint from './SignupFinePrint.vue';
import MakeAWishLogo from './MakeAWishLogo.vue';
import Resize from '../../mixins/resize';
export default {
  components: {
    SignUpMainText,
    SignUpInputForm,
    AgreeToVisit,
    SignUpBadge,
    SignupFinePrint,
    MakeAWishLogo,
  },
  mixins: [Resize],
};
</script>

<style scoped>
.signup-wrapper {
  height: 1023px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1% 0%;
}
@media screen and (min-width: 768px) {
  .signup-wrapper {
    height: 947px;
  }
}
@media screen and (min-width: 1366px) {
  .signup-wrapper {
    height: 1019px;
    width: 423px;
    background-color: white;
  }
}
</style>
