<template>
  <OptionButton
    v-for="badge in badges"
    :key="badge.id"
    :icon="badge.icon"
    :caption="badge.caption"
    class="GAC-badge-wrapper"
  />
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
</style>
