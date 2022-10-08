<template>
  <div class="GAC-badge-container">
    <OptionButton v-for="badge in conditionalBadges" :key="badge.id" :icon="badge.icon" :caption="badge.caption.toUpperCase()" class="GAC-badge-item" />
  </div>
</template>

<script>
import OptionButton from '../../OptionButton.vue';
import Resize from "../../mixins/resize"
export default {
  components: {
    OptionButton,
  },
  mixins: [Resize],
  computed: {
    conditionalBadges() {
      if (this.mobile) {
        return this.badges.filter((el) => {
          return el.id < 3;
        });
      } else if (this.tablet) {
        const result = this.badges.slice().sort((a, b) => b.id - a.id);
        return result;
      } else {
        return this.badges;
      }
    },
  },
  props: ['icon', 'caption'],
  data() {
    return {

      badges: [
        {
          id: 1,
          icon: 'https://github.com/joseRFernandez/mock-up/blob/main/src/assets/text/text.png?raw=true',
          caption: 'Text Card',
        },
        {
          id: 2,
          icon: 'https://raw.githubusercontent.com/joseRFernandez/mock-up/main/src/assets/email/email.png',
          caption: 'Email Card',
        },
        {
          id: 3,
          icon: 'https://raw.githubusercontent.com/joseRFernandez/mock-up/612cb76989926bf043fe626715c2c364480f18cf/src/assets/print.svg',
          caption: 'Print Card',
        },
      ],
    };
  },
};
</script>

<style scoped>
.GAC-badge-container {
  margin-top: -30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 88%;
}
.GAC-badge-item {
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  margin-bottom: 13px;
}

@media screen and (min-width: 768px) {
  .GAC-badge-container {
    justify-content: space-around;
    flex-direction: row;
    width: 77%;
    height: 40px;
    margin-top: unset;
  }
  .GAC-badge-item {
    height: 40px;
    width: 181px;
    justify-content: center;
  }
}
@media screen and (min-width: 1366px) {
  .GAC-badge-container {
    display: initial;
    width: 229px;
    height: 146px;
    opacity: 1;
  }
  .GAC-badge-item {
    width: 229px;
  }
}
</style>
