<template>
<div id="Forget" class="main_body tc" >
  <div class="main" id="show_body">
      <div class="top">
        找回密码
      </div>
      <div class="midddle">
        
        <div class="tipsInformation">
            <p>找回密码</p>
            <p class="smallP">请通知您的班主任帮助您重置密码，然后班主任会把新密码告知您！</p>
        </div>
      </div>
      <div class="bottom">
              <el-button type="primary" @click="backIndex()">确定</el-button>
        </div>
    </div>

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