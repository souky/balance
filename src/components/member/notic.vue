<template>
<div id="Notic" class="main_body" >
  <div class="noticMain">
    <div class="notic_top">
      系统消息
    </div>
    <div class="notic_item" @click="" v-for="item in notic">
      <div class="notic_left">
        <el-badge :is-dot="item.unread" class="item">
          <img src="../../../static/img/header/shi.png" />
        </el-badge>
      </div>
      <div class="notic_right inline__box">
        <p class="notic_title">{{item.title}} <span>{{item.date}}</span></p>
        <P class="notic_detail">{{item.detail}}</P>
      </div>
      <div class="fr delNotic" @click="delList()">
        删除
      </div>
    </div>
     <div class="classesrecord_paging tc">
      <page :totalNumber="total" @newNOdeEvents="parentLisen"></page>
    </div>
  </div>
</div>
</template>

<script>
import page from './page.vue'
export default {

  data () {
    return {
      currentPage: 5,
      isnotic:true,//notic开关
      notic:[
        {
          unread:true,
          id:'123',
          date:"08/15 21:15",
          title:"直播提醒",
          detail:"《语文》将于19：15开始，感谢您的预约"
        },
        {
          unread:true,
          id:'123',
          date:"08/15 21:15",
          title:"直播提醒",
          detail:"《厉害了!百年荷兰抗洪教材》将于19：15开始，感谢您的预约感谢感谢感谢真的感谢"
        },
        {
          unread:false,
          id:'123',
          date:"08/15 21:15",
          title:"直播提醒",
          detail:"《厉害了!百年荷兰抗洪教材》将于19：15开始，感谢您的预约感谢感谢感谢真的感谢"
        },
        {
          unread:false,
          id:'123',
          date:"08/15 21:15",
          title:"直播提醒",
          detail:"《厉害了!百年荷兰抗洪教材》将于19：15开始，感谢您的预约感谢感谢感谢真的感谢"
        }
      ]//消息红点
      ,
      pageIndex:1,
      pageSize:10,
      total:60
    }
  },
  components:{page},
  mounted:function(){
     
  },
  methods:{
    backIndex:function(){
      this.$router.push({path:'/'})
    },
    delList:function(){
      console.log(111);
      //后台请求
      //...
    },
    parentLisen:function(pageIndex,pageSize){
        this.pageIndex=pageIndex;
        this.pageSize=pageSize;      
      }
  }
}
</script>

<style>
.fr{float:right;}
.delNotic{cursor: default;line-height: 91px;color: #7D7C55;font-size: 14px}
#Notic .notic_left{width: 60px;height: 60px;padding: 15px;display: inline-block;}
#Notic .notic_left img{width: 60px;height: 60px;}
#Notic .notic_title{font-size: 14px;color: #272727;}
#Notic .notic_title span{margin-left: 20px;color: #2A2A2A}
#Notic .notic_detail{color: #7D7C55;font-size:14px;max-width: 412px;white-space:nowrap; overflow:hidden; text-overflow:ellipsis;line-height: 20px}
#Notic .allNotic{color:#272727;font-size: 16px;line-height: 40px;text-align: center;}
#Notic .notic_title{width: 100%;line-height: 40px}
#Notic .notic_left{vertical-align: top}
.noticMain{border:1px solid #e5e5e5;margin-top: 30px;padding: 40px;background-color: #fff}
#Notic .notic_item{border-bottom: 1px solid #e5e5e5;cursor: default;}
.notic_top{color: #272727;font-size: 24px;padding-bottom: 18.5px;border-bottom:1px solid #e5e5e5 }
.classesrecord_paging {padding: 40px}
</style>