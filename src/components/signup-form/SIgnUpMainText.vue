<template>
  <container>
    <div class="lightText">
      <p class="first">
        Sign up for the BuzzRx Pharmacist Newsletter to receive updates on our
        charitable giving program, our local community impact and how you can be
        a part of our mission to give back.
      </p>
    </div>
    <div class="boldText">
      <p class="second">
        For every entry we receive we’ll donate $5, up to $10K, to Make-A-Wish®
      </p>
    </div>
  </container>
</template>

<style scoped>
div {
  width: 331px;
}
.lightText {
  height: 74px;
  text-align: center;
}
.boldText {
  height: 61px;
}
p.first {
  margin: 0;
  font-size: 15px;
  line-height: 17px;
  font-weight: 100;
}
p.second {
  text-align: center;
  font: normal normal bold 18px/22px Lato;
  letter-spacing: 0px;
  color: #262626;
  margin: 0;
}
@media screen and (max-width: 768px) {
  .lightText {
    width: 683px;
    height: 34px;
  }
  .boldText {
    width: 683px;
    margin-top: 13px
  }
}
</style>
