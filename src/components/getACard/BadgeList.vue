<template>
  <div class="GAC-badge-container">
    <OptionButton
      v-for="badge in badges"
      :key="badge.id"
      :icon="badge.icon"
      :caption="badge.caption"
      class="GAC-badge-item"
    />
  </div>
</template>

<script>
import OptionButton from '../../OptionButton.vue';

export default {
  components: {
    OptionButton,
  },
  props: ['icon', 'caption'],
  data() {
    return {
      badges: [
        {
          id: 1,
          icon: 'assets/text/text.png',
          caption: 'TEXT CARD',
        },
        {
          id: 2,
          icon: 'assets/email/email.png',
          caption: 'EMAIL CARD',
        },
        {
          id: 3,
          icon: 'assets/print.svg',
          caption: 'PRINT CARD',
        },
      ],
    };
  },
};
</script>

<style scoped>
.GAC-badge-wrapper {
  position: absolute;
  top: 3933px;
  left: 10px;
  width: 319px;
  height: 40px;
  background: #b33cc8 0% 0% no-repeat padding-box;
  border-radius: 28px;
  opacity: 1;
}
@media screen and (min-width: 769px) {
  .GAC-badge-container {
    position: absolute;
    top: 2882px;
    left: 874px;
    width: 229px;
    height: 134px;
    opacity: 1;
  }
  .GAC-badge-item {
    width: 229px;
    margin: 21px 0;
  }
}
</style>
