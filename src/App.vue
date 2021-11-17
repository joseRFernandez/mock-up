<template>
  <body class="mobile">
    <TheNavbar />
    <TheHeader />
    <TheFooter />
  </body>
</template>

<script>
import TheNavbar from './components/navbar/TheNavbar.vue';
import TheFooter from './components/footer/TheFooter.vue';
import TheHeader from './components/header/TheHeader.vue';
export default {
  name: 'App',
  components: { TheNavbar, TheFooter, TheHeader },
};
</script>

<style>
html {
  font-family: 'Lato', sans-serif;
  /* font-family: 'Omnes', sans-serif; */
}
body {
  margin: 0;
}
.mobile {
  top: 0px;
  left: 0px;
  width: 375px;
  height: 4796px;
  margin: 0;

  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;
}
</style>
