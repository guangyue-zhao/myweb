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
        <div class="article-summary" v-html="item.content">
        </div>
        <el-row class="btn">
          <router-link :to="{ path: '../viewArticle' ,query:{'_id': item._id }}" @click.native = 'getId(item.id)' ><el-button>阅读全文<i class="el-icon-d-arrow-right"></i></el-button></router-link>
        </el-row>
      </el-row>
    </el-col>
  </article>
</template>

<script>

import mywebHeader from '../components/header.vue';
import axios from 'axios'
<<<<<<< HEAD
import moment from 'moment'
=======
>>>>>>> 6bc1f7161a05cc7fa5fd8d1da3de89f523df89e1


export default {
  data(){
<<<<<<< HEAD
    return {
      arts:{},
      artId:''
    }
=======
    return {}
>>>>>>> 6bc1f7161a05cc7fa5fd8d1da3de89f523df89e1
  },
  created(){
    this.loadArticle();
  },
<<<<<<< HEAD
  filters:{
    dateformat(time, data ){
      return moment(time).format(data);
    }
  },
  methods:{
    loadArticle(){
      axios('http://www.zhaoguangyue.cn/api/index').then( (response) => {
        this.arts = response.data.data;
      });
    },
    getId(event){
      this.$store.commit('VIEW_ARTICLE',event);
=======
  methods:{
    loadArticle(){
      axios('http://www.zhaoguangyue.cn/api/index').then(function(res){
        console.log( res.data );
      }).then(function(){

      });
>>>>>>> 6bc1f7161a05cc7fa5fd8d1da3de89f523df89e1
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
