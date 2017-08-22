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
		<!--<template>
			<el-pagination v-bind:current-Page="pageIndex" v-bind:page-size="pageSize" :total="total"
        layout="sizes,prev,pager,next,jumper" v-bind:page-sizes="pageSizes"
        v-on:size-change="sizeChange" v-on:current-change="pageIndexChange"></el-pagination>
		</template>-->
		<page @newNOdeEvents="parentLisen"></page>
	</div>
</div>
</template>

<script>
import page from '../page.vue'
export default {
     data() {
        return {
          tableData: [{
            lesson:1111,
            lessonStart:1111,
            lessonTime:11111,
            followersNumber:11111,
            playNumber:11111,
          },{
            lesson:2222,
            lessonStart:2222,
            lessonTime:2222,
            followersNumber:22222,
            playNumber:2222,
          },{
            lesson:3333,
            lessonStart:33,
            lessonTime:3333,
            followersNumber:3333,
            playNumber:333333,
          }],
          /*pageIndex:1,
          pageSize:10,
          total:40,
          pageSizes:[10,20,50,100],*/
          pageIndex:1,
          pageSize:10,
        }
      },
      components:{page},
      methods: {
      /*sizeChange: function (pageSize) {   //每页显示条数
	      this.pageSize = pageSize;
	      this.fetchData();
	    },
	   pageIndexChange: function (pageIndex) {   //第几页
	      this.pageIndex = pageIndex;
	      this.fetchData();
	    },*/
	    parentLisen:function(pageIndex,pageSize){
	    	this.pageIndex=pageIndex;
	    	this.pageSize=pageSize;
	    	this.fetchData();
	    },
	    fetchData:function(){
	    	alert(this.pageSize);
	    	alert(this.pageIndex);
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
.mt36{
	margin-top: 36px;
	font-size: 16px;
}
.classesrecord_table{
	margin: 0 auto;
	margin-top: 20px;
	width: 90%;
}
.classesrecord_paging{
	margin-top: 40px;
	margin-right: 40px;
	margin-bottom: 40px;
}
</style>