<template>
  <OptionButton
    v-for="badge in badges"
    :key="badge.id"
    :icon="badge.icon"
    :caption="badge.caption"
  />
</template>

<script>
import OptionButton from './OptionButton.vue';

export default {
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
  components: {
    OptionButton,
  },
  props: ['icon', 'caption'],
};
</script>

<style></style>
