<template>
	<div id="studyrecord">
		<div class="studyrecord_header fix">
			<div class="studyrecord_header_title active l" @click="choiseType('all',$event)"><p class="all">全部</p></div>
			<div class="studyrecord_header_title l" @click="choiseType('studing',$event)"><p class="studing">正在学</p></div>
			<div class="studyrecord_header_title l" @click="choiseType('studed',$event)"><p class="studed">未学</p></div>
			<div class="studyrecord_header_title l" @click="choiseType('over',$event)"><p class="over">已学完</p></div>
			<div class="line-cross l"></div>
		</div>
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
				lesson:'语文',
				school:'苏州小学',
				teacher:'James',
				progress:'正在学',
				lastsuty:'小学语文',
				start:'2017-09-03',
				lessontime:'2小时',
			},{
				lesson:'数学',
				school:'苏州小学',
				teacher:'James',
				progress:'正在学',
				lastsuty:'小学语文',
				start:'2017-09-03',
				lessontime:'2小时',
			},{
				lesson:'英语',
				school:'苏州小学',
				teacher:'Tom',
				progress:'正在学',
				lastsuty:'小学语文',
				start:'2017-09-03',
				lessontime:'2小时',
			}],
			pageIndex:1,
          	pageSize:10,
          	total:60,
		}
	},
	created:function(){
      this.getdata();
    },
	components:{page},
	methods:{
		getdata:function(){
			this.$emit('newfind');
		},
		choiseType:function(type,event){
			var obj = event.currentTarget;
			var reg = new RegExp('(\\s|^)active(\\s|$)'); 
			var list = document.getElementsByClassName("studyrecord_header_title");
			for(var i = 0;i<list.length;i++){
		  		var e = list[i];
		  		e.className = e.className.replace(reg,' ');
		  	}
		  	obj.className += ' active';
		  	if(type=='all'){
		  		//alert(1)
		  	}
		  	if(type=='studing'){
		  		//alert(2)
		  	}
		  	if(type=='studed'){
		  		//alert(3)
		  	}
		  	if(type=='over'){
		  		//alert(4)
		  	}
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
#studyrecord .studyrecord_header{
	width: 90%;
	margin:34px auto 20px auto;
}
#studyrecord .ml42{
	margin-left: 42px;
}
#studyrecord .all:hover{
	color:#6ED56C;
}
#studyrecord .studing:hover{
	color:#6ED56C;
}
#studyrecord .studed:hover{
	color:#6ED56C;
}
#studyrecord .over:hover{
	color:#6ED56C; 
}
#studyrecord .studyrecord_header_title{
	width: 10%;
	height:30px;
	line-height: 30px;
	border-bottom: 2px #e5e5e5 solid;
	text-align:center;
	cursor:pointer;
}
#studyrecord .studyrecord_header{
	position: relative;
}
#studyrecord .studyrecord_header .active{
	height: 30px;
	color:#6ED56C; 
	border-bottom:2px solid #6ED56C;
}
#studyrecord .studyrecord_header .line-cross{
	width:60%;
	height:30px;
	border-bottom:2px solid #e5e5e5;
	z-index:0;
}
#studyrecord .studyrecord_body{
	margin: 0 auto;
	width: 90%;
	min-height: 360px;
}
#studyrecord .studyrecord_paging{
	margin-top: 40px;
	margin-bottom: 40px;
}
</style>