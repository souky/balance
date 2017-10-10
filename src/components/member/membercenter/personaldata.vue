<template>
<div id="personaldata">
	<p class="personaldata_title">个人资料</p>
	<hr style="width:890px;background-color:#E5E5E5;">
	<div class="personaldata_padding" v-show="isAlter">
		<el-form label-position="left" :model="form" label-width="80px">
			<el-form-item label="头像">
			    <div class="personaldata_logo">
			    	<el-upload
					  class="avatar-uploader"
					  action="https://jsonplaceholder.typicode.com/posts/"
					  :show-file-list="false"
					  :on-success="handleAvatarSuccess"
					  :before-upload="beforeAvatarUpload">
					  <img v-if="imageUrl" :src="imageUrl" class="avatar">
					  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
					</el-upload>
			    </div>
			 </el-form-item>
			 <el-form-item label="真实姓名">
			    <p>{{form.name}}</p>
			 </el-form-item>
			 <el-form-item label="学校">
			    <p>{{form.school}}</p>
			 </el-form-item>
			 <el-form-item label="年级">
			    <el-select v-model="form.class">
			    	<el-option v-for="item in Sclass" :key="item.id" :label="item.className" :value="item.id"></el-option>
			    </el-select>
			 </el-form-item>
			 <el-form-item label="性别">
			    <template>
				  <el-radio class="radio" v-model="form.sex" label="1">男</el-radio>
				  <el-radio class="radio" v-model="form.sex" label="2">女</el-radio>
				</template>
			 </el-form-item>
			 <el-form-item label="班主任">
			    <el-select v-model="form.teacher">
			    	<el-option v-for="item in Steacher" :key="item.id" :label="item.teacherName" :value="item.id"></el-option>
			    </el-select>
			 </el-form-item>
			 <el-form-item label="学号">
			    <el-input v-model="form.studentid" style="width:217px;" placeholder="请输入学号"></el-input>
			 </el-form-item>
			 <el-form-item label="联系手机">
			    <el-input v-model="form.phone" style="width:217px;" placeholder="请输入手机号"></el-input>
			 </el-form-item>
			 <el-form-item label="邮箱">
			    <el-input v-model="form.email" style="width:217px;" placeholder="请输入邮箱"></el-input>
			 </el-form-item>
			 <el-form-item label="个人简介">
			    <el-input type="textarea" :autosize="{ minRows: 5, maxRows: 5}" v-model="form.desc" style="width:770px;" placeholder="请输入个人信息"></el-input>
			 </el-form-item>
			 <el-form-item>
			    <el-button type="primary" @click="onSubmit">立即创建</el-button>
			 </el-form-item>
		</el-form>
	</div>
	<div class="personaldata_padding" v-show="isView">
		<el-form label-position="left" :model="form" label-width="80px">
			<el-form-item label="头像">
			    <div class="personaldata_logo">
			    	<img :src="imageUrl" width="150px" height="150px">
			    </div>
			 </el-form-item>
			 <el-form-item label="真实姓名">
			    <p>{{form.name}}</p>
			 </el-form-item>
			 <el-form-item label="学校">
			    <p>{{form.school}}</p>
			 </el-form-item>
			 <el-form-item label="年级">
			    <p>{{form.class}}</p>
			 </el-form-item>
			 <el-form-item label="性别">
			    <p v-if="form.sex=='1'">男</p>
			    <p v-else>女</p>
			 </el-form-item>
			 <el-form-item label="班主任">
			    <p>{{form.teacher}}</p>
			 </el-form-item>
			 <el-form-item label="学号">
			    <p>{{form.studentid}}</p>
			 </el-form-item>
			 <el-form-item label="联系手机">
			    <p>{{form.phone}}</p>
			 </el-form-item>
			 <el-form-item label="邮箱">
			    <p>{{form.email}}</p>
			 </el-form-item>
			 <el-form-item label="个人简介">
			 	<div style="width:800px">
			    <p style="word-break:break-all">1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111</p>
			    </div>
			 </el-form-item>
			 <el-form-item>
			    <el-button type="primary" @click="onAlter">编辑</el-button>
			 </el-form-item>
		</el-form>
	</div>
</div>
</template>
<script>
export default {
    data() {
      return {
       form:{
       		logo:'',
       		name:'Tom',
       		school:'第一小学',
       		class:'',
       		sex:'1',
       		teacher:'',
       		studentid:'',
       		phone:'',
       		email:'',
       		desc:'',
       },
       Sclass:[{
       	id:1,
       	className:123,
       }],
       Steacher:[{
       	id:1,
       	teacherName:321,
       }],
       imageUrl:'../../../static/img/toux1.png',
       isView:true,
       isAlter:false,
      }
    },
    created:function(){
    	this.getdata();
    },
    methods: {
      getdata(){
      	this.$emit('newfind');
      	this.postHttp(this,{id:"85a938479181450c8f95de5bbadb219b"},"study/user/queryUserById",function(obj,data){
			
		});
      },
      onSubmit() {
       alert(1);
       this.isView=true;
       this.isAlter=false;
      },
      onAlter:function(){
      	this.isView=false;
      	this.isAlter=true;
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isPNG = file.type === 'image/png';
        const isIMG = isJPG||isPNG;
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isIMG) {
          this.$message.error('上传头像图片只能是 JPG 或 PNG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isIMG && isLt2M;
      }
    }
  }
</script>

<style>
#personaldata .personaldata_title{
	margin-top: 36px;
	margin-left: 40px;
}
#personaldata .personaldata_padding{
	margin-top: 20px;
	margin-left: 40px;
}
#personaldata .personaldata_logo{
	width: 133px;
	height: 160px;
}
#personaldata .el-form-item{
	margin-bottom:19px !important;
}
#personaldata .el-button{
	padding: 6px 47px !important;
	border-radius: 25px !important;
}

</style>