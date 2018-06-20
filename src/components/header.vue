<template lang="html">
  <el-row :gutter="0" class="clearfix">
    <el-col :sm="10" :xs="24" class="">
      <div class="logo">
        <img src="/static/imgs/logo.jpg" alt="">
        <div class="logoname">前端进阶日记</div>
        <p class="motto">望时而待之，熟与应时而使之！</p>
      </div>
    </el-col>
    <el-col :sm="14" :xs="24" class="pull-tar" >
      <el-menu  :default-active="activeIndex"  text-color="#101010" active-text-color="#0098FE" class="" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1"><router-link to="/"><i class="iconfont icon-zhuye"></i><span>首页</span></router-link> </el-menu-item>
        <el-menu-item index="2"><router-link to="/archive/"><i class="iconfont icon-fenlei201"></i><span>归档</span></router-link></el-menu-item>
        <el-menu-item index="3"><router-link to="/resource/"><i class="iconfont icon-ziyuanku"></i><span>资源</span></router-link></el-menu-item>
        <el-menu-item index="4"><router-link to="/about/"><i class="iconfont icon icon-wode-active"></i><span>关于</span></router-link></el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: 'myweb-header',
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }

</script>

<style lang="less" scoped >
  .el-menu{
    display: inline-block;
  }
  .el-menu-item{
    height: 50px;
    padding: 0;
    overflow: hidden;
  }
  .el-menu-item a{
    color: #666;
    display: block;
    padding: 0 30px;
    font-size: 16px;
    transition: all .5s;
  }
  .el-menu-item.is-active a{
    color: rgba(10,10,10,1)!important;
  }
  .el-menu-item:hover a{
    color: rgba(10,10,10,1)!important;
  }
  .el-menu-item span{
    vertical-align: top;
  }
  .el-menu-item .iconfont{
    vertical-align: top;
    margin-right: 3px;
    transition: all .5s;
    color: #666;
  }
  .el-menu-item:hover .iconfont{
    color: rgba(10,10,10,1)!important;
  }
  .el-menu-item.is-active .iconfont{
    color: rgba(10,10,10,1)!important;
  }
  .el-menu--horizontal {
    border-bottom: 0;
  }
  .logo{
    text-indent: 100px;
    height: 50px;
    position: relative;
  }
  .logo img{
    width: 80px;
    height: 80px;
    background: #369;
    border-radius: 50%;
    position: absolute;
    vertical-align:bottom;
    bottom: -10px;
  }
  .logo .logoname{
    height: 30px;
    font-size: 26px;
    color: #333;
  }
  .logo .motto{
    height: 20px;
    font-size: 14px;
    margin: 0;
    margin-top: 5px;
    color: #666;
  }
  @media print,screen and (max-width: 768px ) {
    .el-menu-item a{
      padding: 0 20px;;
    }
    .logo{
      margin-bottom: 20px;
      padding-left: 20px;
      position: relative;
    }
  }
</style>
