<template lang="html">
  <article class="article">
    <el-row class="article-header">
      <h2 class="article-title">{{article.title}}</h2>
      <p class="article-desc">
        <i class="iconfont icon-riqi icon"> </i><time>{{article.createTime | dateformat( 'MMM. DD YYYY')}}</time>&nbsp;&nbsp;
        <i class="iconfont icon-wenjianjia"> </i><span class="category">{{article.category.name}}</span>
      </p>
    </el-row>
    <el-row class="article-body">
        <div class="article-content" v-html="article.content"></div>
    </el-row>
  </article>
</template>

<script>
import axios from 'axios'
import moment from 'moment'

export default {
  data(){
    return {
      article: {
        title:'',
        category:'',
        content:''
      },
      artId : this.$route.query._id
    }
  },
  created(){
    this.getArticle();
  },
  filters:{
    dateformat(time, data ){
      return moment(time).format(data);
    }
  },
  methods:{
    getArticle(){
      axios.get(`https://api.zhaoguangyue.com/api/viewArticle?_id=${this.artId}`).then( (response) => {
        this.article = response.data.data
      })
    }
  }
}
</script>

<style lang="less" scoped>
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
