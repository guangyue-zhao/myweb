<template lang="html">
  <el-container>

    <myweb-header></myweb-header>

    <el-container>
      <el-main>Main</el-Main>
      <el-aside>Aside</el-Aside>
    </el-container>
    <el-footer>Footer</el-footer>
  </el-container>

</template>

<script>
import mywebHeader from '../components/header.vue';
export default {

  components:{
    'myweb-header':mywebHeader,
  }

}
</script>

<style lang="less" scoped>

</style>
