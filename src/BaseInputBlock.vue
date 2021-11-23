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
  width: 384px;
  height: 40px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #b2b2b2;
  border-radius: 5px;
  opacity: 1;
}
</style>
