<template>
  <SignUpMainText />
  <div>Input Forms coming soon...</div>
  <AgreeToVisit />
  <SignUpBadge />
  <SignupFinePrint />
  <MakeAWishLogo />
</template>
<script>
import SignUpMainText from './SIgnUpMainText.vue';
import AgreeToVisit from './AgreeToVisit.vue';
import SignUpBadge from './SignUpBadge.vue';
import SignupFinePrint from './SignupFinePrint.vue';
import MakeAWishLogo from './MakeAWishLogo.vue';
export default {
  components: {
    SignUpMainText,
    AgreeToVisit,
    SignUpBadge,
    MakeAWishLogo,
    SignupFinePrint,
  },
};
</script>

<style scoped></style>
