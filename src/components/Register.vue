<template>
<div id="register" class="main_body" >
	<div class="page2" >
		<div class="logo">
			<div class="img">
			 <img src="../../static/img/register/logo.png" class="image">
		    </div>
		</div>
		<div class="main">
			<div class="top">
				注册成功
			</div>
			<div class="middle1">
				<div class="img">
			      <img src="../../static/img/register/ico1.png" class="image">
		        </div>
			</div>
			<div class="middle2">
				祝贺您注册成功！<br  />
				你的账号是James，您可前往账户中进一步修改资料或修改密码
			</div>
			<div class="bottom">
				<el-button type="primary" @click="submitForm('ruleForm')">完成返回首页</el-button>
			</div>
		</div>
	</div>
	
	
	<div class="page1" v-show=false>
		<div class="img">
			 <img src="../../static/img/register/logo.png" class="image">
		</div>
		<div class="content">
		     <div class="title">
			 	注  册
			 	<div class="dengru">我已注册，现在就去<a href="" @click="login()">登入</a></div>
			</div>
			<div class="form">
		    	<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
				        <div class="psition">
						    <div class="fleft">
								<el-form-item label="账户名" prop="account" :label-width="formLabelWidth">
								    <el-input v-model="ruleForm.account" auto-complete="off" placeholder="请输入文字"></el-input>
								</el-form-item> 
						    </div>
						    <div class="fright">可用字母，数字，下划线，请以字母开通</div>
				        </div>
				         <div class="psition">
				        	<div class="fleft clear">
								     <el-form-item label="姓名" prop="name" :label-width="formLabelWidth" >
								       <el-input v-model="ruleForm.name" auto-complete="off" placeholder="请输入文字">></el-input>
								     </el-form-item>
							</div>	
							<div class="fright">请输入真实的姓名，用于审核身份</div>
				        </div>
								     <el-form-item label="学校" prop="school" :label-width="formLabelWidth" class="clear">
								       <el-input v-model="ruleForm.school" auto-complete="off" placeholder="请输入文字">></el-input>
								     </el-form-item>
						<div class="psition">	
							<div class="fleft clear">
								     <el-form-item label="班主任" prop="teacher" :label-width="formLabelWidth">
								       <el-input v-model="ruleForm.teacher" auto-complete="off" placeholder="请输入文字">></el-input>
								     </el-form-item>
							 </div>	
							 <div class="fright">请输入真实的姓名，用于审核身份</div>
				        </div>
				        <div class="psition">
				        	<div class="fleft clear">
								     <el-form-item label="设置密码" prop="psw" :label-width="formLabelWidth" >
								       <el-input v-model="ruleForm.psw" auto-complete="off" placeholder="请输入文字">></el-input>
								     </el-form-item>
							</div>
							<div class="fright">密码长度8-16位，且必须数字，字母，字符任意两种以上组合</div>	
						</div>			     
								     <el-form-item label="确认密码" prop="confirpsw" :label-width="formLabelWidth" class="clear">
								       <el-input v-model="ruleForm.confirpsw" auto-complete="off" placeholder="请输入文字">></el-input>
								     </el-form-item>
						<div class="button">		     
								     
								       <el-button type="primary" @click="submitForm('ruleForm')">立即注册</el-button>
								  
						</div>		    
			    </el-form>
		    </div> 
	    </div>
	</div>    
</div>
</template>

<script>
export default {
  data () {
    return {
      ruleForm:{
      	account:'',
      	name:'',
      	school:'',
      	teacher:'',
      	psw:'',
      	confirpsw:'',
      },
      rules:{
      	account:[
      	{required:true,message:'请输入账户名',trigger:'blur'},
      	{min:6,max:18,message:'可用字母，数字，下划线，请以字母开通'}
      	],
      	name:[
      	{required:true,message:'请输入真实的姓名，用于审核身份'}
      	],
      	teacher:[
      	{required:true,message:'请输入真实的姓名，用于审核身份'}
      	],
      	psw:[{required:true,message:'请输入密码',trigger:'blur'},
      	{min:8,max:16,message:'密码长度8-16位，且必须数字，字母，字符任意两种以上组合'}
      	],
      }
    }
  },
  methods:{
  	login:function(){},
  	submitForm:function(){}
  	
  },
}
</script>

<style>
	html {
		width:100%;
	    height:100%
	}
	#register {
		width:100%;
	    background:url('../../static/img/register/registerBackground.png') no-repeat;
		background-size:100%;
	}
	#register .content{
		margin: 50px;
		padding:50px 100px;
		border: 1px solid whitesmoke;
		background-color:white ;
		box-shadow: 1px 1px 3px #636363;
		border-radius: 5px;	
	}
	#register .form{margin: auto;}
	#register .el-button{
		background-color: #6ED56C;
		width:200px;
		height:50px;
	}
	#register .title{
		height:50px;
		padding-bottom:10px;
		position: relative;
		line-height: 50px;
		font-size:36px;
		color:#272727;
		border-bottom:1px #6ED56C solid;
		margin-bottom: 20px;
	}
	#register .dengru{
		position: absolute;
		top:30px;
		right:0px;
		height:20px;
		line-height: 20px;
		font-size:16px;
	}
	#register .dengru a{
		color:#6ED56C;
	}
	#register .psition{
		position:relative;
	}
	#register .fleft{float:left;}
	#register .fright{
		float:left;
		text-align: left;
		line-height: 36px;
		font-size:14px;
		color: #7D7C55;
		margin-left:10px ;
	}
	#register .clear{clear:both;}
	#register .el-form-item__content{width:330px;}
	#register .form{width:872px;}
	#register .el-button{width:360px;height:60px;margin:auto;border-radius:36px;}\
	#register .image{width:184px;height:184px;}
	#register .img{margin-top:0px;}
	#register .page1{width:1200px;margin: auto;}
	#register .page2{width:100%;height:100%}
	#register .main{background-color: white;width:1200px;height:600px;margin: auto;}
	#register .top{width:146px;height:36px;color: #272727;font-size:36px;
	               margin: auto;padding-top:38px ; margin-bottom: 39.8px;}
	#register .middle2{width:491px;height:60px;font-size: 16px; line-height:30px;margin: auto;
	                font-family: .PingFangSC-Regular; margin-bottom:36px }
  
</style>