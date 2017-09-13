<template>
<div id="Notic" class="main_body" >
  <div class="noticMain">
    <div class="notic_top">
      系统消息
    </div>
    <div class="notic_item" @click="" v-for="item in notic.list" :key="item.id">
      <div class="notic_left">
        <el-badge v-if="item.isRead == 0" :is-dot="true" class="item">
          <img src="../../../static/img/header/shi.png" />
        </el-badge>
        <el-badge v-else :is-dot="false" class="item">
          <img src="../../../static/img/header/shi.png" />
        </el-badge>
      </div>
      <div class="notic_right inline__box">
        <p class="notic_title">直播提醒 <span>{{timeF(item.updateDate).format("MM-DD HH:mm")}}</span></p>
        <P class="notic_detail">{{item.content}}</P>
      </div>
      <div class="fr delNotic" @click="delList()">
        删除
      </div>
    </div>
     <div class="classesrecord_paging tc">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="1"
        :page-sizes="[1, 20, 30, 40]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="notic.total">
      </el-pagination>
    </div>
  </div>
</div>
</template>

<script>
export default {

  data () {
    return {
      currentPage: 5,
      isnotic:true,//notic开关
      notic:{},
      pageNum: 1,
      pageSize:1
  }},
  mounted:function(){
      var mypageNum = this.pageNum;
      var mypageSize = this.pageSize;
      var pageData = {pageNum:mypageNum,pageSize:mypageSize};
     this.postHttpWithAuth(this,pageData,"message/queryMessagesByUserId",function(obj,data){
        obj.notic = data.result.messages;
        console.log(obj.notic);
      });
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
    handleSizeChange:function(val){
      var pageData = {pageNum:this.pageNum,pageSize:val}
      this.postHttpWithAuth(this,pageData,"message/queryMessagesByUserId",function(obj,data){
        obj.notic = data.result.messages;
        obj.pageSize =val;
      });
    },
    handleCurrentChange:function(val){
      var pageData = {pageNum:val,pageSize:this.pageSize}
      this.postHttpWithAuth(this,pageData,"message/queryMessagesByUserId",function(obj,data){
        obj.notic = data.result.messages;
        obj.pageNum = val;
      });
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
#Notic .notic_detail{color: #7D7C55;font-size:14px;max-width: 912px;white-space:nowrap; overflow:hidden; text-overflow:ellipsis;line-height: 20px}
#Notic .allNotic{color:#272727;font-size: 16px;line-height: 40px;text-align: center;}
#Notic .notic_title{width: 100%;line-height: 40px}
#Notic .notic_left{vertical-align: top}
.noticMain{border:1px solid #e5e5e5;margin-top: 30px;padding: 40px;background-color: #fff}
#Notic .notic_item{border-bottom: 1px solid #e5e5e5;cursor: default;}
.notic_top{color: #272727;font-size: 24px;padding-bottom: 18.5px;border-bottom:1px solid #e5e5e5 }
.classesrecord_paging {padding: 40px}
</style>