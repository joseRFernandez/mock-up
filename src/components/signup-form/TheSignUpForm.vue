<template>
  <form>
    <SignUpMainText />
    <SignUpInputForm />
    <AgreeToVisit />
    <SignUpBadge />
    <SignupFinePrint />
    <MakeAWishLogo />
  </form>
</template>
<script>
import SignUpMainText from './SignUpMainText.vue';
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
form {
  width: 331px;
}
@media screen and (max-width: 768px) {
  form {
    width: 683px;
    margin: 36px 43px;
  }
}
</style>
