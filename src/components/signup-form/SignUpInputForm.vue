<template>
  <div class="input-section-wrapper">
    <BaseInputBlock
      v-for="placeholder in placeholders"
      :key="placeholder.id"
      :placeholder="placeholder.type"
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
@media screen and (min-width: 769px) {
  .input-section-wrapper {
    position: absolute;
    top: 373px;
    left: 134px;
    width: 384px;
    height: 461px;
    opacity: 1;
  }
}
</style>
