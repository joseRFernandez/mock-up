<template>
  <p class="maw-paragraph">
    <strong>{{ caption }}</strong>
  </p>
  <p class="maw-paragraph-stat">{{ amount }}</p>
</template>

<script>
export default {
  props: ['id', 'caption', 'amount'],
};
</script>

<style scoped>
.maw-paragraph {
  text-align: center;
  font: normal normal 20px Lato;
  letter-spacing: 0px;
  color: #262626;
  opacity: 1;
  line-height: 24px;
  margin: 0%;
}

.maw-paragraph-stat {
  width: 180px;
  height: 39px;
  text-align: center;
  font: normal normal 32px Lato;
  letter-spacing: 0px;
  color: #b33cc8;
  opacity: 1;
  margin: 8px 0 35px;
}
</style>
