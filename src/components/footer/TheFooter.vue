<template>
  <BuzzRxLogo class="footer-logo" />
  <p class="footer-copyright">© 2020 <strong>BuzzRx.com</strong></p>
  <p class="footer-copyright-not-insurance">
    This is not insurance. Full Disclaimer
  </p>
  <div class="fine-print-container-bold">
    <p class="small-print-text bold">
      The BuzzRx prescription discount program is not available for use in the
      state of Tennessee.
    </p>
  </div>
  <div class="fine-print-container-normal">
    <p class="small-print-text">
      All trademarks, brands, logos and copyright images are property of their
      respective owners and rights holders and are used solely to represent the
      products of these rights holders.
    </p>
  </div>

  <DotPharmacyLogo />
</template>

<script>
import BuzzRxLogo from '../BuzzRxLogo.vue';
import DotPharmacyLogo from './DotPharmacyLogo.vue';

export default {
  components: { BuzzRxLogo, DotPharmacyLogo },
};
</script>

<style scoped>
.footer-logo {
  position: absolute;
  top: 4618px;
  left: 146px;
  width: 81px;
  height: 20px;
  opacity: 1;
}
.footer-copyright {
  position: absolute;
  top: 4672px;
  left: 155px;
  height: 8px;
  text-align: center;
  font: normal normal 7px Lato;
  letter-spacing: 0px;
  color: #262626;
}
.footer-copyright-not-insurance {
  position: absolute;
  top: 4683px;
  left: 132px;
  width: 111px;
  height: 8px;
  text-align: left;
  font: normal normal 7px Lato;
  letter-spacing: 0px;
  color: #262626;
  opacity: 1;
}
.fine-print-container-bold {
  position: absolute;
  top: 4697px;
  left: 86.5px;
  width: 202px;
  height: 8px;
  text-align: center;
  font: normal normal bold 5px/8px Lato;
  letter-spacing: 0px;
  color: #262626;
}
.fine-print-container-normal {
  position: absolute;
  top: 4715px;
  left: 89px;
  width: 198px;
  height: 14px;
  text-align: center;
  font: normal normal 5px Lato;
  letter-spacing: 0px;
  color: #262626;
  opacity: 1;
}
.dot-logo-mobile {
  position: absolute;
  top: 4756px;
  left: 152px;
  width: 71px;
  height: 13px;
  background: transparent url('/assets/dotPharmacyLogos/dotPharmacyLogo.png') 0%
    0% no-repeat padding-box;
  opacity: 1;
}
</style>
