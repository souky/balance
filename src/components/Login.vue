<template>

<div id="Login" class="Login-container main_body">
	<el-button type="text" @click="dialogFormVisible = true">登陆</el-button>
	<el-dialog title="请先登陆" :visible.sync="dialogFormVisible" :close-on-click-modal = "dialogClose" @close="resetForm('ruleForm')">
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
					<el-button class="loginButton"  @click="submitForm('ruleForm')">登陆</el-button>
				</el-form-item>
			</el-form>
		</div>
	</el-dialog>
	
</div>
</template>
<script>
 export default{
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
    mounted:function(){
    	
    },
    methods:{
    	login_in(){
    		var userName = this.loginName;
    		var psw = this.passWord;
    		var data = {userName:userName,psw:psw};
    		//console.log(data)
    		this.postHttp(this,data,'login',login_press);
    	},
    	submitForm(formName) {
	        this.$refs[formName].validate((valid) => {
           console.log(valid);
            if (valid) {
	             alert(1)
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
#Login .el-dialog__header {padding: 20px 40px;text-align: left;background-color: #f4f4f4;border-radius: 3px}
#Login .el-dialog__title {line-height: 1;font-weight:normal;font-size: 20px;color: #666;}
#Login .el-dialog__body{padding:40px 86px 48px 84px;border-radius: 3px}
#Login .loginBootm{margin-top:0px;}
#Login .loginBootm .r{cursor:pointer;color:#5B5B5B;}
#Login .register{color: #66BB6A;font-size: 14px;}
#Login .loginButton{padding:0;border:1px solid #66bb6a;width:100%;height: 40px;line-height:40px;background: #66BB6A;color:#fff;border-radius:27px;cursor: pointer;text-align: center;font-size: 16px;margin-top:14px;}
#Login .el-input--normal .el-input__inner{height: 40px;line-height: 40px;width: 360px;border-radius: 3px;margin-bottom: 19px;color: #272727}
#Login .el-checkbox__label{color:#5B5B5B}
#Login .el-checkbox__input.is-checked .el-checkbox__inner {background: #6ED56C;border-color: #6ED56C;}


</style>