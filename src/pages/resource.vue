<template lang="html">
  <el-row>
    <el-col class="resource">
      <h1 class="pool-title">前端资源推荐</h1>
      <el-col>
        {{data.content}}
      </el-col>
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
      axios.get('http://api.zhaoguangyue.com/api/resource').then( (response) => {
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
  .resource{
    animation: lightSpeedIn .5s;
    word-wrap:break-word;
  }


</style>
