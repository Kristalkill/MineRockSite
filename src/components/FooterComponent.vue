
<template>
  <footer class="footer-distributed">

    <div class="footer-right">
      <a href="#"><i class="fa fa-facebook"></i></a>
      <a href="#"><i class="fa fa-youtube"></i></a>
      <a href="https://github.com/Kristalkill/MineRockSite"><i class="fa fa-github"></i></a>
    </div>

    <div class="footer-left">
      Minerock &copy; 2021-2022 v{{ version }}
    </div>

  </footer>
</template>
<script lang="ts" setup>
const version = __APP_VERSION__
</script>
<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Roboto:400,500,300,700);
footer {
  display: inline-block;
  position: relative;
}
.footer-distributed {
  background-color: #292c2f;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  width: 100%;
  text-align: left;
  font: normal 16px sans-serif;
  padding: 25px 50px;
  .footer-left {
      color: #8f9296;
      font-size: 1.90em;
      margin-top: 6px;
    float: none;
    padding: 0;
  }
  .footer-right {
    float: right;
    margin-top: 6px;
    max-width: 180px;
    a {
      display: inline-block;
      width: 35px;
      height: 35px;
      background-color: #33383b;
      border-radius: 2px;
      font-size: 20px;
      color: #ffffff;
      text-align: center;
      line-height: 35px;
      margin-left: 3px;
      transition: all .25s;
    }
  }
}
@media (max-width: 600px) {
  .footer-distributed {
    .footer-left {
      text-align: center;
    }
    .footer-right {
      text-align: center;
      float: none;
      margin: 0 auto 20px;
    }
  }
}


</style>