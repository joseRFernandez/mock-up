<template>
  <div class="meet-audrey-text">
    <p>
      Audrey is a 12-year-old girl from Arizona with a passion for fashion. She
      spends her free time flipping through style magazines and listening to her
      favorite songs. While Audrey’s interests are not uncommon for girls her
      age, her life is very different due to a nervous system disorder she
      struggles with daily. Unbeknownst to her parents, Audrey had a stroke at
      birth and was diagnosed at 6 months old with a vascular disorder that
      causes an abnormal tangle of blood vessels connecting arteries and veins,
      which disrupts normal blood flow and oxygen circulation. At 14 months old,
      she had a lifesaving surgery, but continues to have daily seizures, which
      began when she was 3 years old.
    </p>

    <br />
    <p v-if="!tablet" class="meet-audrey-subsequent-paragraph">
      For the past five years, she has been educated by tutors from noon to 5
      p.m. When she’s not at school, Audrey has doctor or therapy appointments
      to adjust her leg braces or medication. Sometimes, she has multiple
      doctor’s appointments on the same day.<br />
    </p>
    <br />
    <p v-if="!tablet" class="meet-audrey-subsequent-paragraph">
      “My daughter is probably one of the strongest people I know. She never
      complains about anything. Even if she’s having a bad seizure day, she’s
      like, ‘I got this,’ and it makes you appreciate the life that you have,”
      said Lisa, Audrey’s mom.
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tablet: null,
    };
  },
  beforeMount() {
    if (
      document.documentElement.clientWidth >= 768 &&
      document.documentElement.clientWidth < 1366
    ) {
      this.tablet = true;
    } else {
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
      if (this.width >= 768 && this.width <= 1366) {
        this.tablet = true;
      } else {
        this.tablet = false;
      }
    },
  },
};
</script>

<style scoped>
.meet-audrey-text {
  width: 88.53%;
  margin-top: 17px;
  text-align: left;
  font: normal normal normal 16px/24px Lato;
  letter-spacing: 0px;
  color: #262626;
  opacity: 1;
  line-height: 24px;
}
@media screen and (min-width: 768px) {
  .meet-audrey-text {
    width: 266px;
    height: 476px;
  }
}
@media screen and (min-width: 1366px) {
  .meet-audrey-text {
    width: 408px;
    height: 588px;
  }
}
</style>
