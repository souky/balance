<template>
	<div id="living">
		<div class="living_play">
			<img src="../../../static/img/main.png" width="1200px" height="600px">
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
               <img v-if="child.type==''" src="../../../static/img/defualt/noRecord.png" height="100%" width="100%">
               <img v-else :src="child.img">
			         <p class="tc banner_bar_word">{{child.word}}</p>
			       </div>
			    </el-carousel-item>
			  </el-carousel>
		</div>
		<div class="living_table_foot">
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
      users:[],
    	 items:[
          {
          type:'rar',
          word:'压缩文件',
          img:''
        },{
          type:'swf',
          word:'动画',
          img:''
        },{
          type:'voice',
          word:'声音',
          img:''
        },{
          type:'doc',
          word:'文字',
          img:''
        },{
          type:'rar',
          word:'压缩包',
          img:''
        },{
          type:'rars',
          word:'压缩文件',
          img:''
        },{
          type:'swf',
          word:'动画',
          img:''
        },{
          type:'voice',
          word:'声音',
          img:''
        },{
          type:'doc',
          word:'文字',
          img:''
        },{
          type:'rar',
          word:'压缩包',
          img:''
        },
       /*{
        id:1,
        childs:[{
          type:'rar',
          word:'压缩文件',
          img:''
        },{
          type:'fla',
          word:'动画',
          img:''
        },{
          type:'mp3',
          word:'声音',
          img:''
        },{
          type:'word',
          word:'文字',
          img:''
        },{
          type:'rar',
          word:'压缩包',
          img:''
        }],
      },{
        id:2,
        childs:[{
          type:'rar',
          word:'压缩包',
          img:''
        },{
          type:'fla',
          word:'动画',
          img:''
        },{
          type:'mp3',
          word:'声音',
          img:''
        },{
          type:'word',
          word:'文字',
          img:''
        },{
          type:'rar',
          word:'压缩文件',
          img:''
        }]
      },{
        id:3,
        childs:[{
          type:'rar',
          word:'压缩包',
          img:''
        },{
          type:'fla',
          word:'动画',
          img:''
        },{
          type:'mp3',
          word:'声音',
          img:''
        },{
          type:'word',
          word:'文字',
          img:''
        },{
          type:'rar',
          word:'压缩文件',
          img:''
        }]
      },{
        id:4,
        childs:[{
          type:'rar',
          word:'压缩文件',
          img:''
        },{
          type:'fla',
          word:'动画',
          img:''
        },{
          type:'mp3',
          word:'声音',
          img:''
        },{
          type:'word',
          word:'文字',
          img:''
        },{
          type:'rar',
          word:'压缩包',
          img:''
        }]
      }*/],
      comments:[{
        	name:'James',
        	date:'2017-03-13',
        	what:'评论了整体课程',
        	content:'Java是一门面向对象编程语言，不仅吸收了C++语言的各种优点，还摒弃了C++里难以理解的多继承、指针等概念，因此Java语言具有功能强大和简单易用两个特征。Java语言作为静态面向',
        },{
        	name:'James',
        	date:'2017-03-13',
        	what:'评论了整体课程',
        	content:'Java是一门面向对象编程语言，不仅吸收了C++语言的各种优点，还摒弃了C++里难以理解的多继承、指针等概念，因此Java语言具有功能强大和简单易用两个特征。Java语言作为静态面向',
        },{
        	name:'James',
        	date:'2017-03-13',
        	what:'评论了整体课程',
        	content:'Java是一门面向对象编程语言，不仅吸收了C++语言的各种优点，还摒弃了C++里难以理解的多继承、指针等概念，因此Java语言具有功能强大和简单易用两个特征。Java语言作为静态面向',
        }],
        pageIndex:1,
        pageSize:10,
        totalfourth:60,
     }
  },
  components:{page},
  created:function(){
    var s = this.$route.params.part;
    //alert(s);
    for(var i=0;i<this.items.length;i++){
      this.items[i].img="../../../static/img/defualt/"+this.items[i].type+".png";
    }
    console.log(this.items)
    var childNum=Math.ceil(this.items.length/5);
    var childs=[];
    for(var l=0;l<childNum;l++){
      var id=l+1;
      var e=5*(l+1);
      var s=e-5;
      childs[l] = []
      childs[l]["childs"]=this.items.slice(s,e);
      childs[l]["id"] = id;
    }
    this.users=childs;
    console.log(this.users)
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
</style>