<template>
  <section class="GAC-section-wrapper" v-if="!this.desktop">
    <GetACardText />
    <BuzzRxCard />
    <BadgeList />
  </section>
  <section v-else class="GAC-desktop-wrapper">
    <BuzzRxCard />
    <div class="GAC-desktop-text-and-badges-container">
      <GetACardText />
      <BadgeList />
    </div>
  </section>
</template>

<script>
import GetACardText from './GetACardText.vue';
import BuzzRxCard from './BuzzRxCard.vue';
import BadgeList from './BadgeList.vue';

export default {
  components: {
    GetACardText,
    BuzzRxCard,
    BadgeList,
  },
  data() {
    return {
      desktop: null,
    };
  },
  beforeMount() {
    if (document.documentElement.clientWidth >= 1366) {
      this.desktop = true;
    } else {
      this.desktop = false;
    }
  },
  mounted() {
    window.addEventListener('resize', this.getDimensions);
  },
  unmounted() {
    window.removeEventListener('resize', this.getDimensions);
  },
  methods: {
    getDimensions() {
      this.width = document.documentElement.clientWidth;
      if (this.width >= 1366) {
        this.desktop = true;
      } else {
        this.desktop = false;
      }
    },
  },
};
</script>

<style scoped>
.GAC-section-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  height: 526px;
}
@media screen and (min-width: 768px) {
  .GAC-section-wrapper {
    height: 667px;
  }
}
@media screen and (min-width: 1366px) {
  .GAC-desktop-wrapper {
    display: flex;
    flex-direction: row;
    height: 483px;
    justify-content: space-around;
    align-items: center;
  }
  .GAC-desktop-text-and-badges-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
  }
}
</style>
