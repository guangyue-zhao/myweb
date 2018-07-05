<template lang="html">
  <el-col>
    <h1 class="aboutme">关于我</h1>
    <el-row v-html="data.content"></el-row>
  </el-col>
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
    this.getAbout();
  },
  methods:{
    getAbout(){
      axios.get('http://api.zhaoguangyue.com/api/about').then( (response) => {
        console.log(response.data)
        this.data = response.data.data;
      } )
    }
  }
}
</script>

<style lang="less" scroped>
  .aboutme{
    font-size:24px;
    color:#3c3c3c;
  }
</style>
