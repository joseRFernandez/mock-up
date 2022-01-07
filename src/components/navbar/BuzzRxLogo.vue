<template>
  <div class="navbar-logo-container">
    <img :src="image" class="navbar-buzz-logo" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: 'assets/BRX_Logo.png',
    };
  },
};
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
