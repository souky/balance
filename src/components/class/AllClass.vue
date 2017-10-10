<template>
	<div id="allClassMain" class="main_body">
		<div class="classSelect">
			<div class="selectItem">
				<div class="itemList">
					<span class="itemLabel">年级:</span>
          <div class="itemDetail">
            <span :class="active == -1? 'actives': ''" @click="chooseGrade(-1)">全部</span>
  					<span v-for="(item,index) in Grade" :key="item.id" :class="active == item.id? 'actives': ''" @click="chooseGrade(item.id)">{{item.name}}</span>
          </div>
				</div>
				<div class="itemList">
					<span class="itemLabel">学科:</span>
          <div class="itemDetail">
            <span :class="active2 == -1? 'actives': ''" @click="chooseSubject(-1)">全部</span>
  					<span v-for="(item,index) in Subject" :key="item.id" :class="active2 == item.dicCode? 'actives': ''" @click="chooseSubject(item.dicCode)">{{item.dicName}}</span>
          </div>
				</div>
				<div class="itemList">
					<span class="itemLabel">学校:</span>
          <div class="itemDetail">
            <span :class="active3 == -1? 'actives': ''" @click="chooseSchool(-1)">全部</span>
  					<span v-for="(item,index) in School" :key="item.id" :class="active3 == item.id? 'actives': ''" @click="chooseSchool(item.id)">{{item.name}}</span>
          </div>
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
				      placeholder="选择开课时间"
              :picker-options="pickerOptions0">
				    </el-date-picker>
				    <span class="demonstration">~</span>
				    <el-date-picker
				      v-model="endTime"
				      type="datetime"
				      placeholder="选择开课时间"
              :picker-options="pickerOptions1">
				    </el-date-picker>
				</div>
			</div>
			<div class="classList">
				<el-row :gutter="13">
				  <el-col :span="6" v-for="e in recommendList" :key="e.id">
				  <div class="items_box " @click="goTodetail(e.id)">
					<div class="items_img"><img :src="e.coverImg" width="100%" /></div>
					<div class="items_name pl10 pr10" :title="e.name">
						{{e.name}}
					</div>
					<div class="items_source pl10 pr10 mt5">
						<span>
							学校：{{e.schoolName}}
						</span>
					</div>
          <div class="items_source pl10 pr10 mt5">
            <span>
              教师：{{e.teacherName}}
            </span>
          </div>
					<div class="items_source pl10 pr10 pb20 pt20">
						<span>
							课时：{{e.courseDuration}}小时
						</span>
						<span>
							播放量：{{e.playedNum}}次
						</span>
					</div>
				  </div>
				  </el-col>
				</el-row>
				<div class="cl  tc">
					<el-pagination
            @size-change=""
            @current-change=""
            :current-page="1"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
            </el-pagination>
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
    	active4:'',
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
       pageIndex:1,
	     pageSize:10,
	     total:60,
	     // 开始到结束日期选择
	     startTime:'',
	     endTime:'',
	    recommendList:{},
      pickerOptions0: {
          disabledDate: (time) => {
              let endDateVal = this.endTime;
              if (endDateVal) {
                  return time.getTime() > endDateVal;
              }
          }
        },
        pickerOptions1: {
          
          disabledDate:(time) => {
             let beginDateVal = this.startTime;
              if (beginDateVal) {
                  return time.getTime() < beginDateVal;
              }
          }
        },
        itemList:{
          grade:'',
          subject:'',
          school:''
        }
  	}
  },
  mounted:function(){
     this.itemInit();
     this.classInit();
  },
  methods:{
		chooseGrade(index) {
	      this.active = index;
	      //后台请求
        if(index == -1)
          this.itemList.grade = '';
        else
          this.itemList.grade = index;
	    },
	    chooseSubject(index){
		  this.active2 = index;
      if(index == -1)
          this.itemList.subject = '';
        else
          this.itemList.subject = index;
	    },
	    chooseSchool(index){
	      this.active3 = index;
        if(index == -1)
          this.itemList.school = '';
        else
          this.itemList.school = index;
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
			//this.$router.push({ name: '课程详情', query: { userId: ids }})
      		this.$router.push({path:'/allClassMore/'+ids});
		},
    classInit:function(){
        var needData = {gradeId:this.itemList.grade,
                        subject:this.itemList.subject,
                        schoolId:this.itemList.school,
                        pageNum:this.pageIndex,
                        pageSize:this.pageSize,
                        tab:this.tab}
        this.postHttp(this,needData,"course/study/findCourses",function(obj,data){
          obj.recommendList  = data.result.list;
          obj.total = data.result.total;
          // if(data.result.total >0){
          //   for(var i = 0;i<obj.curriculum.length;i++){
          //    obj.curriculum[i].imgsrc = "../../../static/img/defualt/"+obj.curriculum[i].suffix+".png";
          //   }
          // }
          console.log(data.result.list);
        });
      },
      itemInit:function(){
       this.postHttp(this,'',"course/study/initParamList",function(obj,data){
         obj.Grade = data.result.gradeList;
         obj.Subject = data.result.subjectList;
         obj.School = data.result.schoolList;
        });
       
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
#allClassMain .itemLabel{color:#999;cursor: default;vertical-align: top;}
#allClassMain .itemDetail {
    display: inline-block;
    width: 1050px;
}
#allClassMain .itemList span{margin-right: 20px;display: inline-block;margin-bottom: 16px;cursor: pointer;font-size: 16px}
#allClassMain .classMain .classtitle{padding: 40px 0 10px 0;border-bottom: 2px #6ED56C solid}
#allClassMain .classtitle span{margin-right: 20px;display: inline-block;cursor: pointer;font-size: 16px}
#allClassMain .time_block{float: right;margin-top: -10px}
#allClassMain .time_block span{margin: 0;color: #999}
#allClassMain .el-row{margin:16px 0;}
#allClassMain .classList .el-col{margin-bottom: 15px}
#allClassMain .items_box{background-color: #f5f5f5;cursor: pointer;}
#allClassMain .items_box:hover{box-shadow: 1px 1px 10px rgba(0,0,0,.2);}
#allClassMain .items_box .items_img img{height: 246px}
#allClassMain .items_name{color: #272727;font-size: 16px;margin-top: 16px;}
#allClassMain .items_source{color:#999;font-size: 14px;}
#allClassMain .items_source span{margin-right: 8px}
</style>