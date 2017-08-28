<template>
<div id="index" class="main_body">
	{{msg}}
</div>
</template>

<script>
export default {
  data () {
    return {
      msg: '首页'
    }
  },
  mounted:function(){
  	var dates = new Date();
  	var dateString = this.timeF(dates).format("YYYY-MM-DD HH:mm:ss");
  	this.msg = dateString;
  	this.postHttp(this,{},"auth/user/getLoginUser",function(obj,data){
  		
  	})
  }
}
</script>

<style>
</style>