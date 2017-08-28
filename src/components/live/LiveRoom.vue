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
			<el-button class="r" type="primary" @click="query">查询</el-button>
		</div>	
	</div>
</template>

<script>
export default {
  data () {
    return {
      form:{
      		name:'',
			region: '',
		    date1: '',
		    date2: '',
		},
	  Sregion:[{
			id:11,
			regionName:'测试',
		}],
    }
  },
  methods:{
  	dateChange1(val) {
		this.form.date1=val;
		this.form.date1=this.form.date1.substr(0, 16);
	},
	dateChange2(val){
		this.form.date2=val;
		this.form.date2=this.form.date2.substr(0, 16);
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
.el-button--primary{color:#fff;background-color:#6ED56C !important;border-color:#6ED56C !important;}
.el-button--primary:hover{background-color:#6EC400;border-color:#6EC400;}
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