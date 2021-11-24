<template>
  <div class="GAC-badge-container">
    <OptionButton
      v-for="badge in conditionalBadges"
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
  computed: {
    conditionalBadges() {
      if (this.mobile) {
        console.log('2 badges');
        return this.badges.filter((el) => {
          return el.id < 3;
        });
      } else {
        console.log('should be 3');
        return this.badges;
      }
    },
  },
  props: ['icon', 'caption'],
  data() {
    return {
      mobile: null,
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

  beforeMount() {
    if (document.documentElement.clientWidth <= 375) {
      this.mobile = true;
    } else {
      this.mobile = false;
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
      if (this.width <= 375) {
        this.mobile = true;
      } else {
        this.mobile = false;
      }
    },
  },
};
</script>

<style scoped>
.GAC-badge-container {
  position: absolute;
  top: 3933px;
  left: 35px;
  width: 319px;
  height: 40px;
}
@media screen and (min-width: 376px) {
  .GAC-badge-container {
    display: flex;
    top: 3294px;
    left: 89px;
    width: 591px;
    height: 40px;
  }
  .GAC-badge-item {
    height: 40px;
    width: 181px;
  }
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
  }
}
</style>
