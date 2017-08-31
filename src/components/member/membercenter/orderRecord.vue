<template>
	<div id="orderrecord">
		<p class="orderrecord_title">预约记录</p>
		<hr style="width:890px;background-color:#E5E5E5;">
		<div class="orderrecord_body">
			<el-form ref="form" :model="form" label-width="80px">
				<el-form-item class="l" label="节目状态">
				    <el-select v-model="form.region" placeholder="请选择节目状态">
				      <el-option v-for="item in Sregion" :key="item.id" :label="item.regionName" :value="item.id"></el-option>
				    </el-select>
				</el-form-item>
				<el-form-item class="l ml30" label="活动时间">
				    <el-col :span="11">
				      <el-date-picker v-model="form.date1" type="datetime" placeholder="选择开始日期时间" style="width: 100%;" @change="dateChange1"></el-date-picker>
				    </el-col>
				    <el-col class="tc" :span="2">——</el-col>
				    <el-col :span="11">
				      <el-date-picker v-model="form.date2" type="datetime" placeholder="选择结束日期时间" style="width: 100%;" @change="dateChange2"></el-date-picker>
				    </el-col>
				  </el-form-item>
			</el-form>
			<el-button class="r" type="primary" @click="query">查询</el-button>
			<div class="cl"></div>
			<div class="mt15">
			<template>
			    <el-table :data="tableData" style="width: 100%">
			      <el-table-column prop="lesson" label="节目名"></el-table-column>
			      <el-table-column prop="lessonTime" label="直播时间"></el-table-column>
			      <el-table-column prop="lessonName" label="课程名"></el-table-column>
			      <el-table-column prop="school" label="学校"></el-table-column>
			      <el-table-column prop="teacher" label="教师"></el-table-column>
			      <el-table-column prop="state" label="节目状态"></el-table-column>
			      <el-table-column prop="operation" label="操作"></el-table-column>
			    </el-table>
		 	</template>
		 	</div>
		</div>
		<div class="orderrecord_paging tc">
			<page :totalNumber="total" @newNOdeEvents="parentLisen"></page>
		</div>
	</div>
</template>

<script>
import page from '../page.vue'
export default{
	data(){
		return{
			form:{
				region: '',
		        date1: '',
		        date2: '',
			},
			tableData:[{
				lesson:111,
				lessonTime:111,
				lessonName:1111,
				school:1111,
				teacher:1111,
				state:11111,
				operation:1111,
			},{
				lesson:2222,
				lessonTime:22222,
				lessonName:222,
				school:222,
				teacher:22222,
				state:2222,
				operation:222,
			},{
				lesson:3333,
				lessonTime:33333,
				lessonName:3333,
				school:3333,
				teacher:33333,
				state:33333,
				operation:33333,
			}],
			Sregion:[{
				id:11,
				regionName:'测试',
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
		dateChange1(val) {
		    this.form.date1=val;
		    this.form.date1=this.form.date1.substr(0, 16);
		},
		dateChange2(val){
			this.form.date2=val;
			this.form.date2=this.form.date2.substr(0, 16);
		},
		query:function(){
			this.form.date1=(new Date(this.form.date1)).toLocaleString().slice(0, 15);
			alert(this.form.date1);
			alert(this.form.date2);
		},
		parentLisen:function(pageIndex,pageSize){
	    	this.pageIndex=pageIndex;
	    	this.pageSize=pageSize;
	    	this.fetchData();
	    },
	    fetchData:function(){
	    	alert("预约"+this.pageSize);
	    	alert("预约"+this.pageIndex);
	    },
	}
}
</script>

<style>
#orderrecord .orderrecord_title{
	margin-top: 36px;
	margin-left: 40px;
	font-size: 16px;
	color: #999999;
	margin-bottom: 13px;
}
#orderrecord .orderrecord_body{
	margin: 0 auto;
	margin-top: 20px;
	width: 90%;
	overflow: hidden;
	min-height: 360px;
}
#orderrecord .orderrecord_paging{
	margin-top: 40px;
	margin-bottom: 40px;
}
#orderrecord .orderrecord_body .el-button:hover{color:#fff;}
</style>