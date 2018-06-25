<template lang="html">
  <article class="clearfix">
    <el-col class="article">
      <el-row class="article-header">
        <h2 class="article-title">前端监控--Puppeteer终探</h2>
        <p class="article-desc">
          <i class="iconfont icon-riqi icon"> </i><time>2018.5.1</time>&nbsp;&nbsp;
          <i class="iconfont icon-wenjianjia"> </i><span class="category">Node.js</span>
        </p>
      </el-row>
      <el-row class="article-body">
        <div class="article-summary">
          <p>  <strong>先谈谈前端监控的现状</strong><br>  目前市面上的前端监控系统，多是记录资源加载时长、系统抛错、统计埋点、UV/PV…<br>  对开发人员来说就是嵌入监控js脚本，监控的前提是：<strong>该监控脚本能正常加载并执行</strong><br>  那么问题就来了，<strong>假如某个站点CDN、DNS出现异常，监控脚本完全没机会加载（更不用说运行了）</strong><br>  站点Owner可能很长时间都不知道自己的网站挂了？！监控服务形同虚设…</p>
        </div>
        <el-row class="btn">
          <el-button>阅读全文<i class="el-icon-d-arrow-right"></i></el-button>
        </el-row>
      </el-row>
    </el-col>
    <el-col class="article">
      <el-row class="article-header">
        <h2 class="article-title">前端监控--Puppeteer终探</h2>
        <p class="article-desc">
          <i class="iconfont icon-riqi icon"> </i><time>2018.5.1</time>&nbsp;&nbsp;
          <i class="iconfont icon-wenjianjia"> </i><span class="category">Node.js</span>
        </p>
      </el-row>
      <el-row class="article-body">
        <div class="article-summary">
          <p>  <strong>先谈谈前端监控的现状</strong><br>  目前市面上的前端监控系统，多是记录资源加载时长、系统抛错、统计埋点、UV/PV…<br>  对开发人员来说就是嵌入监控js脚本，监控的前提是：<strong>该监控脚本能正常加载并执行</strong><br>  那么问题就来了，<strong>假如某个站点CDN、DNS出现异常，监控脚本完全没机会加载（更不用说运行了）</strong><br>  站点Owner可能很长时间都不知道自己的网站挂了？！监控服务形同虚设…</p>
        </div>
        <el-row class="btn">
          <router-link :to="{ name: '', params: {} }"><el-button>阅读全文<i class="el-icon-d-arrow-right"></i></el-button></router-link>
        </el-row>
      </el-row>
    </el-col>
    <el-col class="article">
      <el-row class="article-header">
        <h2 class="article-title">前端监控--Puppeteer终探</h2>
        <p class="article-desc">
          <i class="iconfont icon-riqi icon"> </i><time>2018.5.1</time>&nbsp;&nbsp;
          <i class="iconfont icon-wenjianjia"> </i><span class="category">Node.js</span>
        </p>
      </el-row>
      <el-row class="article-body">
        <div class="article-summary">
          <p>  <strong>先谈谈前端监控的现状</strong><br>  目前市面上的前端监控系统，多是记录资源加载时长、系统抛错、统计埋点、UV/PV…<br>  对开发人员来说就是嵌入监控js脚本，监控的前提是：<strong>该监控脚本能正常加载并执行</strong><br>  那么问题就来了，<strong>假如某个站点CDN、DNS出现异常，监控脚本完全没机会加载（更不用说运行了）</strong><br>  站点Owner可能很长时间都不知道自己的网站挂了？！监控服务形同虚设…</p>
        </div>
        <el-row class="btn">
          <router-link to="/viewArticle"><el-button>阅读全文<i class="el-icon-d-arrow-right"></i></el-button></router-link>
        </el-row>
      </el-row>
    </el-col>
  </article>
</template>

<script>

import mywebHeader from '../components/header.vue';
import axios from 'axios'


export default {
  data(){
    return {}
  },
  created(){
    this.loadArticle();
  },
  methods:{
    loadArticle(){
      axios('http://www.zhaoguangyue.cn/api/index').then(function(res){
        console.log( res.data );
      }).then(function(){

      });
    }
  }
}
</script>

<style lang="less" scoped>

  .article:first-child{
    margin-top: 0;
  }
  .article{
    padding: 40px;
    margin: 20px 0;
    box-shadow: 0 -1px 2px 0 rgba(0,0,0,0.12), 0 2px 2px 0 rgba(0,0,0,0.15), 0 3px 1px -2px rgba(0,0,0,0.06), 0 1px 5px 0 rgba(0,0,0,0.12);

    .article-title{
      text-align: center;
      font-size: 23px;
      color: #444;
    }
    .article-desc{
      text-align: center;
    }

    .icon{
      font-size: 14px;
      margin-right: 8px;
      vertical-align: 1px;
    }
    .btn{
      text-align: center;
      margin-top: 50px;
    }
    .el-button{
      border: 2px solid #333;
      transition: all .3s;
      .el-icon-d-arrow-right{
        margin-left: 5px;
        transition: all .3s;
      }
    }
    .el-button:hover {
      background: #333;
    }
    .el-button:hover .el-icon-d-arrow-right{
      transform: translateX(10px);
    }
  }
</style>
