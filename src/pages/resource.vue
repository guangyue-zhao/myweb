<template lang="html">
  <el-row>
    <h1 class="pool-title">前端资源推荐</h1>
    <el-col class="category">
      <h2>CSS、JS</h2>
      <ul>
        <li><a href="">前端</a></li>
      </ul>
    </el-col>
    <el-col class="category">
      <h2>CSS、JS</h2>
      <ul>
        <li><a href="">前端</a></li>
      </ul>
    </el-col>
    <el-col class="category">
      <h2>CSS、JS</h2>
      <ul>
        <li><a href="">前端</a></li>
      </ul>
    </el-col>
    <el-col class="category">
      <h2>CSS、JS</h2>
      <ul>
        <li><a href="">前端</a></li>
      </ul>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data(){
    return {

    }
  }
}
</script>

<style lang="less" scroped>
  .pool-title{
    font-size:24px;
    color: #3c3c3c;
  }
  .category {
  }
  .category h2{
    font-size: 20px;
    color: #555;
  }
  .category li a{
    font-size: 17px;
    color: #555;
  }
  .category li a:hover{
    text-decoration: underline;
    color: #0098fe;
  }
</style>
