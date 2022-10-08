<template>
  <div class="header-mobile-image"></div>
</template>
<script>
import Resize from '../../mixins/resize';
export default {
  mixins: [Resize],
};
</script>

<style scoped>
.header-mobile-image {
  width: 100%;
  height: 155px;
  background: transparent url('../../assets/mobile-header/mobile-header.png') 0% 0% no-repeat padding-box;
  background-size: cover;
}
@media screen and (min-width: 500px) {
  .header-mobile-image {
    background: transparent url('../../assets/mobile-header/mobile-header@2x.png') 0% 0% no-repeat padding-box;
    background-size: contain;
    height: 310px;
    margin-bottom: -50px;
  }
}
@media screen and (min-width: 640px) {
  .header-mobile-image {
    margin-bottom: 0;
  }
}

@media screen and (min-width: 750px) {
  .header-mobile-image {
    background-size: cover;
  }
}
@media screen and (min-width: 768px) {
  .header-mobile-image {
    height: 334px;
    background: transparent url('../../assets/tablet-header/tablet-header.png') 0% 0% no-repeat padding-box;
    background-size: cover;
  }
}

@media screen and (min-width: 950px) {
  .header-mobile-image {
    background: transparent url('../../assets/tablet-header/tablet-header@2x.png') 0% 0% no-repeat padding-box;
    background-position: 50% 100%;
    background-size: contain;
  }
}
</style>
