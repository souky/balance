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
			<div class="member_center_leftNav_isactive"><i class="iconstyle el-icon-arrow-right"></i></div><p>个人资料</p>
		</div>
		<div class="member_center_leftNav_button member_center_leftNav_button_bottom" @click="accountsecurity">
			<p>账号安全</p>
		</div>

		<div class="member_center_leftNav_button member_center_leftNav_button_top member_center_leftNav_button_padding" @click="classesrecord">
			<p>我的开课记录</p>
		</div>
		<div class="member_center_leftNav_button member_center_leftNav_button_top" @click="studyrecord">
			<p>我的学习记录</p>
		</div>
		<div class="member_center_leftNav_button member_center_leftNav_button_bottom" @click="orderrecord">
			<p>我的预约记录</p>
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
      }
    }
  },
  methods:{
  	personaldata:function(){
  		this.$router.push({path:'/personaldata'});
  	},
  	accountsecurity:function(){
  		this.$router.push({path:'/accountsecurity'});
  	},
  	classesrecord:function(){
  		this.$router.push({path:'/classesrecord'});
  	},
  	studyrecord:function(){
  		this.$router.push({path:'/studyrecord'});
  	},
  	orderrecord:function(){
  		this.$router.push({path:'/orderrecord'});
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
</style>