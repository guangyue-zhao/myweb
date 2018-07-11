<template lang="html">
  <article class="clearfix">
    <el-col class="article" v-for="(item,index) in arts" :key="index">
      <el-row class="article-header">
        <h2 class="article-title">{{item.title}}</h2>
        <p class="article-desc">
          <i class="iconfont icon-riqi icon"> </i><time>{{ item.createTime | dateformat( 'MMM. DD YYYY') }}</time>&nbsp;&nbsp;
          <i class="iconfont icon-wenjianjia"> </i><span class="category">{{item.category.name}}</span>
        </p>
      </el-row>
      <el-row class="article-body">
        <div class="article-summary" v-html="item.introduction">
        </div>
        <el-row class="btn">
          <router-link :to="{ path: '../viewArticle' ,query:{'_id': item._id }}" @click.native = 'getId(item.id)' ><el-button>阅读全文<i class="el-icon-d-arrow-right"></i></el-button></router-link>
        </el-row>
      </el-row>
    </el-col>
    <div class="backTop" @click="backTop()" :class = "{showBackTop : backTopShow}"><i class="iconfont icon-huidaodingbu"></i></div>
  </article>
</template>

<script>

import mywebHeader from '../components/header.vue';
import axios from 'axios'
import moment from 'moment'


export default {
  data(){
    return {
      arts:{},
      artId:'',
      backTopShow: false
    }
  },
  created(){
    this.loadArticle();
  },
  filters:{
    dateformat(time, data ){
      return moment(time).format(data);
    }
  },
  methods:{
    loadArticle(){
      axios('http://api.zhaoguangyue.com/api/index').then( (response) => {
        this.arts = response.data.data;
      });
    },
    getId(event){
      this.$store.commit('VIEW_ARTICLE',event);
    },
    handleScroll(){
      this.scrollTop = document.pageYOffset|| document.documentElement.scrollTop||document.body.scrollTop;

      if(this.scrollTop> 100){
        this.backTopShow = true;
      }else{
        this.backTopShow = false;
      }
    },
    backTop(){
       document.documentElement.scrollTop = document.body.scrollTop = 0 ;
    },
  },
  mounted(){
    window.addEventListener('scroll',this.handleScroll)
  },
}
</script>

<style lang="less" scoped>

  .article:first-child{
    margin-top: 0;
  }
  .article{
    padding: 40px;
    animation: lightSpeedIn .5s;
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
  .backTop{
    transition: all .3s ;
    width: 38px;
    height: 38px;
    border: 1px solid #0098fe;
    position: fixed;
    right: 50px;
    bottom: 50px;
    text-align: center;
    line-height: 38px;
    opacity: 0;
    cursor: pointer;
  }
  .backTop .iconfont{
    font-size: 30px;
  }
  .showBackTop{
    opacity: 1;
  }
</style>
