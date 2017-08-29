<template>
	<div id="allClass">
		<div class="allClass_body">
			<p class="allClass_body_title">{{form.demo}}</p>
			<hr style="width:93%;background-color:#E5E5E5;margin-top:20px;">
			<div class="allClass_body_content">
				<div class="allClass_body_content_img l"></div>
				<div class="allClass_body_content_word l">
					<p class="l allClass_body_content_word_color">年纪：</p><p class="l">年纪：</p>
					<div class="cl"></div>
					<p class="l allClass_body_content_word_color">年纪：</p><p class="l">年纪：</p>
					<div class="cl"></div>
					<p class="l allClass_body_content_word_color">年纪：</p><p class="l">年纪：</p>
					<div class="cl"></div>
					<p class="l allClass_body_content_word_color">年纪：</p><p class="l">年纪：</p>
					<div class="cl"></div>
					<p class="l allClass_body_content_word_color">年纪：</p><p class="l">年纪：</p>
					<div class="cl"></div>
					<p class="l allClass_body_content_word_color">年纪：</p><p class="l">年纪：</p>
					<div class="cl"></div>
					<p class="l allClass_body_content_word_color">年纪：</p><p class="l">年纪：</p>
					<div class="cl"></div>
					<p class="l allClass_body_content_word_color">年纪：</p><p class="l">年纪：</p>
					<div class="cl"></div>
					<p class="l allClass_body_content_word_color">年纪：</p><p class="l">年纪：</p>
					<div class="cl"></div>
					<p class="l allClass_body_content_word_color">年纪：</p><p class="l">年纪：</p>
					<div class="cl"></div>
				</div>
				<div class="cl"></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  data () {
    return {
    	form:{
      	demo:'苏州小学语文三年级下册',
      	}
    }
  }
}
</script>

<style>
#allClass{
	overflow: hidden;
	background-color: #F9F9F9;
}
.allClass_body{
	border: 1px solid #E5E5E5;
	width: 1200px;
	height: 500px;
	margin: 0 auto;
	margin-top: 90px;
	background-color: #fff;
}
.allClass_body_title{
	font-size: 24px;
	color: #272727;
	margin-top:40px;
	margin-left:40px;
}
.allClass_body_content{
	width: 93%;
	margin: 0 auto;
	margin-top:20px;
}
.allClass_body_content_img{
	width: 290px;
	height: 372px;
	background-color: red;
}
.allClass_body_content_word{
	width: 800px;
	margin-left: 20px;
}
.allClass_body_content_word p{
	margin-top:5px;
	margin-left:5px;
	font-size: 16px;
}
.allClass_body_content_word_color{
	color: #999999;
}
</style>