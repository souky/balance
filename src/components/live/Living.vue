<template>
	<div id="living">
		<div class="living_play">
			<img src="../../../static/img/main.png" width="1200px" height="600px">
      <div class="living_list"></div>
		</div>
		<div class="living_banner">
			 <el-carousel indicator-position="outside" arrow="always" :autoplay="false">
			    <el-carousel-item v-for="item in users" :key="item.id">
			       <div class="banner_bar l" v-for="child in item.childs">
			         <!-- <img v-if="child.type=='rar'" src="../../../static/img/defualt/rar.png" />
			         <img v-if="child.type=='png'" src="../../../static/img/defualt/img.png" />
			         <img v-if="child.type=='fla'" src="../../../static/img/defualt/swf.png" />
			         <img v-if="child.type=='mp3'" src="../../../static/img/defualt/voice.png" />
			         <img v-if="child.type=='avi'" src="../../../static/img/defualt/video.png" />
			         <img v-if="child.type=='word'" src="../../../static/img/defualt/doc.png" />
			         <img v-if="child.type=='exe'" src="../../../static/img/defualt/exe.png" /> -->
               <img v-if="child.suffix==undefined" src="../../../static/img/defualt/noRecord.png" height="100%" width="100%">
               <img v-else :src="child.img">
			         <p class="tc banner_bar_word">{{child.name}}</p>
			       </div>
			    </el-carousel-item>
			  </el-carousel>
		</div>
		<div class="living_table_foot">
			<div class="allClass_body_tabs_fourth">
				    		<p>全部评论（{{total}}）</p>
				    		<div class="allClass_body_tabs_fourth_bar" v-for="comment in comments">
				    			<div class="allClass_body_tabs_fourth_bar_img l">
				    				<img src="../../../static/img/defualt/rar.png" width="60px" height="60px" />
				    			</div>
				    			<div class="allClass_body_tabs_fourth_bar_word l">
				    				<p class="l">{{comment.createUser}}</p><p class="l ml10">{{timeF(comment.createDate).format("YYYY-MM-DD HH:mm:ss")}}</p><p class="l ml10">{{comment.what}}</p>
				    				<div class="cl"></div>
				    				<p class="allClass_body_tabs_fourth_bar_word_content mt10">{{comment.comment}}</p>
				    				<hr class="mt10" style="width:100%;background-color:#E5E5E5;">
				    			</div>
				    		</div>
				    		<div class="allClass_body_tabs_fourth_pagging tc">
				    			<el-pagination v-bind:current-Page="pageIndex" v-bind:page-size="pageSize" :total="total"
                    layout="total,sizes,prev,pager,next,jumper" v-bind:page-sizes="pageSizes" :current-page="pageIndex"
                    v-on:size-change="sizeChange" v-on:current-change="pageIndexChange"></el-pagination>
				    		</div>
				    		<div class="allClass_body_tabs_fourth_input">
				    			<div class="allClass_body_tabs_fourth_input_img">
				    				<img src="../../../static/img/defualt/rar.png" width="100px" height="100px" />
				    			</div>
				    			<p class="allClass_body_tabs_fourth_input_img_name l">James</p>
				    			<el-input class="allClass_body_tabs_fourth_input_textarea l" type="textarea" :rows="6" placeholder="不超过300字" v-model="textarea"></el-input>
				    			<el-button class="r allClass_body_tabs_fourth_input_button" @click="saveComment" type="primary">发表评论</el-button>
				    		</div>
				    	</div>
		</div>
	</div>
</template>
<script>
export default {
  data () {
    return {
    	  textarea:'',
        users:[],
    	  items:[],
        comments:[],
        textarea:'',
        pageIndex:1,
        pageSize:10,
        total:60,
        pageSizes:[1,10,20,50,100],
     }
  },
  created:function(){
    var s = this.$route.params.part;
    //alert(s);
    this.postHttp(this,{courseId:"e232cbdbcf5742e8be6da5ec65eb0df5",pageNum:"1",pageSize:"20"},"teachingfile/study/queryTeachingFilesByType",function(obj,data){
      obj.items=data.result.list;
    for(var i=0;i<obj.items.length;i++){
      obj.items[i].img="../../../static/img/defualt/"+obj.items[i].suffix+".png";
    }
    var childNum=Math.ceil(obj.items.length/5);
    var childs=[];
    for(var l=0;l<childNum;l++){
      var id=l+1;
      var e=5*(l+1);
      var s=e-5;
      childs[l] = []
      childs[l]["childs"]=obj.items.slice(s,e);
      childs[l]["id"] = id;
    }
    obj.users=childs;
    });
    this.postHttp(this,{courseId:"9fd9f42b80f04465a4cadbe4b669ace9",pageNum:this.pageIndex,pageSize:this.pageSize},"comment/study/queryComments",function(obj,data){
      obj.comments=data.result.list;
      obj.total=data.result.total;
    });
  },
  methods:{
  	sizeChange: function (pageSize) {   //每页显示条数
        this.pageSize = pageSize;
        this.fetchData();
    },
    pageIndexChange: function (pageIndex) {   //第几页
        this.pageIndex = pageIndex;
        this.fetchData();
    },
    fetchData:function(){
      this.postHttp(this,{courseId:"9fd9f42b80f04465a4cadbe4b669ace9",pageNum:this.pageIndex,pageSize:this.pageSize},"comment/study/queryComments",function(obj,data){
        obj.comments=data.result.list;
        obj.total=data.result.total;
      });
      },
    saveComment:function(){
        this.postHttp(this,{courseId:"9fd9f42b80f04465a4cadbe4b669ace9",comment:this.textarea},"comment/saveComment",function(obj,data){
        });
        this.textarea="";
        this.fetchData();
      },
  	}
}
</script>
<style>
#living{
	padding-top:60px;
	background-color: #F9F9F9;
}	
#living .living_play{
	width: 1200px;
	height: 600px;
	margin: 0 auto;
	margin-top: 30px;
}
#living .living_banner{
	margin: 0 auto;
	margin-top: 40px;
	width: 1250px;
	height: 250px;
}
  #living .el-carousel__indicators--outside{
    display: none;
  }
  #living .el-carousel__arrow{
    border: none;
    padding: 0;
    width: 30px;
    height: 55px;
    border-radius:0 !important;
    background-color: #6ED56C;
    color: #fff;
    position: absolute;
    top: 50%;
    z-index: 10;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    text-align: center;
    font-size: 12px;
  }
  #living .el-carousel__arrow--left{
    left: 0;
  }
  #living .el-carousel__arrow--right{
    right: 0;
  }
  #living .el-carousel__item{
    width: 90%;
    left: 5%;
    height: 300px;
  }
  #living .banner_bar{
    width: 200px;
    height: 200px;
    margin-top: 20px;
    margin-left: 23px;
  }
  #living .banner_bar img{
    height: 200px;
  }
  #living .banner_bar_word{
    margin-top: 20px;
    line-height: 17px;
    font-size: 14px;
    color: #272727;
  }
  #living .living_table_foot{
  	width: 1200px;
  	margin: 0 auto;
  	margin-top: 50px;
  }
#living .allClass_body_tabs_fourth{
	width: 100%;
	margin-top:10px;
}
#living .allClass_body_tabs_fourth_bar{
	margin: 0 auto;
	width: 90%;
	height: 100px;
	margin-top: 20px;
}
#living .allClass_body_tabs_fourth_bar_img{
	width: 60px;
	height: 60px;
	border-radius: 50%;
	overflow: hidden;
}
#living .allClass_body_tabs_fourth_bar_word{
	width: 92%;
	margin-left: 20px;
}
#living .allClass_body_tabs_fourth_bar_word p{
	line-height: 19px;
}
#living .allClass_body_tabs_fourth_bar_word_content{
	width: 100%;
	word-wrap:break-word;
}
#living .allClass_body_tabs_fourth_pagging{
	width: 100%;
	margin: 0 auto;
	margin-top: 20px;
}
#living .allClass_body_tabs_fourth_input{
	width: 100%;
	margin-top: 40px;
}
#living .allClass_body_tabs_fourth_input_img{
	width: 100px;
	height: 100px;
	border-radius: 50%;
	background-color: red;
	margin-left: 30px;
	overflow: hidden;
}
#living .allClass_body_tabs_fourth_input_img_name{
	margin-left: 55px;
	margin-top: 10px;
}
#living .allClass_body_tabs_fourth_input_textarea{
	width: 920px;
	margin-left: 50px;
	margin-top: -100px;
}
#living .allClass_body_tabs_fourth_input_button{
	margin-top:20px;
	margin-right: 50px; 
	width: 125px;
	height: 35px;
}
.living_list{
  width: 300px;
  height:600px;
  background: #282828;
  float: right;
  position: absolute;
  top:90px;
  left: 1242px;
}
</style>