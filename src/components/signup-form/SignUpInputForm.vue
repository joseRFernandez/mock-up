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
  width: 88.27%;
  height: 461px;
  margin-top: 5px;
}
@media screen and (min-width: 768px) {
  .input-section-wrapper {
    width: 71.22%;
    height: 461px;
    border-radius: 5px;
  }
}
@media screen and (min-width: 1366px) {
  .input-section-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 384px;
    height: 461px;
  }
  .base-input-item {
    text-align: left;
    font: normal normal normal 16px/19px Lato;
    letter-spacing: 0px;
    color: red;
    opacity: 1;
    padding-left: 1.15em;
  }
}
</style>
