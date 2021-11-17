<template>
  <div class="footer">
    <BuzzRxLogo class="logo" />
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
    <p>footer image coming soon...</p>
  </div>
</template>

<script>
import BuzzRxLogo from '../BuzzRxLogo.vue';
export default {
  components: { BuzzRxLogo },
};
</script>

<style scoped>
.logo {
  width: 80.51px;
  height: 20.12px;
  padding: 0;
}
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 89px;
  width: 198px;
  text-align: center;
  letter-spacing: 0px;
  color: #262626;
  opacity: 1;
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
.small-print .medium {
  font-weight: 500;
  line-height: 14px;
}
</style>
