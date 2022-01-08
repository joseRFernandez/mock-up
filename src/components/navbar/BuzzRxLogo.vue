<template>
  <div class="navbar-logo-container">
    <BuzzRxLogo class="navbar-buzz-logo" />
  </div>
</template>


<script>
import BuzzRxLogo from '../BuzzRxLogo.vue'
export default {
components: {
  BuzzRxLogo
}
}
</script>

<style scoped>
.navbar-logo-container {
  display: flex;
  align-items: center;

}
.navbar-buzz-logo {
  width: 154px;
  height: 37px;
  opacity: 1;
  z-index: 1;
}
</style>
