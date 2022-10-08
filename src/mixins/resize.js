export default {
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
  data() {
    return {
      mobile: null,
      tablet: null,
      desktop: null,
    };
  },
  methods: {
    getDimensions() {
      this.width = document.documentElement.clientWidth;
      if (this.width > 768) {
        this.desktop = true;
      } else {
        this.desktop = false;
      }
    },
  },
};
