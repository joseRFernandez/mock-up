<template>
  <div class="footer">
    <BuzzRxLogo class="footer-logo" />
    <p class="text">© 2020 <strong>BuzzRx.com</strong></p>
    <p class="text">This is not insurance. Full Disclaimer</p>
    <p class="small-print">
      The BuzzRx prescription discount program is not available for use in the
      state of Tennessee.
    </p>
    <p class="small-print medium">
      All trademarks, brands, logos and copyright images are property of their
      respective owners and rights holders and are used solely to represent the
      products of these rights holders.
    </p>
    <DotPharmacyLogo class="dotLogo-mobile" />
  </div>
</template>

<script>
import BuzzRxLogo from '../BuzzRxLogo.vue';
import DotPharmacyLogo from './DotPharmacyLogo.vue';

export default {
  components: { BuzzRxLogo, DotPharmacyLogo },
};
</script>

<style scoped>
.footer {
  width: 375px;
  text-align: center;
  letter-spacing: 0px;
  color: #262626;
  opacity: 1;
  height: 320px;
}

.footer-logo {
  height: 20px;
  width: 81px;
  margin: 33px 149px 33px 146px;
}

.footer .text {
  font-size: 7px;
  font-weight: 500;
  line-height: 8px;
  text-align: center;
}
.small-print {
  font: normal normal bold 5px/8px Lato;
  line-height: 16px;
}
.small-print.medium {
  line-height: 8px;
  font-size: 5px;
  margin: 1.7px 86px 27px;
  text-align: center;
}
.dotLogo-mobile {
  width: 71px;
  height: 13.28px;
}
</style>
