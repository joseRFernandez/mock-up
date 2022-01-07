<template>
  <div class="navbar-logo-container">
    <img :src= "path" class="navbar-buzz-logo" />
  </div>
</template>

<script>
import {path} from '../../../secrets'
export default {
  data() {
    return {
      path: path + "/assets/BRX_Logo.png"
    }
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
