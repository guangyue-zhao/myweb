<template lang="html">
  <el-row>
    <el-col class="clock">
      <canvas id="clock" height="200px" width="200px"></canvas>
      <p class="description">青春须早为,岂能长少年。</p>
      <p class="pull-tar"> &mdash;&mdash;&nbsp; 孟郊《劝学》</p>
    </el-col>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span><i class="iconfont icon-wenjian icon"></i></i>分类</span>
      </div>
      <div v-for="o in 4" :key="o" class="text item">
        {{'列表内容 ' + o }}
      </div>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span><i class="iconfont icon icon-lianjieguanlian"></i>友情链接</span>
      </div>
      <div v-for="o in 4" :key="o" class="text item">
        {{'列表内容 ' + o }}
      </div>
    </el-card>
  </el-row>
</template>

<script>
export default {
  name: 'mywebAside',
  data(){
      return {

    };
  }
}
</script>

<style lang="less" scoped>
  .el-row{
    font-family: "Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }
  .el-card{
    font-family: "Microsoft YaHei","微软雅黑",Arial,sans-serif;
    color: #666;
  }
  .clock{
    text-align: center;
    padding: 20px 0;
  }
  .description{
    text-align: left;
    text-indent: 30px;
  }
  .icon{
    margin-right: 5px;
  }
  .text {
     font-size: 14px;
   }

 .item {
   margin-bottom: 18px;
 }

 .clearfix:before,
 .clearfix:after {
   display: table;
   content: "";
 }
 .clearfix:after {
   clear: both
 }

 .box-card {
   width: calc(100% - 2px);
   margin-bottom: 20px;
 }
</style>
