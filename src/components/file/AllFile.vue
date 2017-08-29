<template>
	<div id="allFile" class="main_body">
		<div class="fileSelect">
			<div class="selectItem">
				<div class="itemList">
					<span class="itemLabel">年级:</span>
					<span v-for="(item,index) in Grade" :key="item.id" :class="active == index? 'active': ''" @click="setactive(index)">{{item.name}}</span>
				</div>
				<div class="itemList">
					<span class="itemLabel">学科:</span>
					<span v-for="item in Subject" :key="item.id">{{item.name}}</span>
				</div>
				<div class="itemList">
					<span class="itemLabel">学校:</span>
					<span v-for="item in School" :key="item.id">{{item.name}}</span>
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
	</div>
</template>

<script>
export default {
  data () {
    return {
    	active: 0,
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
        select3:''
      	}
  	}
  },
  methods:{
		setactive(index) {
			console.log(index);
	      this.active = index;
	    }
	}
}
</script>

<style>
#allFile .fileSelect{margin-top:30px;border: 1px solid #E5E5E5;border-radius: 3px;background: #fff;padding:0 40px;}
#allFile .selectItem{}
#allFile .itemList{padding:17px 0;border-bottom:1px dashed #e5e5e5;}
#allFile .el-row{margin:17px 0;}
.active{color:red;}
</style>