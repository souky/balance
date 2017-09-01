<template>
	<div id="allClass">
		<div class="allClass_body">
			<p class="allClass_body_title">{{book.name}}</p>
			<hr style="width:93%;background-color:#E5E5E5;margin-top:20px;">
			<div class="allClass_body_content">
				<div class="allClass_body_content_img l"></div>
				<div class="allClass_body_content_word l">
					<p class="l allClass_body_content_word_color">年级：</p><p class="l">{{book.class}}</p>
					<div class="cl"></div>
					<p class="l allClass_body_content_word_color">学科：</p><p class="l">{{book.subject}}</p>
					<div class="cl"></div>
					<p class="l allClass_body_content_word_color">教材：</p><p class="l">{{book.textbook}}</p>
					<div class="cl"></div>
					<p class="l allClass_body_content_word_color">授课学校：</p><p class="l">{{book.school}}</p>
					<div class="cl"></div>
					<p class="l allClass_body_content_word_color">授课老师：</p><p class="l">{{book.teacher}}</p>
					<div class="cl"></div>
					<p class="l allClass_body_content_word_color">开课日期：</p><p class="l">{{book.date}}</p>
					<div class="cl"></div>
					<p class="l allClass_body_content_word_color">学习时长：</p><p class="l">{{book.time}}</p>
					<div class="cl"></div>
					<p class="l allClass_body_content_word_color">报名人数：</p><p class="l">{{book.mannumber}}</p>
					<div class="cl"></div>
					<p class="l allClass_body_content_word_color">播放量：</p><p class="l">{{book.playnumber}}</p>
					<div class="cl"></div>
					<p class="l allClass_body_content_word_color">关注：</p><p class="l">{{book.attention}}</p>
					<div class="cl"></div>
					<div class="allClass_body_content_button">
						<el-button class="attention_button_public" type="primary">进入学习</el-button>
						<el-button v-if="book.buttonName=='关注'" class="attention_button_public attention_button">关注</el-button>
						<el-button v-if="book.buttonName=='取消关注'" class="attention_button_public attention_button_sure" type="primary">取消关注</el-button>
					</div>
				</div>
				<div class="cl"></div>
			</div>
			<div class="allClass_body_tabs">
				<template>
				  <el-tabs v-model="activeName" @tab-click="handleClick">
				    <el-tab-pane label="课程内容" name="first">
				    	<h3>课程简介</h3>
				    	<p class="mt10">这是使用苏教版教材的语文，欢迎同学们收看学习！</p>
				    	<h3 class="mt10">课程大纲</h3>
				    	<p class="mt10 allClass_body_tabs_download">点击下载课程视频进入学习</p>
				    	<div class="mt10 allClass_body_tabs_first_content">
				    		<div class="mt10 allClass_body_tabs_first_middle cl" v-for="proper in propers">
				    			<p class="l">{{proper.name}}</p>
				    			<p class="r">{{proper.time}}</p>
				    			<div class="cl"></div>
				    			<div class="mt10 allClass_body_tabs_first_middle_body cl" v-for="child in proper.childs">
				    				<p class="l allClass_body_tabs_first_middle_bodyVip">{{child.name}}</p>
				    				<p class="r">{{child.time}}</p>
				    				<div class="cl"></div>
				    				<div class="mt10 allClass_body_tabs_first_middle_foot cl" v-for="grandchildren in child.grandchildrens">
				    					<p class="l allClass_body_tabs_first_middle_bodyVVip">{{grandchildren.name}}</p>
				    					<p class="r">{{grandchildren.time}}</p>
				    					<div class="cl"></div>
				    				</div>
				    			</div>
				    		</div>
				    	</div>
				    </el-tab-pane>
				    <el-tab-pane label="授课老师" name="second">
				    	<h3>教师简介</h3>
				    	<div class="allClass_body_tabs_Vimg mt10 l"></div>
				    	<p class="l allClass_body_tabs_word ml10 mt10">11111111111111111</p>
				    	<div class="cl"></div>
				    	<h3 class="mt10">所授课程</h3>
				    	<p class="mt10 allClass_body_tabs_download">点击下载课程视频进入学习</p>
				    	<div class="allClass_body_tabs_second_table">
				    		<div class="allClass_body_tabs_second_table_bar l" v-for="tab in tabs">
				    			<div class="allClass_body_tabs_second_table_bar_img"></div>
				    			<p>{{tab.titleName}}</p>
				    			<p class="l">开课日期：</p><p class="l">{{tab.date}}</p>
				    			<p class="mr10 r">{{tab.manNumber}}</p><p class="r">报名人数：</p>
				    			<div class="cl"></div>
				    			<p class="l">学习时长：</p><p class="l">{{tab.time}}</p>
				    			<p class="mr10 r">{{tab.playNumber}}</p><p class="r">播放次数：</p>
				    		</div>
				    	</div>
				    	<div class="cl"></div>
				    	<div class="allClass_body_tabs_second_pagging tc">
				    		<page class="mt20" :totalNumber="total" @newNOdeEvents="parentLisen"></page>
				    	</div>
				    </el-tab-pane>
				    <el-tab-pane label="教辅下载" name="third">
				    	<h3>教辅文件</h3>
				    	<p class="mt10 allClass_body_tabs_download">点击下载课程视频进入学习</p>
				    	<div class="mt10 allClass_body_tabs_first_content">
				    		<div class="mt10 allClass_body_tabs_first_middle cl" v-for="proper in propers">
				    			<p class="l">{{proper.name}}</p>
				    			<p class="r">{{proper.time}}</p>
				    			<div class="cl"></div>
				    			<div class="mt10 allClass_body_tabs_first_middle_body cl" v-for="child in proper.childs">
				    				<p class="l allClass_body_tabs_first_middle_bodyVip">{{child.name}}</p>
				    				<p class="r">{{child.time}}</p>
				    				<div class="cl"></div>
				    				<div class="mt10 allClass_body_tabs_first_middle_foot cl" v-for="grandchildren in child.grandchildrens">
				    					<p class="l allClass_body_tabs_first_middle_bodyVVip">{{grandchildren.name}}</p>
				    					<p class="r">{{grandchildren.time}}</p>
				    					<div class="cl"></div>
				    				</div>
				    			</div>
				    		</div>
				    	</div>
				    </el-tab-pane>
				    <el-tab-pane label="教学交流" name="fourth">
				    	<div class="allClass_body_tabs_fourth">
				    		<p>全部评论（100）</p>
				    		<div class="allClass_body_tabs_fourth_bar" v-for="comment in comments">
				    			<div class="allClass_body_tabs_fourth_bar_img l"></div>
				    			<div class="allClass_body_tabs_fourth_bar_word l">
				    				<p class="l">{{comment.name}}</p><p class="l ml10">{{comment.date}}</p><p class="l ml10">{{comment.what}}</p>
				    				<div class="cl"></div>
				    				<p class="allClass_body_tabs_fourth_bar_word_content mt10">{{comment.content}}</p>
				    				<hr class="mt10" style="width:100%;background-color:#E5E5E5;">
				    			</div>
				    		</div>
				    		<div class="allClass_body_tabs_fourth_pagging tc">
				    			<page :totalNumber="totalfourth" @newNOdeEvents="parentLisenfourth"></page>
				    		</div>
				    		<div class="allClass_body_tabs_fourth_input">
				    			<div class="allClass_body_tabs_fourth_input_img"></div>
				    			<p class="allClass_body_tabs_fourth_input_img_name l">James</p>
				    			<el-input class="allClass_body_tabs_fourth_input_textarea l" type="textarea" :rows="6" placeholder="不超过300字" v-model="textarea"></el-input>
				    			<el-button class="r allClass_body_tabs_fourth_input_button" type="primary">发表评论</el-button>
				    		</div>
				    	</div>
				    </el-tab-pane>
				  </el-tabs>
				</template>
			</div>
		</div>
	</div>
</template>

<script>
import page from '../member/page.vue'
export default {
  data () {
    return {
    	book:{
	      	name:'苏州小学语文三年级下册',
	      	class:'三年级',
	      	subject:'语文',
	      	textbook:'苏教办',
	      	school:'苏州中学',
	      	teacher:'James',
	      	date:'2017-09-24 08:10',
	      	time:'45分钟',
	      	mannumber:'900',
	      	playnumber:'123131',
	      	attention:'156',
	      	buttonName:'关注',
      	},
      	pageIndex:1,
        pageSize:10,
        total:60,
        totalfourth:80,
      	tabs:[{
      		titleName:'123133313',
      		date:'2015-09-11',
      		manNumber:'123',
      		time:'24小时',
      		playNumber:'555',
      	},{
      		titleName:'123133313',
      		date:'2015-09-11',
      		manNumber:'123',
      		time:'24小时',
      		playNumber:'555',
      	},{
      		titleName:'123133313',
      		date:'2015-09-11',
      		manNumber:'123',
      		time:'24小时',
      		playNumber:'555',
      	},{
      		titleName:'123133313',
      		date:'2015-09-11',
      		manNumber:'123',
      		time:'24小时',
      		playNumber:'555',
      	},{
      		titleName:'123133313',
      		date:'2015-09-11',
      		manNumber:'123',
      		time:'24小时',
      		playNumber:'555',
      	},{
      		titleName:'123133313',
      		date:'2015-09-11',
      		manNumber:'123',
      		time:'24小时',
      		playNumber:'555',
      	}],
      	propers:[{
      		name:'测试数据1',
      		time:'共45分钟',
      		childs:[{
      			name:'测试数据2',
      			time:'共45分钟',
      			grandchildrens:[{
      				name:'测试数据3',
      				time:'共45分钟',
      			}],
      		}],
      	},{
      		name:'2测试数据1',
      		time:'共45分钟',
      		childs:[{
      			name:'2测试数据2',
      			time:'共45分钟',
      			grandchildrens:[{
      				name:'2测试数据3',
      				time:'共45分钟',
      			}],
      		},{
      			name:'2测试数据2',
      			time:'共45分钟',
      			grandchildrens:[{
      				name:'2测试数据3',
      				time:'共45分钟',
      			},{
      				name:'2测试数据3',
      				time:'共45分钟',
      			},{
      				name:'2测试数据3',
      				time:'共45分钟',
      			}],
      		}],
      	},{
      		name:'3测试数据1',
      		time:'共45分钟',
      		childs:[{
      			name:'3测试数据2',
      			time:'共45分钟',
      			grandchildrens:[{
      				name:'3测试数据3',
      				time:'共45分钟',
      			}],
      		}],
      	}],
      	activeName: 'first',
      	textarea:'',
        comments:[{
        	name:'James',
        	date:'2017-03-13',
        	what:'评论了整体课程',
        	content:'11111111111111111111111111111111111111111111111111111111111111111111111111111111112222222222222222222222223333333333333333333333333333333333333333333333333333333333333334444444444444444444444444444444444444444444444444455555555555555555555555555556666666666666666666777777777777777777777777777788888888888888888888',
        },{
        	name:'James',
        	date:'2017-03-13',
        	what:'评论了整体课程',
        	content:'11111111111111111111111111111111111111111111111111111111111111111111111111111111112222222222222222222222223333333333333333333333333333333333333333333333333333333333333334444444444444444444444444444444444444444444444444455555555555555555555555555556666666666666666666777777777777777777777777777788888888888888888888',
        },{
        	name:'James',
        	date:'2017-03-13',
        	what:'评论了整体课程',
        	content:'11111111111111111111111111111111111111111111111111111111111111111111111111111111112222222222222222222222223333333333333333333333333333333333333333333333333333333333333334444444444444444444444444444444444444444444444444455555555555555555555555555556666666666666666666777777777777777777777777777788888888888888888888',
        }],
    }
  },
  components:{page},
  mounted:function(){
  	console.log(sessionStorage.getItem("classID"));
  },
  	methods: {
  	   handleClick(tab, event) {
        console.log(tab, event);
      },
      parentLisen:function(pageIndex,pageSize){
	    this.pageIndex=pageIndex;
	    this.pageSize=pageSize;
	    this.fetchData();
	 },
	 fetchData:function(){
	    alert("开课"+this.pageSize);
	    alert("开课"+this.pageIndex);
	 },
	 parentLisenfourth:function(pageIndex,pageSize){
	 	this.pageIndex=pageIndex;
	    this.pageSize=pageSize;
	    this.fetchDatafourth();
	},
	fetchDatafourth:function(){
	    alert("测试"+this.pageSize);
	    alert("测试"+this.pageIndex);
	 },
    }
}
</script>

<style>
#allClass{
	overflow: hidden;
	background-color: #F9F9F9;
}
.allClass_body{
	border: 1px solid #E5E5E5;
	width: 1200px;
	margin: 0 auto;
	margin-top: 90px;
	background-color: #fff;
	margin-bottom: 50px;
}
.allClass_body_title{
	font-size: 24px;
	color: #272727;
	margin-top:40px;
	margin-left:40px;
}
.allClass_body_content{
	width: 93%;
	margin: 0 auto;
	margin-top:20px;
}
.allClass_body_content_img{
	width: 290px;
	height: 372px;
	background-color: red;
}
.allClass_body_content_word{
	width: 750px;
	margin-left: 40px;
}
.allClass_body_content_word p{
	margin-top:10px;
	margin-left:5px;
	font-size: 16px;
	line-height: 19px;
}
.allClass_body_content_word_color{
	color: #999999;
}
.allClass_body_content_button{
	width: 800px;
	margin-top:50px;
}
.attention_button_public{
	width: 125px;
	height: 35px;
}
.attention_button_sure{
	width: 125px;
	height: 35px;
	background-color: #999999 !important;
	border-color: #999999 !important;
}
.allClass_body_tabs{
	width: 93%;
	margin: 0 auto;
	margin-top:40px;
	margin-bottom: 30px;
}
.allClass_body_tabs h3{
	font-size: 16px;
}
.allClass_body_tabs p{
	font-size: 14px;
	color: #666666;
}
.allClass_body_tabs_download{
	color: #6ED56C !important;
}
.allClass_body_tabs_Vimg{
	width: 125px;
	height: 155px;
	background-color: red;
}
.allClass_body_tabs_word{
	width: 950px;
	height: 150px;
	overflow:hidden;
	word-wrap:break-word;
}
.allClass_body_tabs_second_table{
	width: 100%;
}
.allClass_body_tabs_second_table_bar{
	width: 360px;
	height: 270px;
	margin-left: 10px;
	margin-top: 10px;
	background-color: #F5F5F5;
}
.allClass_body_tabs_second_table_bar_img{
	width: 100%;
	height: 170px;
	background-color: red;
}
.allClass_body_tabs_second_table_bar p{
	font-size: 14px;
	color: #666666;
	line-height: 24px;
	margin-left: 10px;
	margin-top: 5px;
}
.allClass_body_tabs_second_pagging{
	width: 100%;
	margin-top: 20px;
}
.allClass_body_tabs_fourth{
	width: 100%;
	margin-top:10px;
}
.allClass_body_tabs_fourth_bar{
	margin: 0 auto;
	width: 90%;
	height: 100px;
	margin-top: 20px;
}
.allClass_body_tabs_fourth_bar_img{
	width: 60px;
	height: 60px;
	border-radius: 50%;
	background-color: red;
}
.allClass_body_tabs_fourth_bar_word{
	width: 92%;
	margin-left: 20px;
}
.allClass_body_tabs_fourth_bar_word p{
	line-height: 19px;
}
.allClass_body_tabs_fourth_bar_word_content{
	width: 100%;
	word-wrap:break-word;
}
.allClass_body_tabs_fourth_pagging{
	width: 100%;
	margin: 0 auto;
	margin-top: 20px;
}
.allClass_body_tabs_fourth_input{
	width: 100%;
	margin-top: 40px;
}
.allClass_body_tabs_fourth_input_img{
	width: 100px;
	height: 100px;
	border-radius: 50%;
	background-color: red;
	margin-left: 30px;
}
.allClass_body_tabs_fourth_input_img_name{
	margin-left: 55px;
	margin-top: 10px;
}
.allClass_body_tabs_fourth_input_textarea{
	width: 920px;
	margin-left: 50px;
	margin-top: -100px;
}
.allClass_body_tabs_fourth_input_button{
	margin-top:20px;
	margin-right: 50px; 
	width: 125px;
	height: 35px;
}
.allClass_body_tabs_first_content{
	width: 100%;
	overflow: hidden;
}
.allClass_body_tabs_first_middle{
	border-bottom:1px dashed #000;
	width: 100%;
	height: 17px;
}
.allClass_body_tabs_first_middle p{
	height: 18px;
	background-color: #fff;
}
.allClass_body_tabs_first_middle_body{
	border-bottom:1px dashed #000;
	width: 100%;
	height: 17px;		
}
.allClass_body_tabs_first_middle_foot{
	border-bottom:1px dashed #000;
	width: 100%;
	height: 17px;		
}
.allClass_body_tabs_first_middle_bodyVip{
	padding-left: 20px;
}
.allClass_body_tabs_first_middle_bodyVVip{
	padding-left: 40px;	
}
#allClass .el-button{
    border-radius: 25px !important;
}
#allClass .attention_button:hover{border-color:#999999 !important;color: #999999 !important;}
#allClass .attention_button:active{color:#999999;border-color:#999999;}
#allClass .attention_button:focus{color:#999999;border-color:#999999;}
</style>