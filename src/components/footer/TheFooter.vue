<template>
  <BuzzRxLogo class="footer-logo" />
  <p class="footer-copyright">
    © 2020 <strong class="footer-copyright-bold">BuzzRx.com</strong>
  </p>
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
  left: 156px;
  height: 8px;
  text-align: center;
  font: normal normal 7px Lato;
  letter-spacing: 0px;
  color: #262626;
  opacity: 1;
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
  left: 87px;
  width: 202px;
  height: 16px;
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
@media screen and (min-width: 376px) {
  .footer-logo {
    top: 3851px;
    left: 320px;
    width: 125px;
    height: 31px;
  }
  .footer-copyright {
    top: 3901px;
    left: 334px;
    width: 100px;
    height: 13px;
    font-size: 11px;
  }
  .footer-copyright-not-insurance {
    top: 3918px;
    left: 297px;
    width: 175px;
    height: 13px;
    text-align: left;
    font: normal normal 11px Lato;
    letter-spacing: 0px;
    color: #262626;
    opacity: 1;
  }
  .fine-print-container-bold {
    top: 3940px;
    left: 222px;
    width: 324px;
    height: 26px;
    opacity: 1;
    font: normal normal bold 8px/13px Lato;
  }
  .fine-print-container-normal {
    top: 3967px;
    left: 206px;
    width: 356px;
    height: 25px;
    font: normal normal 9px/14px Lato;
  }
}
@media screen and (min-width: 769px) {
  .footer-logo {
    top: 3641px;
    left: 622px;
    width: 164px;
    height: 41px;
  }
  .footer-copyright {
    top: 3706px;
    left: 633px;
    width: 146px;
    height: 19px;
    text-align: center;
    letter-spacing: 0px;
    color: #262626;
    opacity: 1;
  }
  .footer-copyright-not-insurance {
    top: 3729px;
    left: 579px;
    width: 254px;
    height: 19px;
    font: normal normal 16px Lato;
  }
  .fine-print-container-bold {
    top: 3757px;
    left: 464px;
    width: 484px;
    height: 38px;
  }
  .fine-print-container-normal {
    top: 3793px;
    left: 468px;
    width: 476px;
    height: 33px;
    text-align: center;
    font: normal normal medium 12px/18px Lato;
    letter-spacing: 0px;
    color: #262626;
    opacity: 1;
  }
  .dot-logo-mobile {
    top: 3877px;
    left: 634px;
    width: 146px;
    height: 27px;
  }
}
</style>
