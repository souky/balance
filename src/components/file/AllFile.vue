<template>
	<div id="allFile" class="main_body">
		<div class="fileSelect">
			<div class="selectItem">
				<div class="itemList">
					<span class="itemLabel">年级:</span>
					  <div class="itemDetail">
              <span :class="active == -1? 'actives': ''" @click="chooseGrade(-1)">全部</span>
              <span v-for="(item,index) in Grade" :key="item.id" :class="active == index? 'actives': ''" @click="chooseGrade(index)">{{item.name}}</span>
            </div>
        </div>
				<div class="itemList">
					<span class="itemLabel">学科:</span>
          <div  class="itemDetail">
          <span :class="active2 == -1? 'actives': ''" @click="chooseSubject(-1)">全部</span>
					<span v-for="(item,index) in Subject" :key="item.id" :class="active2 == index? 'actives': ''" @click="chooseSubject(index)">{{item.dicName}}</span>
        </div>
				</div>
				<div class="itemList">
					<span class="itemLabel">学校:</span>
          <div class="itemDetail">
            <span :class="active3 == -1? 'actives': ''" @click="chooseSchool(-1)">全部</span>
					  <span v-for="(item,index) in School" :key="item.id" :class="active3 == index? 'actives': ''" @click="chooseSchool(index)">{{item.name}}</span>
          </div>
				</div>
			</div>
			<el-row>
			  <el-col :span="8">
			  	<div class="labelItem">
				<label>老师</label>
				<el-select v-model="select.select1" filterable placeholder="请选择">
				    <el-option
				      v-for="item in select.options1"
				      :key="item.id"
				      :label="item.name"
				      :value="item.name">
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
				      :key="item.id"
				      :label="item.name"
				      :value="item.name">
				    </el-option>
				 </el-select>
			 </div></el-col>
			  <el-col :span="8">
			  <div class="labelItem">
				<label>教辅类型</label>
				<el-select v-model="select.select3" filterable placeholder="请选择">
				    <el-option
				      v-for="item in select.options3"
				      :key="item.id"
				      :label="item.dicName"
				      :value="item.dicName">
				    </el-option>
				 </el-select>
			 </div></el-col>
			</el-row>
		</div>
		<div class="fileMain">
			<div class="filetitle">
				<span class="itemLabel">排序:</span>
				<span @click="updataTime('updata')" :class="active4 == 'updata'? 'actives': ''">更新时间</span>
				<span @click="downLoad('download')" :class="active4 == 'download'? 'actives': ''">下载量</span>
        <span class="totle">共{{total}}份文件</span>
			</div>
			<div class="fileList">
				<el-row :gutter="20">
				  <el-col :span="12" v-for="item in curriculum" :key="item.id">
				  	<div class="file-content">
				  		<div class="file-img inline__box">
				  			<img v-if="item.suffix=='rar'" src="../../../static/img/defualt/rar.png" />
				  			<img v-if="item.suffix=='png'" src="../../../static/img/defualt/img.png" />
				  			<img v-if="item.suffix=='fla'" src="../../../static/img/defualt/swf.png" />
				  			<img v-if="item.suffix=='mp4'" src="../../../static/img/defualt/voice.png" />
				  			<img v-if="item.suffix=='avi'" src="../../../static/img/defualt/video.png" />
				  			<img v-if="item.suffix=='word'" src="../../../static/img/defualt/doc.png" />
				  			<img v-if="item.suffix=='exe'" src="../../../static/img/defualt/exe.png" />
				  		</div><div class="file-detail inline__box">
							<div class="file-title">
								【{{item.courseName}}】 {{item.name}}
							</div>
							<div class="file-config">
								课程：{{item.courseName}}
							</div>
							<div class="file-config">
								大纲：{{item.courseSyllabusName}}
							</div>
							<div class="file-config">
								<span>
									老师：{{item.teacherName}}
								</span>
								<span>
									文件类型：{{item.suffix}}
								</span>
								<span>
									下载量：{{item.downloads}}
								</span>
							</div>
							<div class="file-config">
								更新日期：{{timeF(item.updateDate).format("YYYY/MM/DD")}}
								<button @click="downloadC()">下载</button>
							</div>
				  		</div>
				  	</div>
				  </el-col>
				</el-row>
				<div class="cl  tc">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  data () {
    return {
    	/** 筛选条件的选中状态设置 */
    	active: -1,
    	active2:-1,
    	active3:-1,
    	active4:'updata',
    	/** 筛选条件的选中状态设置 */
    	/** 年级选择 */
      	Grade:{},
      	/** 年纪选择结束 */
      	/** 学科选择 */
      	Subject:{},
      	/** 学科选择结束 */
      	/** 学校选择 */
      	School:{},
      	/** 学校选择结束 */
      	/** 老师课程教辅 */
      	select:{
      	options1:{},
      	options2:{},
      	options3:{},
        select1:'',
        select2:'',
        select3:'',
        
        },
        /** 老师课程结束 */
		/** 课程内容开始 */
		 curriculum:{},
         /** 课程内容结束 */
       pageIndex:1,
	     pageSize:10,
       tab:'UPDATE_DATE',
	     total:60
  	}
  },
  mounted:function(){
     this.postHttp(this,'',"teachingfile/study/initParamList",function(obj,data){
       obj.Grade = data.result.gradeList;
       obj.Subject = data.result.subjectList;
       obj.School = data.result.schoolList;
       obj.select.options1 = data.result.teacherList;
       obj.select.options2 = data.result.courseList;
       obj.select.options3 = data.result.teachingFileList;
      });
     var needData = {pageNum:this.pageIndex,pageSize:this.pageSize,tab:this.tab}
     this.postHttp(this,needData,"teachingfile/study/queryTeachingFilesByType",function(obj,data){
        obj.curriculum = data.result.list;
        obj.total = data.result.size;
     })
  },
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
#allFile .itemDetail{display:inline-block;width:1050px}
#allFile .itemLabel{color:#999;cursor: default;vertical-align: top}
#allFile .itemList span{margin-right: 20px;display: inline-block;margin-bottom: 16px;cursor: pointer;font-size: 16px}
#allFile .totle{float: right;font-size: 16px;color: #999}
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