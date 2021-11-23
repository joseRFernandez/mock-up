<template>
  <div class="btn-wrapper">
    <div v-if="icon" class="badge-icon">
      <img :src="icon" />
    </div>
    <div class="badge-caption">
      {{ caption }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['icon', 'caption'],
};
</script>

<style scoped>
.btn-wrapper {
  width: 227px;
  height: 40px;
  background: #b33cc8 0% 0% no-repeat padding-box;
  border-radius: 28px;
  opacity: 1;
  /* text-align: center; */
}
.badge-icon {
  padding: 10px 9px 9px 56px;
  display: inline;
}
.badge-caption {
  display: inline;
  color: #ffffff;
}
</style>
