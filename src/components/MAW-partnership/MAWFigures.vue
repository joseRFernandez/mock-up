<template>
  <div class="maw-figures-wrapper">
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
.maw-figures-wrapper {
  width: 180px;
  text-align: center;
  margin-top: 39px;
}
@media screen and (min-width: 768px) {
  .maw-figures-wrapper {
    width: 172px;
    height: 187px;
    text-align: center;
    font: normal normal bold 20px/24px Lato;
    letter-spacing: 0px;
    color: #262626;
    opacity: 1;
  }
}
@media screen and (min-width: 1366px) {
  .maw-figures-wrapper {
    top: 118px;
    left: 899px;
    width: 180px;
    height: 24px;
  }
}
</style>
