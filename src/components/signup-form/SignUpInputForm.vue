<template>
  <div class="input-section-wrapper">
    <BaseInputBlock
      v-for="placeholder in placeholders"
      :key="placeholder.id"
      :placeholder="placeholder.type"
      class="base-input-item"
    />
  </div>
</template>

<script>
import BaseInputBlock from '../../BaseInputBlock.vue';

export default {
  components: { BaseInputBlock },
  data() {
    return {
      placeholders: [
        { id: 1, type: 'Full Name' },
        { id: 2, type: 'Pharmacy of Employment' },
        { id: 3, type: 'Job Title' },
        { id: 4, type: 'Email Address' },
        { id: 5, type: 'Phone Number' },
        { id: 6, type: 'Pharmacy Mailing Address' },
        { id: 7, type: 'Pharmacy Floor/Suite (optional)' },
        { id: 8, type: 'Pharmacy City' },
        { id: 9, type: 'Pharmacy State' },
        { id: 10, type: 'Pharmacy Zip Code' },
      ],
    };
  },
};
</script>
<style scoped>
.input-section-wrapper {
  position: absolute;
  top: 519px;
  left: 22px;
  right: 22px;
  height: 461px;
}
@media screen and (min-width: 738px) {
  .input-section-wrapper {
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
@media screen and (min-width: 1366px) {
  .input-section-wrapper {
    position: absolute;
    top: 373px;
    left: 134px;
    width: 384px;
    height: 461px;
  }
  .base-input-item {
    text-align: left;
    font: normal normal normal 16px/19px Lato;
    letter-spacing: 0px;
    /* color: #a88b8b; */
    color: red;
    opacity: 1;
    padding-left: 10px;
  }
}
</style>
