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
				<div v-for="e in recordList" class="record_items l fix">
					<div class="items_left l">
						<img :src="e.src" width="100%"/>
					</div>
					<div class="items_right l">
						<div class="items_name">
							{{e.name}}
						</div>
						<div class="items_school">
							学校: {{e.schoolName}}
						</div>
						<div class="items_teacher">
							教师: {{e.teacherName}}
						</div>
						<div class="items_times">
							课时: {{e.times}}
						</div>
						<div class="items_date">
							开课时间: {{e.startDate}}
						</div>
						<div class="items_count">
							总播放: {{e.count}}次
						</div>
						<div class="cross">
							最近学习: {{e.cross}}
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="last_update">
			<div class="common_title">
				最近更新
				<div class="title_more">查看更多</div>
				
				<div v-if="isVideo" @click="changeVideo($event)" class="tab_update active">课堂视频</div>
				<div v-else @click="changeVideo($event)" class="tab_update">课堂视频</div>
				
				<div v-if="isVideo == false" @click="changeVideo($event)" class="tab_update orther active">教辅文件</div>
				<div v-else @click="changeVideo($event)" class="tab_update orther">教辅文件</div>
			</div>
			
			<div class="last_update_main fix">
				<div v-for="e in lastUpdateList" class="last_update_items l fix">
					<div class="items_left l">
						<img :src="e.src" width="100%" />
					</div>
					<div class="items_right l">
						<div class="items_name">{{e.name}}</div>
						<div class="items_cross">课程: {{e.crossName}}</div>
						
						<div class="fix">
							<div class="items_school l">学校: {{e.schoolName}}</div>
							<div class="items_updateTime l">更新日期: {{e.updateDate}}</div>
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
      
      isVideo:true,
      lastUpdateList:[],
    }
  },
  mounted:function(){
  	
  	//假数据  接口对接后删除
  	this.tableData = this.IndexData.tableData;
  	this.recommendList = this.IndexData.recommendList;
  	this.recordList = this.IndexData.recordList;
  	this.lastUpdateList = this.IndexData.lastUpdateList;
  	document.body.scrollTop = 800;
  },
  methods:{
  	changeVideo(e){
  		var obj = e.currentTarget;
  		var html = obj.innerHTML;
  		if(html == '课堂视频'){
			this.isVideo = true;
  		}else{
  			this.isVideo = false;
  		}
  	}
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
#index .common_title .tab_update{
	position: absolute;
	left:160px;
	top:0px;
	height:40px;
	line-height: 40px;
	font-size:16px;
	color:#272727;
	cursor: pointer;
}
#index .common_title .orther{
	left:250px;
}
#index .common_title .tab_update.active{
	color:#6ED56C;
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
#index .recommend_mian .recommend_items:hover{
	box-shadow: 1px 1px 10px #7b7b7b;
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
	width:1220px;
	margin-left:-10px;
	padding: 10px 0 20px 0;
}
#index .record_main .record_items{
	margin:20px 10px 0px 10px;
	background:#ececec;
	width:590px;
	position: relative;
}
#index .record_main .record_items:hover{
	box-shadow: 1px 1px 10px #7b7b7b;
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
#index .record_main .record_items .items_right .cross{
	position: absolute;
	bottom:10px;
	left:226px;
	font-size: 14px;
	color: #6ED56C;
}
#index .last_update_main{
	width:1220px;
	margin-left:-10px;
	padding: 10px 0 20px 0;
}
#index .last_update_main .last_update_items{
	margin:20px 10px 0px 10px;
	background:#ececec;
	width:590px;
	position: relative;
	height:200px;
}
#index .last_update_main .last_update_items .items_left{
	width:200px;
}
#index .last_update_main .last_update_items .items_right{
	padding: 16px 20px;
	font-size: 14px;
	color: #999999;
	line-height: 30px;
	height: 168px;
	width: 350px;
}
#index .last_update_main .last_update_items .items_right .items_name{
	font-size: 16px;
	color: #272727;
}
#index .last_update_main .last_update_items .items_right .fix{
	margin-top:80px;
	width:100%;
}
#index .last_update_main .last_update_items .items_right .items_school{
	width:50%;
}
#index .last_update_main .last_update_items .items_right .items_updateTime{
	width:50%;
}
</style>