<template>
  <el-container class="body-container " id="app">
    <el-header>
      <myweb-header></myweb-header>
    </el-header>
    <el-container>
      <el-main>
        <router-view></router-view>
      </el-Main>
      <el-aside class="hidden-xs-only">Aside</el-Aside>
    </el-container>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
import mywebHeader from './components/header'
export default {
  name: 'App',
  components: {
    'mywebHeader': mywebHeader,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
  .el-container{
    background: #369;
  }
  .el-header{
    background: #67C23A;
  }
  .el-main{
    background: #F56C6C;
  }
  .el-aside{
    background: #E6A23C;
  }
  .el-footer{
    background: #409EFF;
  }
</style>
