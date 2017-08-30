<template>
	<div id="index" class="main_body">
		<!--直播-->
		<div class="livePrograss">
			<div class="common_title">
				直播节目
				<div class="title_more">查看更多</div>
			</div>
			<el-table :data="tableData" :show-header="false" :row-style="tableStyle" style="width: 100%;margin-top:20px">
				<el-table-column prop="name" align="center" ></el-table-column>
				<el-table-column prop="sourceName" align="center"  ></el-table-column>
				<el-table-column prop="startDate" align="center" ></el-table-column>
				<el-table-column align="center" >
					<template scope="scope">
                        <span v-if="scope.row.status == '1'" style="color:#6ED56C">直播中</span>
                        <span v-else style="color:#272727">未开始</span>
               		</template>
				</el-table-column>
			</el-table>
		</div>
		
		<!--推荐课程-->
		<div v-if="showRecommend" class="recommend">
			<div class="common_title">
				推荐课程
				<div class="title_more">查看更多</div>
			</div>
			<div class="recommend_mian fix">
				
				<div v-for="e in recommendList" class="recommend_items l">
					<div class="items_img">
						<img :src="e.src" width="100%" />
					</div>
					<div class="items_name ell" :title="e.name">
						{{e.name}}
					</div>
					<div class="items_source fix">
						<div class="source_name l">
							{{e.sourceName}}
						</div>
						<div class="source_count r">
							{{e.count}}次播放
						</div>
					</div>
				</div>
				
			</div>
		</div>
		
		<!--学习记录-->
		<div v-if="showRecord" class="record">
			<div class="common_title">
				学习记录
				<div class="title_more">查看更多</div>
			</div>
			<div class="record_main fix">
				<div class="record_items fix">
					<div class="items_left l">
						<img src="../../static/img/temp/fm5.png" width="100%"/>
					</div>
					<div class="items_right l">
						<div class="items_name">
							数学春季中学二年级数学
						</div>
						<div class="items_school">
							学校: 苏州中学
						</div>
						<div class="items_teacher">
							教师: 马老师
						</div>
						<div class="items_times">
							课时: 18小时
						</div>
						<div class="items_date">
							开课时间: 2017年9月12日 10:00:00
						</div>
						<div class="items_count">
							总播放: 1000次
						</div>
					</div>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
import IndexData from '../assets/data/indexData.js'
export default {
  data () {
    return {
      msg: '首页',
      IndexData,
      
      tableData:[],
      tableStyle:{
      	height:'60px',
      	lineHeight:'60px'
      },
      
      showRecommend:true,
      recommendList:[],
      
      showRecord:true,
      recordList:[],
    }
  },
  mounted:function(){
  	
  	
  	//假数据  接口对接后删除
  	this.tableData = this.IndexData.tableData;
  	this.recommendList = this.IndexData.recommendList;
  	
  }
}
</script>

<style>
#index{overflow-x: hidden;}
#index img{
	display: block;
}
#index .common_title{
	height:40px;
	line-height: 40px;
	border-bottom:2px #6ED56C solid;
	font-size:24px;
	color:#272727;
	padding-left:2px;
	width:100%;
	margin-top: 30px;
	position: relative;
}
#index .common_title .title_more{
	position: absolute;
	width: 100px;
	text-align: center;
	cursor: pointer;
	color:#73D368;
	font-size: 16px;
	top:10px;
	right: 10px;
	height: 20px;
	line-height: 20px;
}
#index .recommend_mian{
	width:1250px;
	margin-left:-25px;
	padding-bottom: 30px;
}
#index .recommend_mian .recommend_items{
	width:200px;
	margin:30px 25px 0 25px;
	background: #ececec;
	cursor: pointer;
}
#index .recommend_mian .recommend_items .items_img{
	width:200px;
}
#index .recommend_mian .recommend_items .items_name{
	width:190px;
	height:30px;
	line-height: 30px;
	padding:0px 10px;
	font-size: 16px;
	color: #272727;
}
#index .recommend_mian .recommend_items .items_source{
	width:180px;
	height:30px;
	line-height: 30px;
	padding:0px 10px;
	font-size: 14px;
	color: #999999;
}

#index .record_main{
	width:1210px;
	margin-left:-5px;
	padding: 20px 0;
}
#index .record_main .record_items{
	margin:20px 5px 0px 5px;
	background:#ececec;
	width:590px;
}
#index .record_main .record_items .items_left{
	width:206px;
}
#index .record_main .record_items .items_right{
	padding: 16px 20px;
	font-size: 14px;
	color: #999999;
	height:30px;
	line-height: 30px;
}
#index .record_main .record_items .items_right .items_name{
	font-size: 16px;
	color: #272727;
	
}


</style>