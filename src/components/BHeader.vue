<template>
	<div id="header" class="fix">
		<div class="leftPart l fix">
			<router-link to="home">
				<div class="leftItems l">首页</div>
			</router-link>
			
			<router-link to="allClass">
				<div class="leftItems l">所有课程</div>
			</router-link>
			
			<router-link to="allFile">
				<div class="leftItems l">所有教辅</div>
			</router-link>
			
			<router-link to="liveRoom">
				<div class="leftItems l">直播间</div>
			</router-link>
			
			<router-link to="memberCenter">
				<div class="leftItems l">个人中心</div>
			</router-link>
			
		</div>
		<div class="rightPart r">
			<div class="l search">
				<el-input placeholder="搜索内容" icon="search" v-model="searchKey" :on-icon-click="handleIconClick"></el-input>
			</div>
			<div class="l rightItems" @click="dialogFormVisible = true">登录</div>
			
			<router-link to="register">
				<div class="l rightItems">注册</div>
			</router-link>
		</div>
		<div class="logoImg">
			<img src="../../static/img/header/logo.png" />
		</div>
		<div id="Login">
				<el-dialog title="请先登陆" :lock-scroll="true" :visible.sync="dialogFormVisible" :close-on-click-modal = "dialogClose" @close = "resetForm('ruleForm')">
				    <div class="loginBody">
				    	<el-form :model="ruleForm" :rules="rules" ref="ruleForm" >
				    		<el-form-item prop="loginName">
								<el-input size="normal" placeholder="请输入用户名" v-model="ruleForm.loginName"></el-input>
							</el-form-item>
							<el-form-item prop="passWord">
								<el-input size="normal" type="password" placeholder="请输入密码" auto-complete="off" v-model="ruleForm.passWord"></el-input>
							</el-form-item>
							<div class="loginBootm fix">
								<el-checkbox class="l" v-model="ruleForm.checked">记住我</el-checkbox>
								<div class="r"><span class="forget" @click="forget()">忘记密码?</span> | <span class="register" @click="register()">立即注册</span></div>
							</div>
							<el-form-item>
								<el-button class="loginButton" :loading="loading"  @click="submitForm('ruleForm')">登陆</el-button>
							</el-form-item>
						</el-form>
					</div>
				</el-dialog>
			</div>
	</div>
	
</template>

<script>
export default {
  data () {
  	var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码!'));
        } else {
          if (this.ruleForm.passWord !== '') {
            
          }
          callback();
        }
      };
    return {
      msg: '顶部导航栏',
      searchKey:'',
      dialogFormVisible: false,
      dialogClose:false,
      loading:false,
      	ruleForm:{
      		loginName:'',
	        passWord:'',
	        checked:false
      	},
      	rules:{
      		loginName:[
      			{required:true, message: '请输入用户名',trigger:'blur'}
      		],
      		passWord: [
            	{ validator: validatePass,trigger: 'blur' }
          	]
          }
    }
  },
  methods:{
  	handleIconClick(ev){
  		console.log(ev);
  	},
  	submitForm(formName) {
	        this.$refs[formName].validate((valid) => {
			if (valid) {
				this.loading = true;
	             var userName = this.ruleForm.loginName;
		    	 var psw = this.ruleForm.passWord;
		    	 var data = {userName:userName,psw:psw};
		    	 // this.postHttp(thiss,data,'login',login_press);
		    	 // 没用的瞎几把写的
		    	 setTimeout(() => {
		    	 	  this.loading = false;
		    	 	  this.dialogFormVisible = false;
			          this.$router.go(0)
			        }, 1000);
	         } else {
	            console.log('error submit!!');
	            return false;
	          }
	        });
	     },
	resetForm(formName) {
			
            this.$refs[formName].resetFields();
      	},
    forget(){
    		this.dialogFormVisible = false;
    		this.$router.push({path:'/Forget'})
    	},
    register(){
    		this.dialogFormVisible = false;
    		this.$router.push({path:'/'})
    	}
  }
}
function login_press(obj,data){
  	var code = data.code;
  	if(code != "10000") {
  		obj.loading = false;
  		obj.$notify({
	      title: '错误',
	      message: data.message,
	      offset: 100,
	      type:'error'
	    });
  	}else{
  		obj.$router.push({ path: '/home' });
  	}
  	
  }
</script>

<style>
#Login .el-dialog{width: 530px;height: 330px;}
#Login .el-form-item__error{top:38px;}
#Login .el-dialog__headerbtn .el-dialog__close:hover{color:#66BB6A;}
#Login .el-form-item{margin-bottom: 0}
#Login .el-dialog__header {padding: 20px 40px;text-align: left;background-color: #f4f4f4;border-radius: 3px;line-height: 1}
#Login .el-dialog__title {line-height: 1;font-weight:normal;font-size: 20px;color: #666;}
#Login .el-dialog__body{padding:40px 86px 48px 84px;border-radius: 3px}
#Login .loginBootm{margin-top:0px;line-height: 1}
#Login .loginBootm .r{cursor:pointer;color:#5B5B5B;}
#Login .register{color: #66BB6A;font-size: 14px;}
#Login .loginButton{padding:0;border:1px solid #66bb6a;width:100%;height: 40px;background: #66BB6A;color:#fff;border-radius:27px;cursor: pointer;text-align: center;font-size: 16px;margin-top:14px;}
#Login .el-input--normal .el-input__inner{height: 40px;line-height: 40px;width: 360px;border-radius: 3px;margin-bottom: 19px;color: #272727}
#Login .el-checkbox__label{color:#5B5B5B}
#Login .el-checkbox__input.is-checked .el-checkbox__inner {background: #6ED56C;border-color: #6ED56C;}


</style>