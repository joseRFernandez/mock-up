<template>
  <section class="footer-wrapper">
    <BuzzRxLogo class="footer-logo" />
    <div class="footer-copyright-and-fine-print-container">
      <div class="footer-copyright-container">
        <p class="footer-copyright">
          © 2020 <strong class="footer-copyright-bold">BuzzRx.com</strong>
        </p>
        <p class="footer-copyright-not-insurance">
          This is not insurance. Full Disclaimer
        </p>
      </div>
      <div class="fine-print-container-bold">
        <p class="small-print-text bold">
          The BuzzRx prescription discount program is not available for use in
          the state of Tennessee.
        </p>
      </div>
      <div class="fine-print-container-normal">
        <p class="small-print-text">
          All trademarks, brands, logos and copyright images are property of
          their respective owners and rights holders and are used solely to
          represent the products of these rights holders.
        </p>
      </div>
    </div>

    <DotPharmacyLogo />
  </section>
</template>

<script>
import BuzzRxLogo from '../BuzzRxLogo.vue';
import DotPharmacyLogo from './DotPharmacyLogo.vue';

export default {
  components: { BuzzRxLogo, DotPharmacyLogo },
};
</script>

<style scoped>
@media screen and (min-width: 0px) {
  .footer-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 211px;
  }
  .footer-logo {
    width: 80px;
    height: 20px;
    opacity: 1;
  }
  .footer-copyright-and-fine-print-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 55px;
    justify-content: space-between;
  }
  .footer-copyright-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 19px;
  }
  .footer-copyright {
    height: 8px;
    text-align: center;
    font: normal normal 7px Lato;
    letter-spacing: 0px;
    color: #262626;
    opacity: 1;
  }
  .footer-copyright-not-insurance {
    width: 111px;
    font: normal normal 7px Lato;
    letter-spacing: 0px;
    color: #262626;
    opacity: 1;
  }
  .fine-print-container-bold {
    width: 202px;
    height: 16px;
    text-align: center;
    font: normal normal bold 5px/8px Lato;
    letter-spacing: 0px;
    color: #262626;
  }
  .fine-print-container-normal {
    width: 198px;
    height: 14px;
    text-align: center;
    font: normal normal 5px Lato;
    letter-spacing: 0px;
    color: #262626;
    opacity: 1;
  }
  .dot-logo-mobile {
    width: 71px;
    height: 13px;
    background: transparent url('/assets/dotPharmacyLogos/dotPharmacyLogo.png')
      0% 0% no-repeat padding-box;
    opacity: 1;
  }
}
@media screen and (min-width: 768px) {
  .footer-wrapper {
    height: 339px;
  }
  .footer-copyright-and-fine-print-container {
    height: 91px;
  }
  .footer-logo {
    width: 125px;
    height: 31px;
  }
  .footer-copyright {
    width: 100px;
    height: 13px;
    font-size: 11px;
  }
  .footer-copyright-not-insurance {
    width: 175px;
    height: 13px;
    text-align: left;
    font: normal normal 11px Lato;
    letter-spacing: 0px;
    color: #262626;
    opacity: 1;
  }
  .fine-print-container-bold {
    width: 324px;
    height: 26px;
    opacity: 1;
    font: normal normal bold 8px/13px Lato;
  }
  .fine-print-container-normal {
    width: 356px;
    height: 25px;
    font: normal normal 9px/14px Lato;
  }
}
@media screen and (min-width: 1366px) {
  .footer-wrapper {
    height: 474px;
  }
  .footer-copyright-and-fine-print-container {
    height: 122px;
  }
  .footer-logo {
    width: 164px;
    height: 41px;
  }
  .footer-copyright {
    width: 146px;
    height: 19px;
    font-size: 16px;
  }
  .footer-copyright-not-insurance {
    width: 254px;
    height: 19px;
    font: normal normal 16px Lato;
  }
  .fine-print-container-bold {
    width: 484px;
    height: 38px;
    font: normal normal bold 11px/19px Lato;
    margin-top: 9px;
  }
  .fine-print-container-normal {
    width: 476px;
    height: 33px;
    text-align: center;
    font: normal normal 12px/18px Lato;
    letter-spacing: 0px;
    color: #262626;
    opacity: 1;
  }
  .dot-logo-mobile {
    width: 146px;
    height: 27px;
  }
}
</style>
