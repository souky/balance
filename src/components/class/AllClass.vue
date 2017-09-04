<template>
	<div id="allClassMain" class="main_body">
		<div class="classSelect">
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
		</div>
		<div class="classMain">
			<div class="classtitle">
				<span class="itemLabel">排序:</span>
				<span @click="deFault('default')" :class="active4 == 'default'? 'actives': ''">默认</span>
				<span @click="attention('attention')" :class="active4 == 'attention'? 'actives': ''">关注人数</span>
				<span @click="plays('plays')" :class="active4 == 'plays'? 'actives': ''">播放量</span>
				<div class="time_block">
				    <span class="demonstration">开课日期</span>
				    <el-date-picker
				      v-model="startTime"
				      type="datetime"
				      placeholder="选择开课时间">
				    </el-date-picker>
				    <span class="demonstration">~</span>
				    <el-date-picker
				      v-model="endTime"
				      type="datetime"
				      placeholder="选择开课时间">
				    </el-date-picker>
				</div>
			</div>
			<div class="classList">
				<el-row :gutter="13">
				  <el-col :span="6" v-for="e in recommendList" :key="e.id">
				  <div class="items_box " @click="goTodetail(e.id)">
					<div class="items_img"><img :src="e.src" width="100%" /></div>
					<div class="items_name pl10 pr10" :title="e.name">
						{{e.name}}
					</div>
					<div class="items_source pl10 pr10 mt5">
						<span>
							学校：{{e.sourceSchool}}
						</span>
						<span>
							教师：{{e.sourceTeacher}}
						</span>
					</div>
					<div class="items_source pl10 pr10 pb20 pt30">
						<span>
							课时：{{e.sourceTime}}
						</span>
						<span>
							播放量：{{e.count}}次
						</span>
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
      	 pageIndex:1,
	     pageSize:10,
	     total:60,
	     // 开始到结束日期选择
	     startTime:'',
	     endTime:'',
	     
    recommendList:[
    	{
    		id:'1',
  			src:'../../../static/img/temp/fm1.png',
  			name:'苏州中学三年级下册',
  			sourceSchool:'苏州中学',
  			sourceTeacher:'James',
  			sourceTime:'20小时',
  			count:'599'
  		},
  		{
  			id:'2',
  			src:'../../../static/img/temp/fm2.png',
  			name:'苏州中学三年级下册',
  			sourceSchool:'苏州中学',
  			sourceTeacher:'James',
  			sourceTime:'20小时',
  			count:'599'
  		},
  		{
  			id:'3',
  			src:'../../../static/img/temp/fm3.png',
  			name:'苏州中学三年级下册',
  			sourceSchool:'苏州中学',
  			sourceTeacher:'James',
  			sourceTime:'20小时',
  			count:'599'
  		},
  		{
  			id:'4',
  			src:'../../../static/img/temp/fm4.png',
  			name:'苏州中学三年级下册',
  			sourceSchool:'苏州中学',
  			sourceTeacher:'James',
  			sourceTime:'20小时',
  			count:'599'
  		},
  		{
  			id:'5',
  			src:'../../../static/img/temp/fm4.png',
  			name:'苏州中学三年级下册',
  			sourceSchool:'苏州中学',
  			sourceTeacher:'James',
  			sourceTime:'20小时',
  			count:'599'
  		},
  		{
  			id:'6',
  			src:'../../../static/img/temp/fm3.png',
  			name:'苏州中学三年级下册',
  			sourceSchool:'苏州中学',
  			sourceTeacher:'James',
  			sourceTime:'20小时',
  			count:'599'
  		},
  		{
  			id:'7',
  			src:'../../../static/img/temp/fm2.png',
  			name:'苏州中学三年级下册',
  			sourceSchool:'苏州中学',
  			sourceTeacher:'James',
  			sourceTime:'20小时',
  			count:'599'
  		},
  		{
  			id:'8',
  			src:'../../../static/img/temp/fm1.png',
  			name:'苏州中学三年级下册',
  			sourceSchool:'苏州中学',
  			sourceTeacher:'James',
  			sourceTime:'20小时',
  			count:'599'
  		},
  		{
  			id:'9',
  			src:'../../../static/img/temp/fm1.png',
  			name:'苏州中学三年级下册',
  			sourceSchool:'苏州中学',
  			sourceTeacher:'James',
  			sourceTime:'20小时',
  			count:'599'
  		},
  		{
  			id:'10',
  			src:'../../../static/img/temp/fm1.png',
  			name:'苏州中学三年级下册',
  			sourceSchool:'苏州中学',
  			sourceTeacher:'James',
  			sourceTime:'20小时',
  			count:'599'
  		}

    ]
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
	    deFault(strs){
	    	this.active4 = strs;
	    	//后台查询请求
	    },
	    attention(strs){
	    	this.active4 = strs;
	    },
	    plays(strs){
	    	this.active4 = strs;
	    },
	    parentLisen:function(pageIndex,pageSize){
		    this.pageIndex=pageIndex;
		    this.pageSize=pageSize;
		},
		goTodetail(ids){
			// sessionStorage.setItem("classID", ids); 
			 // this.$router.push({path:'/allClassMore/',params:{news_id: 123}});
			this.$router.push({ name: '课程详情', params: { userId: ids }})
		}
	}
}
</script>

<style>
#allClassMain {padding-bottom: 40px}
#allClassMain .classSelect{margin-top:30px;border: 1px solid #E5E5E5;border-radius: 3px;background: #fff;padding:0 40px;}
#allClassMain .selectItem{}
#allClassMain .itemList{padding:16px 0 0 0;border-bottom:1px dashed #e5e5e5;}
#allClassMain .itemList:last-child{border-bottom: 0}
#allClassMain .classSelect .actives,#allClassMain .classMain .actives{color:#6ED56C;}
#allClassMain .itemLabel{color:#999;cursor: default;}
#allClassMain .itemList span{margin-right: 20px;display: inline-block;margin-bottom: 16px;cursor: pointer;font-size: 16px}
#allClassMain .classMain .classtitle{padding: 40px 0 10px 0;border-bottom: 2px #6ED56C solid}
#allClassMain .classtitle span{margin-right: 20px;display: inline-block;cursor: pointer;font-size: 16px}
#allClassMain .time_block{float: right;margin-top: -10px}
#allClassMain .time_block span{margin: 0;color: #999}
#allClassMain .el-row{margin:16px 0;}
#allClassMain .classList .el-col{margin-bottom: 15px}
#allClassMain .items_box{background-color: #f5f5f5;cursor: pointer;}
#allClassMain .items_box .items_img img{height: 246px}
#allClassMain .items_name{color: #272727;font-size: 16px;margin-top: 16px;}
#allClassMain .items_source{color:#999;font-size: 14px;}
#allClassMain .items_source span{margin-right: 8px}
</style>