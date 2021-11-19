<template>
  <span @click="displayProps()">
    <div class="btn" v-if="icon">
      <img :src="icon" />
    </div>
    <div class="caption">
      {{ caption }}
    </div>
  </span>
</template>

<script>
export default {
  props: ['icon', 'caption'],
  methods: {
    displayProps() {
      console.log(this.$props);
    },
  },
};
</script>

<style scoped>
span {
  background: #b33cc8 0% 0% no-repeat padding-box;
  border-radius: 28px;
  opacity: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 319px;
  height: 40px;
  margin: 21px;
}
.btn {
  padding: 10.29px 18.8px 9.45px 100.75px;
}
.caption {
  text-align: left;
  font: normal normal 16px Lato;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  width: 112.56px;
  line-height: 18px;
}

img {
  width: 13px;
  height: 20px;
  padding: 10.29px 0 9.45px;
}
</style>
