<template>
	<div id="playing">
		<div class="living_play">
      <img src="../../../static/img/main.png" width="1200px" height="600px">  
    </div>
		<div class="living_banner">
			 <el-carousel indicator-position="outside" arrow="always" :autoplay="false">
			    <el-carousel-item v-for="item in items" :key="item.id">
			       <div class="banner_bar l" v-for="child in item.childs">
			         <div v-if="child.type=='past'" class="banner_bar_content_past">
                  <p class="tc mt30 f20">{{child.date}}</p>   
                  <p class="tc mt10 f12">{{child.state}}</p>
                  <p class="tc mt30 f12">{{child.class}}</p>
                  <p class="tc mt10 f12">{{child.course}}</p>
                  <el-button class="banner_bar_content_button">查看回放</el-button>
               </div>
               <div v-if="child.type=='now'" class="banner_bar_content_now">
                  <p class="tc mt30 f20">{{child.date}}</p>   
                  <p class="tc mt10 f12">{{child.state}}</p>
                  <p class="tc mt30 f12">{{child.class}}</p>
                  <p class="tc mt10 f12">{{child.course}}</p>
                  <el-button class="banner_bar_content_button_now">查看回放</el-button>
               </div>
               <div v-if="child.type=='future'" class="banner_bar_content_future">
                  <p class="tc mt30 f20">{{child.date}}</p>   
                  <p class="tc mt10 f12">{{child.state}}</p>
                  <p class="tc mt30 f12">{{child.class}}</p>
                  <p class="tc mt10 f12">{{child.course}}</p>
                  <el-button class="banner_bar_content_button_future">查看回放</el-button>
               </div>
			       </div>
			    </el-carousel-item>
			  </el-carousel>
		</div>
		<div class="living_table_foot">
    <div class="play_presentation">
      <p class="mt30 ml30 lh16 mb10 f16">直播简介</p>
      <p class="l ml30 f14 lh18">课程名：</p><p class="l ml5 f14 lh18">春季小学二年级语文</p><p class="l ml10 f14 lh18">学校：</p><p class="l ml5 f14 lh18">苏州小学</p><p class="l ml10 f14 lh18">教师：</p><p class="l ml5 f14 lh18">James</p><p class="l ml10 f14 lh18">大纲进程:</p><p class="l ml5 f14 lh18">人教版课程——第一章——第一节——第一课</p>
      <div class="cl"></div>
    </div>
			<div class="allClass_body_tabs_fourth">
				    		<p>全部评论（100）</p>
				    		<div class="allClass_body_tabs_fourth_bar" v-for="comment in comments">
				    			<div class="allClass_body_tabs_fourth_bar_img l">
				    				<img src="../../../static/img/defualt/rar.png" width="60px" height="60px" />
				    			</div>
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
				    			<div class="allClass_body_tabs_fourth_input_img">
				    				<img src="../../../static/img/defualt/rar.png" width="100px" height="100px" />
				    			</div>
				    			<p class="allClass_body_tabs_fourth_input_img_name l">James</p>
				    			<el-input class="allClass_body_tabs_fourth_input_textarea l" type="textarea" :rows="6" placeholder="不超过300字" v-model="textarea"></el-input>
				    			<el-button class="r allClass_body_tabs_fourth_input_button" type="primary">发表评论</el-button>
				    		</div>
				    	</div>
		</div>
	</div>
</template>
<script>
import page from '../member/page.vue'
export default {
  data () {
    return {
    	textarea:'',
    	 items:[{
        id:1,
        childs:[{
          type:'past',
          date:'2017-09-03 08:00',
          state:'进行中',
          class:'第二高中——二年纪三班',
          course:'语文——第一讲——第三课',
        },{
          type:'now',
          date:'2017-09-03 08:30',
          state:'进行中',
          class:'第二高中——二年纪三班',
          course:'语文——第一讲——第三课',
        },{
          type:'now',
          date:'2017-09-03 09:00',
          state:'进行中',
          class:'第二高中——二年纪三班',
          course:'语文——第一讲——第三课',
        },{
          type:'future',
          date:'2017-09-03 09:30',
          state:'进行中',
          class:'第二高中——二年纪三班',
          course:'语文——第一讲——第三课',
        },{
          type:'future',
          date:'2017-09-03 10:00',
          state:'进行中',
          class:'第二高中——二年纪三班',
          course:'语文——第一讲——第三课',
        }],
      },{
        id:2,
        childs:[{
          type:'past',
          date:'2017-09-03 10:30',
          state:'进行中',
          class:'第二高中——二年纪三班',
          course:'语文——第一讲——第三课',
        },{
          type:'now',
          date:'2017-09-03 11:00',
          state:'进行中',
          class:'第二高中——二年纪三班',
          course:'语文——第一讲——第三课',
        },{
          type:'now',
          date:'2017-09-03 11:30',
          state:'进行中',
          class:'第二高中——二年纪三班',
          course:'语文——第一讲——第三课',
        },{
          type:'future',
          date:'2017-09-03 12:00',
          state:'进行中',
          class:'第二高中——二年纪三班',
          course:'语文——第一讲——第三课',
        },{
          type:'future',
          date:'2017-09-03 12:30',
          state:'进行中',
          class:'第二高中——二年纪三班',
          course:'语文——第一讲——第三课',
        }],
      },{
        id:3,
        childs:[{
          type:'past',
          date:'2017-09-03 13:00',
          state:'进行中',
          class:'第二高中——二年纪三班',
          course:'语文——第一讲——第三课',
        },{
          type:'now',
          date:'2017-09-03 13:30',
          state:'进行中',
          class:'第二高中——二年纪三班',
          course:'语文——第一讲——第三课',
        },{
          type:'now',
          date:'2017-09-03 14:00',
          state:'进行中',
          class:'第二高中——二年纪三班',
          course:'语文——第一讲——第三课',
        },{
          type:'future',
          date:'2017-09-03 14:30',
          state:'进行中',
          class:'第二高中——二年纪三班',
          course:'语文——第一讲——第三课',
        },{
          type:'future',
          date:'2017-09-03 15:00',
          state:'进行中',
          class:'第二高中——二年纪三班',
          course:'语文——第一讲——第三课',
        }],
      },{
        id:4,
       childs:[{
          type:'past',
          date:'2017-09-03 15:30',
          state:'进行中',
          class:'第二高中——二年纪三班',
          course:'语文——第一讲——第三课',
        },{
          type:'now',
          date:'2017-09-03 16:00',
          state:'进行中',
          class:'第二高中——二年纪三班',
          course:'语文——第一讲——第三课',
        },{
          type:'now',
          date:'2017-09-03 16:30',
          state:'进行中',
          class:'第二高中——二年纪三班',
          course:'语文——第一讲——第三课',
        },{
          type:'future',
          date:'2017-09-03 17:00',
          state:'进行中',
          class:'第二高中——二年纪三班',
          course:'语文——第一讲——第三课',
        },{
          type:'future',
          date:'2017-09-03 17:30',
          state:'进行中',
          class:'第二高中——二年纪三班',
          course:'语文——第一讲——第三课',
        }],
      }],
      comments:[{
        	name:'James',
        	date:'2017-03-13',
        	what:'评论了整体课程',
        	content:'这门课程讲述的很全面，老师讲的很好',
        },{
        	name:'James',
        	date:'2017-03-13',
        	what:'评论了整体课程',
        	content:'这门课程讲述的很全面，老师讲的很好这门课程讲述的很全面，老师讲的很好这门课程讲述的很全面，老师讲的很好',
        },{
        	name:'James',
        	date:'2017-03-13',
        	what:'评论了整体课程',
        	content:'这门课程讲述的很全面，老师讲的很好',
        }],
        pageIndex:1,
        pageSize:10,
        totalfourth:60,
     }
  },
  components:{page},
  created:function(){
    var s = this.$route.params.part;
    alert(s);
  },
  methods:{
  	parentLisenfourth:function(pageIndex,pageSize){
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
#playing{
	padding-top:60px;
	background-color: #F9F9F9;
}	
#playing .living_play{
	width: 1200px;
	height: 600px;
	margin: 0 auto;
	margin-top: 30px;
}
#playing .living_banner{
	margin: 0 auto;
	margin-top: 40px;
	width: 1250px;
	height: 250px;
}
  #playing .el-carousel__indicators--outside{
    display: none;
  }
  #playing .el-carousel__arrow{
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
  #playing .el-carousel__arrow--left{
    left: 0;
  }
  #playing .el-carousel__arrow--right{
    right: 0;
  }
  #playing .el-carousel__item{
    width: 90%;
    left: 5%;
    height: 300px;
  }
  #playing .banner_bar{
    width: 210px;
    height: 230px;
    margin-top: 20px;
    margin-left: 14px;
  }
  #playing .banner_bar_word{
    margin-top: 20px;
    line-height: 17px;
    font-size: 14px;
    color: #272727;
  }
  #playing .living_table_foot{
  	width: 1200px;
  	margin: 0 auto;
  	margin-top: 50px;
  }
#playing .allClass_body_tabs_fourth{
	width: 100%;
	margin-top:10px;
}
#playing .allClass_body_tabs_fourth_bar{
	margin: 0 auto;
	width: 90%;
	height: 100px;
	margin-top: 20px;
}
#playing .allClass_body_tabs_fourth_bar_img{
	width: 60px;
	height: 60px;
	border-radius: 50%;
	overflow: hidden;
}
#playing .allClass_body_tabs_fourth_bar_word{
	width: 92%;
	margin-left: 20px;
}
#playing .allClass_body_tabs_fourth_bar_word p{
	line-height: 19px;
}
#playing .allClass_body_tabs_fourth_bar_word_content{
	width: 100%;
	word-wrap:break-word;
}
#playing .allClass_body_tabs_fourth_pagging{
	width: 100%;
	margin: 0 auto;
	margin-top: 20px;
}
#playing .allClass_body_tabs_fourth_input{
	width: 100%;
	margin-top: 40px;
}
#playing .allClass_body_tabs_fourth_input_img{
	width: 100px;
	height: 100px;
	border-radius: 50%;
	background-color: red;
	margin-left: 30px;
	overflow: hidden;
}
#playing .allClass_body_tabs_fourth_input_img_name{
	margin-left: 55px;
	margin-top: 10px;
}
#playing .allClass_body_tabs_fourth_input_textarea{
	width: 920px;
	margin-left: 50px;
	margin-top: -100px;
}
#playing .allClass_body_tabs_fourth_input_button{
	margin-top:20px;
	margin-right: 50px; 
	width: 125px;
	height: 35px;
}
#playing .play_presentation{
  margin: 0 auto;
  width: 1200px;
  height: 128px;
  background-color: #fff;
  margin-bottom: 40px;
  overflow: hidden;
}
#playing .banner_bar_content_past{
  width: 100%;
  height: 100%;
  border-top: 4px solid #B3B3B3;
  background-color: #fff;
}
#playing .banner_bar_content_past p{
  color: #B3B3B3;
}
#playing .banner_bar_content_now{
  width: 100%;
  height: 100%;
  border-top: 4px solid #6ED56C;
  background-color: #fff;
}
#playing .banner_bar_content_now p{
  color: #6ED56C;
}
#playing .banner_bar_content_future{
  width: 100%;
  height: 100%;
  border-top: 4px solid #66C3E7;
  background-color: #fff;
}
#playing .banner_bar_content_future p{
  color: #66C3E6;
}
#playing .banner_bar_content_button{
  width: 125px;
  height: 35px;
  margin-top: 20px;
  margin-left: 45px;
  border:1px solid #272727;
}
#playing .banner_bar_content_button span{
  color: #272727;
}
#playing .banner_bar_content_button_now{
  width: 125px;
  height: 35px;
  margin-top: 20px;
  margin-left: 45px; 
  border:1px solid #6ED56C;
}
#playing .banner_bar_content_button_now span{
  color: #6ED56C;
}
#playing .banner_bar_content_button_future{
  width: 125px;
  height: 35px;
  margin-top: 20px;
  margin-left: 45px; 
  border:1px solid #66C3E6;
}
#playing .banner_bar_content_button_future span{
  color: #66C3E6;
}
#playing .el-button{
  border-radius:32px;
}
</style>