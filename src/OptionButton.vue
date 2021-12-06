<template>
  <div class="btn-wrapper">
    <img v-if="icon" :src="icon" class="badge-icon" />

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
  width: 85%;
  height: 40px;
  background: #b33cc8 0% 0% no-repeat padding-box;
  border-radius: 28px;
  opacity: 1;
  margin-bottom: 13px;
}
@media screen and (min-width: 768px) {
  .btn-wrapper {
    width: 113px;
    height: 18px;
    margin-right: 24px;
  }
}

.badge-icon {
  position: relative;
  top: 10px;
  left: 28px;
}
.badge-caption {
  color: #ffffff;
  position: relative;
  top: -17px;
  left: 54px;
}

@media screen and (min-width: 769px) {
  .badge-icon {
    position: relative;
    top: 13px;
    left: 56.23px;
    width: 13px;
    height: 20px;
  }
  .badge-caption {
    color: #ffffff;
    position: relative;
    top: -17px;
    left: 78px;
  }
}
</style>
