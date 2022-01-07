<template>
  <div class="GAC-badge-container">
    <OptionButton
      v-for="badge in conditionalBadges"
      :key="badge.id"
      :icon="badge.icon"
      :caption="badge.caption.toUpperCase()"
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
      mobile: null,
      tablet: null,
      desktop: null,
      badges: [
        {
          id: 1,
          icon: 'assets/text/text.png',
          caption: 'Text Card',
        },
        {
          id: 2,
          icon: 'assets/email/email.png',
          caption: 'Email Card',
        },
        {
          id: 3,
          icon: 'assets/print.svg',
          caption: 'Print Card',
        },
      ],
    };
  },

  beforeMount() {
    if (document.documentElement.clientWidth < 768) {
      this.mobile = true;
      this.tablet = false;
      this.desktop = false;
    } else if (
      document.documentElement.clientWidth >= 768 &&
      document.documentElement.clientWidth < 1366
    ) {
      this.mobile = false;
      this.tablet = true;
      this.desktop = false;
    } else if (document.documentElement.clientWidth >= 1366) {
      this.desktop = true;
      this.mobile = false;
      this.tablet = false;
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
      if (this.width < 768) {
        this.mobile = true;
        this.tablet = false;
        this.desktop = false;
      } else if (
        document.documentElement.clientWidth >= 768 &&
        document.documentElement.clientWidth < 1366
      ) {
        this.mobile = false;
        this.tablet = true;
        this.desktop = false;
      } else {
        this.desktop = true;
        this.tablet = false;
        this.mobile = false;
      }
    },
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
