<template lang="html">
  <div>
    {{categorys}}
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      categorys:{},
      getId: this.$route.query._id
    }
  },
  created(){
    this.getArticlesList();
  },
  methods:{
    getArticlesList(){
      axios(`http://www.zhaoguangyue.cn/api/archive/category?_id=${this.getId}`).then( (response) => {
        console.log(response.data);
        this.categorys = response.data.data;
      });
    }
  }
}
</script>

<style lang="less" scoped>

</style>
