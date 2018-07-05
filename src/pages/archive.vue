<template lang="html">
  <el-col>
    <h1 class="archive">文章归档</h1>

    <el-row class="sort" v-for="(item,index) in data" :key="index">

      <h2 class="sort-title">
        <i class="line"></i>
        <i class="circle"></i>
        <span class="sort-titlename">{{item.year}}</span>
      </h2>
      <ul class="sort-list" >
        <li class="sort-item" v-for=" val in item.data " >
          <i class="line"></i>
          <i class="circle"></i>
          <i class="iconfont icon-riqi icon"></i>
          <span class="item-time">{{val.createTime | dateformat('MMM DD')}}</span>
          <router-link class="item-content" :to="{ path: '../viewArticle' ,query:{'_id': val._id }}">{{val.title}}</router-link>
        </li>
      </ul>
    </el-row>


  </el-col>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
export default {
  data(){
    return {
      data: []
    }
  },
  filters:{
    dateformat(time, data ){
      return moment(time).format(data);
    }
  },
  created(){
    this.getAll();
  },
  methods:{
    getAll(){
      axios('https://api.zhaoguangyue.com/api/archive').then( (response) => {
        for(var i = 0;i<response.data.data.length;i++){
          var year = moment(response.data.data[i].createTime).year();
          // 如果data没有值，则创建，否则遍历 判断  填充
          if( !this.data.length){
            var d = {
              'year':year,
              data:[
                response.data.data[i]
              ]
            }
            this.data.push(d)
          }else{
            for( var j = 0;j < this.data.length; j++){
              if(this.data[j].year != year){
                var d = {
                  'year':year,
                  data:[
                    response.data.data[i]
                  ]
                }
                this.data.push(d)
              }else{
                this.data[j].data.push(response.data.data[i])
              }
            }
          }
        }
      })
    }
  }
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

  .sort-item .item-content{
    color: #000;
  }
  .sort-item .item-content:hover{
    color: #0098fe;
  }


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
