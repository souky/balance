<template>
<div id="Notic" class="main_body tc" >
  

</div>
</template>

<script>
export default {

  data () {
    return {
      
    }
  },
  
  mounted:function(){
      var height = document.documentElement.clientHeight;
      var heightOfset = height-60;
      var heightPadding = (heightOfset-600)/2
      console.log(heightOfset);
      document.getElementById("Forget").style.height = heightOfset+"px";
      document.getElementById("show_body").style.marginTop = heightPadding+"px";
  },
  methods:{
    login:function(){},
    backIndex:function(){
      this.$router.push({path:'/'})
    }
    
  },
}
</script>

<style>
 
</style>