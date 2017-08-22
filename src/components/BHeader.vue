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
			<div class="l rightItems">登录</div>
			<div class="l rightItems">注册</div>
			
		</div>
		<div class="logoImg">
			<img src="../../static/img/header/logo.png" />
		</div>
	</div>
</template>

<script>
export default {
  data () {
    return {
      msg: '顶部导航栏',
      searchKey:'',
    }
  },
  methods:{
  	handleIconClick(ev){
  		console.log(ev);
  	}
  }
}
</script>

<style>
</style>