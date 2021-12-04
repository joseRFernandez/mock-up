<template>
  <input class="input-base-block" placeholder="type" />
</template>

<script>
export default {
  props: ['id', 'type'],
};
</script>

<style scoped>
.input-base-block {
  width: 313px;
  height: 40px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #b2b2b2;
  border-radius: 5px;
  opacity: 1;
  margin-bottom: 4px;
  color: #b2b2b2;
  padding-left: 18px;
}
@media screen and (min-width: 376px) {
  .input-base-block {
    top: 638px;
    left: 110px;
    width: 547px;
    height: 40px;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #b2b2b2;
    border-radius: 5px;
    opacity: 1;
  }
}
@media screen and (min-width: 769px) {
  .input-base-block {
    width: 384px;
    padding: 0;
  }
}
</style>
