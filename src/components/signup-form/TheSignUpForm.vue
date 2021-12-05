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
    SignupFinePrint,
    MakeAWishLogo,
  },
};
</script>

<style scoped>
/* not being used */
/* .signup-section-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: absolute;
  height: 907px;
  width: 100%;
} */
</style>
