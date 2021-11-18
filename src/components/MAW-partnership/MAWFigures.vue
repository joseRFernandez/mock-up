<template>
  <div>
    <BaseMAWFigures
      v-for="element in figures"
      :key="element.id"
      :caption="element.caption"
      :amount="element.amount"
    />
  </div>
</template>

<script>
import BaseMAWFigures from './BaseMAWFigures.vue';

export default {
  components: {
    BaseMAWFigures,
  },
  props: ['id', 'caption', 'amount'],
  data() {
    return {
      figures: [
        {
          id: 1,
          caption: 'Donated to Date:',
          amount: '$5,100,000',
        },
        {
          id: 2,
          caption: 'Wishes Granted:',
          amount: '510',
        },
      ],
    };
  },
};
</script>
<style scoped>
div {
  width: 180px;
  height: 39px;
  margin: 39px 98px 0;
  text-align: center;
}
</style>
