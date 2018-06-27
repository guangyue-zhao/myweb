<template lang="html">
  <el-row>
    <el-col class="clock">
      <canvas id="clock" height="200px" width="200px"></canvas>
      <p class="description">青春须早为,岂能长少年。</p>
      <p class="pull-tar"> &mdash;&mdash;&nbsp; 孟郊《劝学》</p>
    </el-col>
    <el-card class="box-card" body-style="border: 1px solid #dfdfdf">
      <div slot="header" class="clearfix el-">
        <span><i class="iconfont icon-wenjian icon"></i></i>分类</span>
      </div>
      <div class="text item" v-for = "(item,index) in categories" :key="index">
        <router-link class="item-content" :to="{ path: '/archive/category' ,query:{'_id': item._id }}">{{item.name}}</router-link>
      </div>

    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span><i class="iconfont icon icon-lianjieguanlian"></i>我的信息</span>
      </div>

      <div class="text item">
        <p><i class="iconfont icon-qq mr5"></i>583547322</p>
        <p><i class="iconfont icon-big-WeChat icon" ></i>guangyue_zhao</p>
        <p><a href="https://github.com/guangyue-zhao" target="_blank"><i class="iconfont icon-github icon"></i>github/guangyue_zhao</a></p>
        <p><a href="https://weibo.com/3958438475/profile?topnav=1&wvr=6&is_all=1" target="_blank"><i class="iconfont icon-weibo icon"></i>广越zgy</a></p>
      </div>
    </el-card>
  </el-row>
</template>

<script>
import axios from 'axios'
export default {
  name: 'mywebAside',
  data(){
      return {
        categories:{}
    };
  },
  created(){
    this.getlinks();
  },
  methods:{
    getlinks(){
      axios('http://www.zhaoguangyue.cn/api/getcategory').then( (response) => {
          this.categories = response.data.data;
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .el-row{
    font-family: "Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }
  .el-card{
    font-family: "Microsoft YaHei","微软雅黑",Arial,sans-serif;
    color: #333;
    border: 0 none;
  }

  .clock{
    text-align: center;
    padding: 20px 0;
  }
  canvas{
    margin-bottom: 20px;
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
  .item a{
    color: #3c3c3c;
  }
  .box-card {
   width: calc(100% - 2px);
   margin-bottom: 20px;
  }
  .box-card .el-card__header{
    background: #000;
  }
 .icon{
   margin-right: 5px;
   vertical-align: -2px;
 }
 .mr5{
   margin-right: 5px;
 }
 .item a:hover{
   color: #0098fe;
 }
</style>
