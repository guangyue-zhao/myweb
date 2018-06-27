<template lang="html">
  <div >
    <h1 class="category-name">{{categorys.name}}</h1>
    <ul>
      <li v-for="item in categorys.articles">
        <router-link class="item-title" :to="{ path: '../viewArticle' ,query:{'_id': item._id }}">{{item.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      categorys:[],
    }
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'getArticlesList'
  },
  created(){
    this.getArticlesList();
  },
  methods:{
    getArticlesList(){
      axios(`http://www.zhaoguangyue.cn/api/archive/category?_id=${this.$route.query._id}`).then( (response) => {

        this.categorys = response.data.data;
      });
    }
  }
}
</script>

<style lang="less" scoped>
  .category-name{
    color: #3c3c3c;
    font-size: 24px;
    margin-bottom: 30px;
  }
  .item-title{
    font-size: 20px;
    color: #3c3c3c;
    text-indent: 20px;
    line-height: 36px;
  }
  .item-title:hover{
    color: #0098fe;
  }
</style>
