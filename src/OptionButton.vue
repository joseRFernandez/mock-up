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
  background: #b33cc8 0% 0% no-repeat padding-box;
  border-radius: 28px;
  opacity: 1;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.badge-icon {
  display: inline;
}
.badge-caption {
  color: #ffffff;
  display: inline;
  position: relative;
  left: 18px;
}
@media screen and (min-width: 768px) {
  .btn-wrapper {
    width: 113px;
    height: 18px;
    margin-right: 24px;
  }
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
