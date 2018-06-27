<template lang="html">
  <el-row>
    <h1 class="pool-title">前端资源推荐</h1>
    <el-col>
      {{data.content}}
    </el-col>
  </el-row>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      data:{}
    }
  },
  created(){
    this.getResource();
  },
  methods:{
    getResource(){
      axios.get('http://www.zhaoguangyue.cn/api/resource').then( (response) => {
        this.data = response.data.data;
        console.log(this.data);
      } )
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
