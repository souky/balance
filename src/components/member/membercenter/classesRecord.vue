<template>
<div id="classesrecord">
	<p class="classesrecord_title l">排序：</p>
	<p class="l ml10 mt36" @click="classesrecordOrder('1')">名称</p>
	<p class="l ml10 mt36" @click="classesrecordOrder('2')">开课日期</p>
	<p class="l ml10 mt36" @click="classesrecordOrder('3')">关注人数</p>
	<p class="l ml10 mt36" @click="classesrecordOrder('4')">播放量</p>
	<hr style="width:890px;background-color:#E5E5E5;">
	<div class="classesrecord_table">
		<template>
		    <el-table :data="tableData" style="width: 100%">
		      <el-table-column prop="lesson" label="课程"></el-table-column>
		      <el-table-column prop="lessonStart" label="开课时间"></el-table-column>
		      <el-table-column prop="lessonTime" label="课时"></el-table-column>
		      <el-table-column prop="followersNumber" label="关注人数"></el-table-column>
		      <el-table-column prop="playNumber" label="播放量"></el-table-column>
		    </el-table>
		 </template>
	</div>
	<div class="classesrecord_paging tc">
		<page :totalNumber="total" @newNOdeEvents="parentLisen"></page>
	</div>
</div>
</template>

<script>
import page from '../page.vue'
export default {
     data() {
        return {
          tableData: [{
            lesson:'语文',
            lessonStart:'2017-09-02 14:30',
            lessonTime:'1小时',
            followersNumber:'223',
            playNumber:'1000',
          },{
            lesson:'数学',
            lessonStart:'2017-09-01 14:30',
            lessonTime:'1小时',
            followersNumber:'223',
            playNumber:'1000',
          },{
            lesson:'英语',
            lessonStart:'2017-09-02 18:30',
            lessonTime:'1小时',
            followersNumber:'223',
            playNumber:'1000',
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
      methods: {
      	getdata:function(){
      		this.$emit('newfind');
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
	    classesrecordOrder:function(e){
	    	if(e==1){
	    		alert(1);
	    	}
	    	if(e==2){
	    		alert(2);
	    	}
	    	if(e==3){
	    		alert(3);
	    	}
	    	if(e==4){
	    		alert(4);
	    	}
	    }
    },
    }
</script>

<style>

#classesrecord .classesrecord_title{
	margin-top: 36px;
	margin-left: 40px;
	font-size: 16px;
	color: #999999;
}
#classesrecord .mt36{
	margin-top: 36px;
	font-size: 16px;
}
#classesrecord .classesrecord_table{
	margin: 0 auto;
	margin-top: 20px;
	width: 90%;
	min-height: 360px;
}
#classesrecord .classesrecord_paging{
	margin-top: 40px;
	margin-bottom: 40px;
}
</style>