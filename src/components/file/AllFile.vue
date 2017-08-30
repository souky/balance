<template>
	<div id="allFile" class="main_body">
		<div class="fileSelect">
			<div class="selectItem">
				<div class="itemList">
					<span class="itemLabel">年级:</span>
					<span v-for="(item,index) in Grade" :key="item.id" :class="active == index? 'actives': ''" @click="chooseGrade(index)">{{item.name}}</span>
				</div>
				<div class="itemList">
					<span class="itemLabel">学科:</span>
					<span v-for="(item,index) in Subject" :key="item.id" :class="active2 == index? 'actives': ''" @click="chooseSubject(index)">{{item.name}}</span>
				</div>
				<div class="itemList">
					<span class="itemLabel">学校:</span>
					<span v-for="(item,index) in School" :key="item.id" :class="active3 == index? 'actives': ''" @click="chooseSchool(index)">{{item.name}}</span>
				</div>
			</div>
			<el-row>
			  <el-col :span="8">
			  	<div class="labelItem">
				<label>老师</label>
				<el-select v-model="select.select1" filterable placeholder="请选择">
				    <el-option
				      v-for="item in select.options1"
				      :key="item.value"
				      :label="item.label"
				      :value="item.value">
				    </el-option>
				 </el-select>
			 </div>
			  </el-col>
			  <el-col :span="8">
			  <div class="labelItem">
				<label>课程</label>
				<el-select v-model="select.select2" filterable placeholder="请选择">
				    <el-option
				      v-for="item in select.options2"
				      :key="item.value"
				      :label="item.label"
				      :value="item.value">
				    </el-option>
				 </el-select>
			 </div></el-col>
			  <el-col :span="8">
			  <div class="labelItem">
				<label>教辅类型</label>
				<el-select v-model="select.select3" filterable placeholder="请选择">
				    <el-option
				      v-for="item in select.options3"
				      :key="item.value"
				      :label="item.label"
				      :value="item.value">
				    </el-option>
				 </el-select>
			 </div></el-col>
			</el-row>
		</div>
		<div class="fileMain">
			<div class="filetitle">
				<span class="itemLabel">排序:</span>
				<span @click="updataTime('updata')" :class="active4 == 'updata'? 'actives': ''">更新时间</span>
				<span @click="SubjectType('type')" :class="active4 == 'type'? 'actives': ''">教辅类型</span>
				<span @click="downLoad('download')" :class="active4 == 'download'? 'actives': ''">下载量</span>
			</div>
			<div class="fileList">
				<el-row :gutter="20">
				  <el-col :span="12" v-for="item in curriculum" :key="item.id">
				  	<div class="file-content">
				  		<div class="file-img inline__box">
				  			<img v-if="item.type=='rar'" src="../../../static/img/defualt/rar.png" />
				  			<img v-if="item.type=='png'" src="../../../static/img/defualt/img.png" />
				  			<img v-if="item.type=='fla'" src="../../../static/img/defualt/swf.png" />
				  			<img v-if="item.type=='mp3'" src="../../../static/img/defualt/voice.png" />
				  			<img v-if="item.type=='avi'" src="../../../static/img/defualt/video.png" />
				  			<img v-if="item.type=='word'" src="../../../static/img/defualt/doc.png" />
				  			<img v-if="item.type=='exe'" src="../../../static/img/defualt/exe.png" />
				  		</div><div class="file-detail inline__box">
							<div class="file-title">
								{{item.Courseware}}
							</div>
							<div class="file-config">
								课程：{{item.name}}
							</div>
							<div class="file-config">
								大纲：{{item.outline}}
							</div>
							<div class="file-config">
								<span>
									老师：{{item.teacher}}
								</span>
								<span>
									文件类型：{{item.type}}
								</span>
								<span>
									下载量：{{item.download}}
								</span>
							</div>
							<div class="file-config">
								更新日期：{{item.time}}
								<button :click="downloadC()">下载</button>
							</div>
				  		</div>
				  	</div>
				  </el-col>
				</el-row>
				<div class="cl  tc">
					<page class="mt20" :totalNumber="total" @newNOdeEvents="parentLisen"></page>
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
    	/** 筛选条件的选中状态设置 */
    	active: 0,
    	active2:0,
    	active3:0,
    	active4:'',
    	/** 筛选条件的选中状态设置 */
    	/** 年级选择 */
      	Grade:[{
      		id:'0',
      		name:'全部'
      	},{
      		id:'1',
      		name:'一年级'
      	},{
      		id:'2',
      		name:'二年级'
      	},{
      		id:'3',
      		name:'三年级'
      	},{
      		id:'4',
      		name:'三年级'
      	}],
      	/** 年纪选择结束 */
      	/** 学科选择 */
      	Subject:[{
      		id:'0',
      		name:'全部'
      	},{
      		id:'1',
      		name:'语文'
      	},{
      		id:'2',
      		name:'数学'
      	},{
      		id:'3',
      		name:'英语'
      	},{
      		id:'4',
      		name:'物理'
      	}],
      	/** 学科选择结束 */
      	/** 学校选择 */
      	School:[{
      		id:'0',
      		name:'全部'
      	},{
      		id:'1',
      		name:'苏州中学'
      	},{
      		id:'2',
      		name:'延安中学'
      	}],
      	/** 学校选择结束 */
      	/** 老师课程教辅 */
      	select:{
      	options1:[{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
      	options2:[{
          value: '选项1',
          label: '白银糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
      	options3:[{
          value: '选项1',
          label: '青铜糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        select1:'',
        select2:'',
        select3:'',
        
        },
        /** 老师课程结束 */
		/** 课程内容开始 */
		 curriculum:[{
        	id:1,
        	Courseware:'【课件】第一课',
        	name:'James2017年初一三班语文课',
        	outline:'第一章—第一节—第一课 春',
        	teacher:'James',
        	type:'rar',
        	download:'1万',
        	time:'2017/07/21'
        },{
        	id:2,
        	Courseware:'【课件】第二课',
        	name:'James2017年初一三班语文课',
        	outline:'第一章—第一节—第一课 春',
        	teacher:'James',
        	type:'png',
        	download:'1万',
        	time:'2017/07/21'
        },{
        	id:3,
        	Courseware:'【课件】第三课',
        	name:'James2017年初一三班语文课',
        	outline:'第一章—第一节—第一课 春',
        	teacher:'James',
        	type:'fla',
        	download:'1万',
        	time:'2017/07/21'
        },{
        	id:4,
        	Courseware:'【课件】第四课',
        	name:'James2017年初一三班语文课',
        	outline:'第一章—第一节—第一课 春',
        	teacher:'James',
        	type:'mp3',
        	download:'1万',
        	time:'2017/07/21'
        },{
        	id:5,
        	Courseware:'【课件】第五课',
        	name:'James2017年初一三班语文课',
        	outline:'第一章—第一节—第一课 春',
        	teacher:'Yamy',
        	type:'avi',
        	download:'671',
        	time:'2017/07/21'
        },{
        	id:6,
        	Courseware:'【课件】第六课',
        	name:'James2017年初一三班生物课',
        	outline:'第一章—第一节—第一课 春',
        	teacher:'Tom',
        	type:'word',
        	download:'1376',
        	time:'2017/07/21'
        },{
        	id:7,
        	Courseware:'【课件】第七课',
        	name:'James2017年初一三班物理课',
        	outline:'第一章—第一节—第一课 春',
        	teacher:'Daria',
        	type:'exe',
        	download:'2571',
        	time:'2017/07/26'
        },{
        	id:8,
        	Courseware:'【课件】第八课',
        	name:'James2017年初一三班化学课',
        	outline:'第一章—第一节—第一课 春',
        	teacher:'Timmy',
        	type:'rar',
        	download:'1067',
        	time:'2017/07/28'
        }],
         /** 课程内容结束 */
         pageIndex:1,
	     pageSize:10,
	     total:60
  	}
  },
  components:{page},
  methods:{
		chooseGrade(index) {
	      this.active = index;
	      //后台请求
	    },
	    chooseSubject(index){
		  this.active2 = index;
	    },
	    chooseSchool(index){
	      this.active3 = index;
	    },
	    updataTime(strs){
	    	this.active4 = strs;
	    	//后台查询请求
	    },
	    SubjectType(strs){
	    	this.active4 = strs;
	    },
	    downLoad(strs){
	    	this.active4 = strs;
	    },
	    downloadC(){
	    	console.log("下载课程");
	    },
	    parentLisen:function(pageIndex,pageSize){
		    this.pageIndex=pageIndex;
		    this.pageSize=pageSize;
		}
	}
}
</script>

<style>
#allFile {padding-bottom: 40px}
#allFile .fileSelect{margin-top:30px;border: 1px solid #E5E5E5;border-radius: 3px;background: #fff;padding:0 40px;}
#allFile .selectItem{}
#allFile .itemList{padding:16px 0 0 0;border-bottom:1px dashed #e5e5e5;}
#allFile .el-row{margin:16px 0;}
#allFile .fileSelect .actives,#allFile .fileMain .actives{color:#6ED56C;}
#allFile .itemLabel{color:#999;cursor: default;}
#allFile .itemList span{margin-right: 20px;display: inline-block;margin-bottom: 16px;cursor: pointer;font-size: 16px}
#allFile .labelItem label,.filetitle .itemLabel{color: #999;margin-right: 20px}
#allFile .fileMain .filetitle{padding: 40px 0 10px 0;border-bottom: 2px #6ED56C solid}
#allFile .filetitle span{margin-right: 20px;display: inline-block;cursor: pointer;font-size: 16px}
#allFile .fileList .el-col{margin-bottom: 20px}
#allFile .fileList .file-content{height: 200px;background-color: #f5f5f5}
#allFile .file-detail{padding:16px 10px 4px 18px;height: 180px;vertical-align: top}
#allFile .file-title{margin-bottom: 15px;font-size: 16px;color: #272727}
#allFile .file-config{color: #999;font-size: 14px;margin-bottom:15px; }
#allFile .file-config button{border:1px solid #6ED56C;border-radius: 25px;height: 35px;width: 125px;vertical-align: bottom;color: #fff;background-color: #6ed56c;font-size: 16px;outline: none;margin-left: 85px}
#allFile .file-config span{margin-right: 18px}
</style>