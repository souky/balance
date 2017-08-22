<template>
<div id="personaldata">
	<p class="personaldata_title">个人资料</p>
	<hr style="width:890px;background-color:#E5E5E5;">
	<div class="personaldata_padding">
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
			 <el-form-item label="年纪">
			    <el-select v-model="form.class">
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
       		
       },
       imageUrl:'../../../static/img/toux1.png',
      }
    },
    methods: {
      onSubmit() {
       alert(1);
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
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
.el-button{
	padding: 6px 47px !important;
	border-radius: 25px !important;
}
.el-input__inner:focus{border-color: #6ED56C;}
.el-radio__inner{width:22px;height:22px;}
.el-radio__inner:hover{border-color: #6ED56C;}
.el-radio__input.is-checked .el-radio__inner{border-color:#6ED56C;background: #fff;}
.el-radio__inner::after{background: #E0E0E0;transform: translate(-50%,-50%) scale(1);width:12px;height:12px;}
.el-radio__input.is-checked .el-radio__inner::after{background: #6ED56C;}
.el-select .el-input__inner:focus{border-color: #6ED56C;}

.el-select-dropdown__item.selected.hover{background:#6ED56C;}
.el-select-dropdown__item.selected{background:#6ED56C;}
.el-button--primary{color:#fff;background-color:#6ED56C !important;border-color:#6ED56C !important;}
.el-button--primary:hover{background-color:#6EC400;border-color:#6EC400;}

.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}
.avatar-uploader .el-upload:hover {
    border-color: #20a0ff;
}
.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 133px;
    height: 160px;
    line-height: 160px;
    text-align: center;
}
.avatar {
    width: 133px;
    height: 160px;
    display: block;
}
</style>