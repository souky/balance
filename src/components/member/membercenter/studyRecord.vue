<template>
	<div id="studyrecord">
		<div class="studyrecord_header">
			<div class="studyrecord_header_title active l" @click="choiseType('all',$event)"><p class="all">全部</p></div>
			<div class="studyrecord_header_title l" @click="choiseType('studing',$event)"><p class="studing">正在学</p></div>
			<div class="studyrecord_header_title l" @click="choiseType('studed',$event)"><p class="studed">未学</p></div>
			<div class="studyrecord_header_title l" @click="choiseType('over',$event)"><p class="over">已学完</p></div>
		</div>
		<hr style="width:890px;background-color:#E5E5E5;">
		<div class="studyrecord_body">
		 <template>
		    <el-table :data="tableData" style="width: 100%">
		      <el-table-column prop="lesson" label="课程"></el-table-column>
		      <el-table-column prop="school" label="学校"></el-table-column>
		      <el-table-column prop="teacher" label="老师"></el-table-column>
		      <el-table-column prop="progress" label="进度"></el-table-column>
		      <el-table-column prop="lastsuty" label="最近学习"></el-table-column>
		      <el-table-column prop="start" label="开课日期"></el-table-column>
		      <el-table-column prop="lessontime" label="课时"></el-table-column>
		    </el-table>
		 </template>
		</div>
		<div class="studyrecord_paging tc">
			<page :totalNumber="total" @newNOdeEvents="parentLisen"></page>
		</div>
	</div>
</template>
<script>
import page from '../page.vue'
export default{
	data(){
		return{
			tableData:[{
				lesson:1111,
				school:11111,
				teacher:1111,
				progress:11111,
				lastsuty:1111,
				start:1111,
				lessontime:11111,
			},{
				lesson:2222,
				school:22222,
				teacher:22222,
				progress:2222,
				lastsuty:222222,
				start:2222,
				lessontime:22222,
			},{
				lesson:3333,
				school:33333,
				teacher:33333,
				progress:33333,
				lastsuty:3333,
				start:33333,
				lessontime:33333,
			}],
			pageIndex:1,
          	pageSize:10,
          	total:60,
		}
	},
	components:{page},
	methods:{
		choiseType:function(type,event){
			var obj = event.currentTarget;
			var reg = new RegExp('(\\s|^)active(\\s|$)'); 
			var list = document.getElementsByClassName("studyrecord_header_title");
			for(var i = 0;i<list.length;i++){
		  		var e = list[i];
		  		e.className = e.className.replace(reg,' ');
		  	}
		  	obj.className += ' active';
		},
		parentLisen:function(pageIndex,pageSize){
	    	this.pageIndex=pageIndex;
	    	this.pageSize=pageSize;
	    	this.fetchData();
	    },
	    fetchData:function(){
	    	alert("学习"+this.pageSize);
	    	alert("学习"+this.pageIndex);
	    },
	}
}
</script>
<style>
#studyrecord{
	overflow: hidden;
}
.studyrecord_header{
	margin-top: 34px;
	margin-left: 59px;
}
.ml42{
	margin-left: 42px;
}
.all:hover{
	color:#6ED56C;
}
.studing:hover{
	color:#6ED56C;
}
.studed:hover{
	color:#6ED56C;
}
.over:hover{
	color:#6ED56C; 
}
.studyrecord_header_title{
	width: 80px;
	text-align:center;
}
.active{
	height: 30px;
	color:#6ED56C; 
	border-bottom:3px solid #6ED56C;
}
.studyrecord_body{
	margin: 0 auto;
	margin-top: 20px;
	width: 90%;
}
.studyrecord_paging{
	margin-top: 40px;
	margin-bottom: 40px;
}
</style>