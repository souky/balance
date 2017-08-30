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
				    	<el-tree class="mt20" :data="data" :default-expand-all="true" :props="defaultProps" @node-click="handleNodeClick()"></el-tree>
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
				    	<el-tree class="mt20" :data="data2" :default-expand-all="true" :props="defaultProps2" @node-click="handleNodeClick2()"></el-tree>
				    </el-tab-pane>
				    <el-tab-pane label="教学交流" name="fourth">
				    	<div class="allClass_body_tabs_fourth">
				    		<p>全部评论（100）</p>
				    		<div class=""></div>
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
      	activeName: 'first',
      	data: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        data2: [{
          label: '一级 1111',
          children: [{
            label: '二级 1-1111',
            children: [{
              label: '三级 1-1-11111'
            }]
          }]
        }, {
          label: '一级 22222',
          children: [{
            label: '二级 2-1222',
            children: [{
              label: '三级 2-1-12222'
            }]
          }, {
            label: '二级 2-222222',
            children: [{
              label: '三级 2-2-1222'
            }]
          }]
        }, {
          label: '一级 33333',
          children: [{
            label: '二级 3-13333',
            children: [{
              label: '三级 3-1-1444444'
            }]
          }, {
            label: '二级 3-2333333',
            children: [{
              label: '三级 3-2-13333'
            }]
          }]
        }],
        defaultProps2: {
          children: 'children',
          label: 'label'
        }
    }
  },
  components:{page},
  	methods: {
  	   handleClick(tab, event) {
        console.log(tab, event);
      },
       handleNodeClick(data) {
        alert(1);
      },
      handleNodeClick2(data) {
        alert(2);
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
#allClass .el-button{
    border-radius: 25px !important;
}
#allClass .attention_button:hover{border-color:#999999 !important;color: #999999 !important;}
#allClass .attention_button:active{color:#999999;border-color:#999999;}
#allClass .attention_button:focus{color:#999999;border-color:#999999;}
</style>