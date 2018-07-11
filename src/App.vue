<template>
  <el-container class="body-container " id="app">
    <el-header class="no-padding">
      <myweb-header></myweb-header>
    </el-header>
    <el-container class="container">
      <el-main>
        <router-view></router-view>
      </el-Main>
      <el-aside class="hidden-xs-only">
        <myweb-aside></myweb-aside>
      </el-Aside>
    </el-container>
    <el-footer>
      <myweb-footer></myweb-footer>
    </el-footer>
  </el-container>
</template>


<script>
import mywebHeader from './components/header'
import mywebAside from './components/aside'
import mywebFooter from './components/footer'
export default {
  name: 'App',
  components: {
    'mywebHeader': mywebHeader,
    'mywebAside': mywebAside,
    'mywebFooter': mywebFooter,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
  .container{
    /* background: #369; */
    padding-top: 30px;
    border-top: 2px solid #ddd;
  }
  .el-header{
    margin: 44px 0 16px 0;
    /* background: #67C23A; */
  }
  .el-main{
    /* background: #F56C6C; */
    padding: 0 10px;
  }
  .el-aside{
  }
  .el-footer{
    margin-top: 20px;
    border-top: 2px solid #ddd;
  }
  @media print,screen and (max-width: 768px ) {
    .el-header{
      margin-top: 30px;
      height: auto!important;
    }
  }

  @-webkit-keyframes lightSpeedIn {
  from {
    -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);
    transform: translate3d(100%, 0, 0) skewX(-30deg);
    opacity: 0;
  }

  60% {
    -webkit-transform: skewX(20deg);
    transform: skewX(20deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: skewX(-5deg);
    transform: skewX(-5deg);
    opacity: 1;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  }

  @keyframes lightSpeedIn {
  from {
    -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);
    transform: translate3d(100%, 0, 0) skewX(-30deg);
    opacity: 0;
  }

  60% {
    -webkit-transform: skewX(20deg);
    transform: skewX(20deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: skewX(-5deg);
    transform: skewX(-5deg);
    opacity: 1;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  }

  .lightSpeedIn {
  -webkit-animation-name: lightSpeedIn;
  animation-name: lightSpeedIn;
  -webkit-animation-timing-function: ease-out;
  animation-timing-function: ease-out;
  }

</style>
