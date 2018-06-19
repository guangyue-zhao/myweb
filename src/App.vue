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
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
import mywebHeader from './components/header'
import mywebAside from './components/aside'
export default {
  name: 'App',
  components: {
    'mywebHeader': mywebHeader,
    'mywebAside': mywebAside,
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
  }
  .el-aside{
    /* background: #369; */
  }
  .el-footer{
    background: #409EFF;
  }
</style>
