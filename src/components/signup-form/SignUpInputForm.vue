<template>
  <input
    v-for="placeholder in placeholders"
    :key="placeholder.id"
    :placeholder="'   ' + placeholder.type"
  />
</template>

<script>
export default {
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
input {
  width: 325px;
  height: 36px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #b2b2b2;
  border-radius: 5px;
  opacity: 1;
  margin: 5px 0 0;
  color: #b2b2b2;
  font-size: 16px;
  opacity: 50%;
}
</style>
