<template>
	<div id="allClass">
		<div class="allClass_body">
			<p class="allClass_body_title">{{form.demo}}</p>
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
</style>