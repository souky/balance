<template>
	<div id="living">
		<div class="living_play"></div>
		<div class="living_banner">
			<banner></banner>
		</div>
	</div>
</template>
<script>
import page from '../member/page.vue'
import banner from './banner.vue'
export default {
  data () {
    return {
     }
  },
  components:{banner},
  methods:{
  	}
}
</script>
<style>
#living{
	padding-top:60px;
	background-color: #F9F9F9;
}	
.living_play{
	width: 1200px;
	height: 600px;
	margin: 0 auto;
	margin-top: 30px;
	background-color: green;
}
.living_banner{
	margin: 0 auto;
	margin-top: 40px;
	width: 1300px;
}
</style>