<template lang="html">
  <el-col>
    <h1 class="archive">文章归档</h1>
    <el-row class="sort">
      <h2 class="sort-title">
        <i class="line"></i>
        <i class="circle"></i>
        <span class="sort-titlename">2018</span>
      </h2>
      <ul class="sort-list">
        <li class="sort-item">
          <i class="line"></i>
          <i class="circle"></i>
          <i class="iconfont icon-riqi icon"></i>
          <span class="item-time">4.5</span>
          <span class="item-content">前端资源</span>
        </li>
        <li class="sort-item">
          <i class="line"></i>
          <i class="circle"></i>
          <i class="iconfont icon-riqi icon"></i>
          <span class="item-time">5.6</span>
          <span class="item-content">前端资源</span>
        </li>
        <li class="sort-item">
          <i class="line"></i>
          <i class="circle"></i>
          <i class="iconfont icon-riqi icon"></i>
          <span class="item-time">5.6</span>
          <span class="item-content">前端资源</span>
        </li>
      </ul>
    </el-row>

    <el-row class="sort">
      <h2 class="sort-title">
        <i class="line"></i>
        <i class="circle"></i>
        <span class="sort-titlename">2018</span>
      </h2>
      <ul class="sort-list">
        <li class="sort-item">
          <i class="line"></i>
          <i class="circle"></i>
          <i class="iconfont icon-riqi icon"></i>
          <span class="item-time">4.5</span>
          <span class="item-content">前端资源</span>
        </li>
        <li class="sort-item">
          <i class="line"></i>
          <i class="circle"></i>
          <i class="iconfont icon-riqi icon"></i>
          <span class="item-time">5.6</span>
          <span class="item-content">前端资源</span>
        </li>
        <li class="sort-item">
          <i class="line"></i>
          <i class="circle"></i>
          <i class="iconfont icon-riqi icon"></i>
          <span class="item-time">5.6</span>
          <span class="item-content">前端资源</span>
        </li>
      </ul>
    </el-row>

    <el-row class="sort">
      <h2 class="sort-title">
        <i class="line"></i>
        <i class="circle"></i>
        <span class="sort-titlename">2017</span>
      </h2>
      <ul class="sort-list">
        <li class="sort-item">
          <i class="line"></i>
          <i class="circle"></i>
          <i class="iconfont icon-riqi icon"></i>
          <span class="item-time">4.5</span>
          <span class="item-content">前端资源</span>
        </li>
        <li class="sort-item">
          <i class="line"></i>
          <i class="circle"></i>
          <i class="iconfont icon-riqi icon"></i>
          <span class="item-time">5.6</span>
          <span class="item-content">前端资源</span>
        </li>
        <li class="sort-item">
          <i class="line"></i>
          <i class="circle"></i>
          <i class="iconfont icon-riqi icon"></i>
          <span class="item-time">5.6</span>
          <span class="item-content">前端资源</span>
        </li>
      </ul>
    </el-row>
  </el-col>
</template>

<script>
export default {
}
</script>

<style lang="less" scroped>
  .archive{
    font-size: 24px;
    color: #3c3c3c;
  }
  .icon{
    font-size: 14px;
    vertical-align: top;
    color: #666;
  }
  .sort-title{
    font-size: 22px;
    color: #555;
    position: relative;
    text-indent: 20px;
    line-height: 30px;
  }

  .sort-title .circle{
    position: absolute;
    top: 9px;
    left: 0;
    width: 10px;
    height: 10px;
    background: #333;
    border-radius: 50%;
  }
  .sort-title .line{
    width: 2px;
    height: 45px;
    background: #bbb;
    position: absolute;
    top: 14px;
    left: 4px;
    transition: all .5s;
  }
  .sort-list{
    padding-left: 0px
  }
  .sort-item{
    list-style: none;
    position: relative;
    text-indent: 20px;
    line-height: 28px;
  }
  .sort-item .item-time{
    font-size: 15px;
    margin-right: 10px;
    vertical-align: middle;
    color: #666;
  }
  .sort-item .item-content{}
  .sort-item .line{
    width: 2px;
    height: 25px;
    background: #bbb;
    position: absolute;
    top: 14px;
    left: 4px;
    transition: all .5s;
  }
  .sort-item:last-child .line{
    height: 60px;
  }
  .sort:last-child .sort-item:last-child .line{
    height: 0px;
  }
  .sort-item .circle{
    position: absolute;
    top: 10px;
    left: 1px;
    width: 8px;
    height: 8px;
    background: #999;
    border-radius: 50%;

  }
</style>
