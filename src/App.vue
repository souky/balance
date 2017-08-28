<template>
  <div id="app">
  	<b-header></b-header>
    	<router-view></router-view>
  </div>
</template>

<script>
	import BHeader from '@/components/BHeader'
	import Vue from 'vue'
	export default {
	  name: 'app',
   	components: {BHeader},
    mounted:function(){
      var height = document.documentElement.clientHeight;
      document.getElementById("app").style.height = height+"px";
  },
	}
</script>

<style>
#app {
  font-family: '\u5FAE\u8F6F\u96C5\u9ED1', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #F9F9F9
}

</style>
