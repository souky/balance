<template>
  <div id="app">
  	<b-header></b-header>
  	<keep-alive>
    	<router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
	import BHeader from '@/components/BHeader'
	import Vue from 'vue'
	export default {
	  name: 'app',
   	components: {BHeader},
	}
</script>

<style>
#app {
  font-family: '\u5FAE\u8F6F\u96C5\u9ED1', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
