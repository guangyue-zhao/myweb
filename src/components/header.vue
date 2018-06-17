<template lang="html">
    <el-row :gutter="0">
      <el-col :span="10" class="<hidden-xs-only></hidden-xs-only>">123</el-col>
      <el-col :span="14">
        <ul class="clearfix">
          <li class="item"><router-link to="/">首页</router-link> </li>
          <li class="item"><router-link to="/archive/">归档</router-link></li>
          <li class="item"><router-link to="/resource/">资源</router-link></li>
          <li class="item"><router-link to="/about/">关于</router-link></li>
        </ul>
      </el-col>
    </el-row>
</template>

<script>
  export default {
    name: 'myweb-header',
  }
</script>

<style lang="less" scoped>

</style>
