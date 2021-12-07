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
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #b2b2b2;
  border-radius: 5px;
  opacity: 1;
  margin-bottom: 7px;
  color: #b2b2b2;
  padding-left: 18px;
}
::placeholder {
  color: #b2b2b2;
}
@media screen and (min-width: 1366px) {
  .input-base-block {
    width: 384px;
    padding: 0;
  }
}
</style>
