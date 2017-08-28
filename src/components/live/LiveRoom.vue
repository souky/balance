<template>
	<div id="live">
		<div class="live_header">
			<el-form ref="form" :model="form" label-width="60px">
				<el-form-item class="l ml30 mt20 live_select" label="学校">
				    <el-select v-model="form.region">
				      <el-option v-for="item in Sregion" :key="item.id" :label="item.regionName" :value="item.id"></el-option>
				    </el-select>
				</el-form-item>
				<el-form-item class="l ml30 mt20 live_select" label="年级">
				    <el-select v-model="form.region">
				      <el-option v-for="item in Sregion" :key="item.id" :label="item.regionName" :value="item.id"></el-option>
				    </el-select>
				</el-form-item>
				<el-form-item class="l ml30 mt20 live_select" label="教师">
				    <el-select v-model="form.region">
				      <el-option v-for="item in Sregion" :key="item.id" :label="item.regionName" :value="item.id"></el-option>
				    </el-select>
				</el-form-item>
				<el-form-item class="l ml30 mt20 live_select" label="学科">
				    <el-select v-model="form.region">
				      <el-option v-for="item in Sregion" :key="item.id" :label="item.regionName" :value="item.id"></el-option>
				    </el-select>
				</el-form-item>
				<div class="cl"></div>
				<el-form-item class="l ml30 live_select" label="节目名">
				    <el-input v-model="form.name" placeholder="请输入文字"></el-input>
				</el-form-item>
				<el-form-item class="l ml30" label="日期的" placeholder="请选择节目状态">
				    <el-col class="live_select_date">
				      <el-date-picker v-model="form.date1" type="datetime" placeholder="选择开始日期时间" style="width: 100%;" @change="dateChange1"></el-date-picker>
				    </el-col>
				    <el-col class="tc live_select_date_pagging">-</el-col>
				    <el-col class="live_select_date">
				      <el-date-picker v-model="form.date2" type="datetime" placeholder="选择结束日期时间" style="width: 100%;" @change="dateChange2"></el-date-picker>
				    </el-col>
				</el-form-item>
			</el-form>
			<el-button class="l ml93 mt10" type="primary" @click="query">查询</el-button>
			<div class="cl"></div>
		</div>
		<div class="live_body">
			<p class="live_body_title">直播列表</p>
			<div class="live_body_title_hr"></div>
			<div class="live_body_content" v-for="tab in tabs">
				<div class="live_body_content_bar l ml10 mt10">
					<div class="l live_body_content_bar_img" style="background-color:red;"></div>
					<div class="l ml10">
						<p class="mt15 live_body_content_bar_p">{{tab.title}}</p>
						<div class="mt10 live_body_content_bar_vp">
							<p class="l">课程名：</p><p class="l">{{tab.name}}</p> <p class="l ml20">学校：</p><p class="l">{{tab.school}}</p>
						</div>
						<div class="cl"></div>
						<div class="mt10 live_body_content_bar_vp">
							<p class="l">大纲进度：</p><p class="l">{{tab.progress}}</p>
						</div>
						<div class="cl"></div>
						<div class="mt20 live_body_content_bar_vp">
							<p class="l">{{tab.time}}</p><p class="l ml20 live_body_content_bar_color">{{tab.state}}</p>
						</div>
						<div class="cl"></div>
						<div class="mt80 live_body_content_bar_vp">
							<p class="l">教师：</p><p class="l">{{tab.teacherName}}</p><p class="l ml20">播放总{{tab.number}}次</p>
							<button v-if="tab.buttonName=='观看直播'" class="l mt-5 live_new_button"><span>{{tab.buttonName}}</span></button>
							<button v-if="tab.buttonName=='预约'" class="l mt-5 live_new_button live_new_button_red"><span>{{tab.buttonName}}</span></button>
							<button v-if="tab.buttonName=='已预约'" class="l mt-5 live_new_button live_new_button_blue"><span>{{tab.buttonName}}</span></button>
						</div>
					</div>
				</div>
			</div>
		</div>	
		<div class="cl live_foot tc">
			<page class="mt20" :totalNumber="total" @newNOdeEvents="parentLisen"></page>
		</div>
	</div>
</template>

<script>
import page from '../member/page.vue'
export default {
  data () {
    return {
      form:{
      		name:'',
			region: '',
		    date1: '',
		    date2: '',
		},
	  tabs:[{
		    title:'11111111111111111111111111111111111111111',
		    name:'春',
		    school:'苏州小学',
		    progress:'1-1-1-1-1-2',
		    time:'今天：9:00-10:00',
		    state:'直播中',
		    teacherName:'张',
		    number:'12313',
		    buttonName:'观看直播',
		},{
		    title:'22222222222',
		    name:'春',
		    school:'苏州小学',
		    progress:'1-1-1-1-1-2',
		    time:'今天：9:00-10:00',
		    state:'直播中',
		    teacherName:'张',
		    number:'12313',
		    buttonName:'预约',
		},{
		    title:'33333',
		    name:'春',
		    school:'苏州小学',
		    progress:'1-1-1-1-1-2',
		    time:'今天：9:00-10:00',
		    state:'直播中',
		    teacherName:'张',
		    number:'12313',
		    buttonName:'已预约',
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
  components:{page},
  methods:{
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
	    alert("开课"+this.pageSize);
	    alert("开课"+this.pageIndex);
	},
  },
  created:function(){
  },
}
</script>

<style>
#live{
	overflow: hidden;
}
#live .live_header{
	width: 1200px;
	height: 141px;
	margin:0 auto;
	margin-top:90px;
	border: 1px solid #E5E5E5;
	border-radius: 3px;
}
#live .live_select .el-form-item__content{
	width: 200px;
}
#live .ml35{
	margin-left: 35px;
}
#live .live_select_date{
	width: 200px;
}
#live .live_select_date_pagging{
	width: 90px;
}
.el-button{
	padding: 6px 47px !important;
    border-radius: 25px !important;
}
.ml93{
	margin-left: 93px;
}
.mt10{
	margin-top: 10px;
}
.live_body{
	width: 1200px;
	margin: 0 auto;
	margin-top: 40px;
}
.live_body_title{
	font-size: 24px;
	color: #272727;
}
.live_body_title_hr{
	width: 100%;
	height: 2px;
	background-color: #6ED56C;
	margin-top: 10px;
}
.live_body_content{
	margin-top: 40px;
	width: 100%;
}
.live_body_content_bar{
	width: 590px;
	height: 274px;
	background-color: #F5F5F5;
	margin-bottom: 10px;
}
.live_body_content_bar_img{
	height: 100%;
	width: 206px;
}
.live_body_content_bar_p{
	color:#272727;
	font-size: 16px;
}
.live_body_content_bar_vp p{
	color: #999999;
	font-size: 14px;
}
.live_body_content_bar_color{
	color: #6ED56C !important;
}
.mt80{
	margin-top: 120px;
}
.mt-5{
	margin-top:-10px !important;
	margin-left: 30px !important;
}
.live_new_button{
	display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #6ED56C;
    border: 1px solid #6ED56C;
    color: #fff;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    font-size: 14px;
    padding: 6px 47px;
    border-radius: 25px;
}
.live_new_button_red{
	 background: #F99BB7;
    border: 1px solid #F99BB7;
}
.live_new_button_blue{
	 background: #6BC6FB;
    border: 1px solid #6BC6FB;
}
.live_foot{
	overflow: hidden;
	margin: 0 auto;
	margin-bottom: 80px;
}

/* element color*/
.el-input__inner:focus{border-color: #6ED56C;}
.el-textarea__inner:focus{border-color:#6ED56C;}
.el-radio__inner{width:22px;height:22px;}
.el-radio__inner:hover{border-color: #6ED56C;}
.el-radio__input.is-checked .el-radio__inner{border-color:#6ED56C;background: #fff;}
.el-radio__inner::after{background: #E0E0E0;transform: translate(-50%,-50%) scale(1);width:12px;height:12px;}
.el-radio__input.is-checked .el-radio__inner::after{background: #6ED56C;}
.el-select .el-input__inner:focus{border-color: #6ED56C;}
.el-select .el-input__inner:hover{border-color: #6ED56C;}
.el-select .el-input__inner:active{border-color: #6ED56C;}

.el-pager li.active{background:#6ED56C;border-color:#6ED56C;}
.el-pager li.active:hover{color:#fff;}
.el-pager li:hover{color:#6ED56C}
.el-pagination button:hover{color:#6ED56C}
.el-pagination__editor:focus{border-color:#6ED56C}

.el-checkbox__inner:hover{border-color:#6ED56C}
.el-checkbox__input.is-checked .el-checkbox__inner{background:#6ED56C;border-color:#6ED56C;}

.el-icon-information{color:#6ED56C;}

.el-select-dropdown__item.selected.hover{background:#6ED56C;}
.el-select-dropdown__item.selected{background:#6ED56C;}
.el-button--primary{color:#fff;background-color:#6ED56C;border-color:#6ED56C;}
.el-button--primary:hover{background-color:#6ED560;border-color:#6ED560;}
.el-button--primary:focus{background-color:#6ED560;border-color:#6ED560;}
.el-button:active{color:#6ED56C;border-color:#6ED56C;}
.el-button:hover{border-color:#6ED56C;}
.el-button:focus{color:#fff;border-color:#6ED56C;}
.avatar-uploader .el-upload {border: 1px dashed #d9d9d9;border-radius: 6px;cursor: pointer;position: relative;overflow: hidden;}
.avatar-uploader .el-upload:hover {border-color: #6ED56C;}
.avatar-uploader-icon {font-size: 28px;color: #8c939d;width: 133px;height: 160px;line-height: 160px;text-align: center;}
.avatar {width: 133px;height: 160px;display: block;}

.el-date-table td.current:not(.disabled), .el-date-table td.end-date, .el-date-table td.start-date{background-color: #6ED56C!important}
.el-date-table td.today:before{border-top:.5em solid #6ED56C;}
.el-picker-panel__link-btn{color:#6ED56C;}
.el-date-table td.today{color:#6ED56C;}
.el-time-panel__content::after, .el-time-panel__content::before{background-color:#6ED56C;}
.el-time-panel__btn.confirm{color:#6ED56C;}
</style>