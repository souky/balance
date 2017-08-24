<template>
<div id="member_center" class="main_body">
<div class="member_center_style">
	<div class="member_center_leftNav tc l">
		<div class="member_center_leftNav_header">
			<div class="member_center_leftNav_header_logo">
				<img src="../../../static/img/toux1.png">
			</div>
			<p class="member_center_leftNav_header_padding">{{use.name}}</p>
			<p>{{use.sex}} {{use.class}}</p>
			<p>{{use.school}}</p>
		</div>

		<div class="member_center_leftNav_button member_center_leftNav_button_top member_center_leftNav_button_padding" @click="personaldata">
			<div v-show="personaldataStyle" class="member_center_leftNav_isactive"><i class="iconstyle el-icon-arrow-right"></i></div><p>个人资料</p>
		</div>
		<div class="member_center_leftNav_button member_center_leftNav_button_bottom" @click="accountsecurity">
			<div v-show="accountsecurityStyle" class="member_center_leftNav_isactive"><i class="iconstyle el-icon-arrow-right"></i></div><p>账号安全</p>
		</div>

		<div class="member_center_leftNav_button member_center_leftNav_button_top member_center_leftNav_button_padding" @click="classesrecord">
			<div v-show="classesrecordStyle" class="member_center_leftNav_isactive"><i class="iconstyle el-icon-arrow-right"></i></div><p>我的开课记录</p>
		</div>
		<div class="member_center_leftNav_button member_center_leftNav_button_top" @click="studyrecord">
			<div v-show="studyrecordStyle" class="member_center_leftNav_isactive"><i class="iconstyle el-icon-arrow-right"></i></div><p>我的学习记录</p>
		</div>
		<div class="member_center_leftNav_button member_center_leftNav_button_bottom" @click="orderrecord">
			<div v-show="orderrecordStyle" class="member_center_leftNav_isactive"><i class="iconstyle el-icon-arrow-right"></i></div><p>我的预约记录</p>
		</div>
	</div>
	<div class="member_center_content l">
		<router-view></router-view>
	</div>
	<div class="cl"></div>
</div>
</div>
</template>

<script>
export default {
  data () {
    return {
      use:{
      	name:'James',
      	sex:'女',
      	class:'五年级',
      	school:'苏州二中',
      },
      personaldataStyle:true,
      accountsecurityStyle:false,
      classesrecordStyle:false,
      studyrecordStyle:false,
      orderrecordStyle:false,
      dataObj:'',
    }
  },
  created:function(){
  	this.getdata();
  	this.personaldata();
  },
  updated:function(){
  	this.getactive();
  },
  methods:{
  	getdata:function(){

  	},
  	getactive:function(){
  		var test = window.location.hash;
  		let test1 = test.substring(1,test.length);
  		this.dataObj = test1;
  		if(this.dataObj=='/personaldata'){
  			this.personaldata();
  		}
  		if(this.dataObj=='/accountsecurity'){
  			this.accountsecurity();
  		}
  		if(this.dataObj=='/classesrecord'){
  			this.classesrecord();
  		}
  		if(this.dataObj=='/studyrecord'){
  			this.studyrecord();
  		}
  		if(this.dataObj=='/orderrecord'){
  			this.orderrecord();
  		}
  	},
  	personaldata:function(){
  		this.$router.push({path:'/personaldata'});
  		this.personaldataStyle=true;
  		this.accountsecurityStyle=this.classesrecordStyle=this.studyrecordStyle=this.orderrecordStyle=false;
  	},
  	accountsecurity:function(){
  		this.$router.push({path:'/accountsecurity'});
  		this.accountsecurityStyle=true;
  		this.personaldataStyle=this.classesrecordStyle=this.studyrecordStyle=this.orderrecordStyle=false;
  	},
  	classesrecord:function(){
  		this.$router.push({path:'/classesrecord'});
  		this.classesrecordStyle=true;
  		this.accountsecurityStyle=this.personaldataStyle=this.studyrecordStyle=this.orderrecordStyle=false;
  	},
  	studyrecord:function(){
  		this.$router.push({path:'/studyrecord'});
  		this.studyrecordStyle=true;
  		this.personaldataStyle=this.accountsecurityStyle=this.classesrecordStyle=this.orderrecordStyle=false;
  	},
  	orderrecord:function(){
  		this.$router.push({path:'/orderrecord'});
  		this.orderrecordStyle=true;
  		this.personaldataStyle=this.accountsecurityStyle=this.studyrecordStyle=this.classesrecordStyle=false;
  	}
  }
}
</script>

<style>
#member_center .member_center_leftNav{
	width: 200px;
}
#member_center .member_center_content{
	margin-left: 17px;
	margin-bottom: 213px;
	width: 971px;
	background: #fff;
	border: 1px solid #E5E5E5;
	border-radius: 3px;
}
#member_center .member_center_style{
	width: 1200px;
	margin:0 auto;
	margin-top: 20px;
}
#member_center .member_center_leftNav_header{
	width: 100%;
	height: 220px;
	background: #fff;
	border: 1px solid #E5E5E5;
	border-radius: 3px; 
}
#member_center .member_center_leftNav_button{
	width: 100%;
	height: 60px;
	background: #fff;
	position: relative;
}
#member_center .member_center_leftNav_button_top{
	border-top:1px solid #E5E5E5;
	border-left:1px solid #E5E5E5;
	border-right: 1px solid #E5E5E5;
	border-radius: 3px 3px 0 0;
}
#member_center .member_center_leftNav_button_bottom{
	border-radius: 0 0 3px 3px;
	border: 1px solid #E5E5E5;
}
#member_center .member_center_leftNav_button_padding{
	margin-top: 19px;
}
#member_center .member_center_leftNav_header_logo{
	width: 100px;
	height: 100px;
	margin:0 auto;
	margin-top: 41px;
	border-radius: 50%;
}
#member_center .member_center_leftNav_header p{
	color: #999999;
	font-size: 14px;
}
#member_center .member_center_leftNav_header_padding{
	margin-top: 10px;
	color: #272727 !important;
	font-size: 16px !important;
}
#member_center .member_center_leftNav_button p{
	font-size: 16px;
	margin-top: 19px;
}
.member_center_leftNav_isactive{
	width: 20px;
	height: 20px;
	background: #6ED56C;
	position: absolute;
	top:21px;
	left:16px;
	border-radius: 50%;
}
.iconstyle{
	color:#fff;
	font-size: 12px;
	margin-left: 3px;
}

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