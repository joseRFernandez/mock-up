<template>
  <p>
    <strong>{{ caption }}</strong>
  </p>
  <p class="stat">{{ amount }}</p>
</template>

<script>
export default {
  props: ['id', 'caption', 'amount'],
};
</script>

<style scoped>
p {
  text-align: center;
  font: normal normal 20px Lato;
  letter-spacing: 0px;
  color: #262626;
  opacity: 1;
  line-height: 24px;
}

p.stat {
  width: 180px;
  height: 39px;
  text-align: center;
  font: normal normal 32px Lato;
  letter-spacing: 0px;
  color: #b33cc8;
  opacity: 1;
  margin: 0;
}
</style>
