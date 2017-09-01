<template>
  <el-carousel indicator-position="outside" arrow="always" :autoplay="false">
    <el-carousel-item :key="item">
       <h3>
       1
       </h3>
    </el-carousel-item>
    <el-carousel-item :key="item">
       <h3>
       2
       </h3>
    </el-carousel-item>
  </el-carousel>
</template>
<script>
  export default {
  data () {
    return {
      item:1,
     }
  },
  methods:{
    }
}
</script>
<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .el-carousel__indicators--outside{
    display: none;
  }
  .el-carousel__arrow{
    border: none;
    padding: 0;
    width: 30px;
    height: 55px;
    border-radius:0 !important;
    background-color: #6ED56C;
    color: #fff;
    position: absolute;
    top: 50%;
    z-index: 10;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    text-align: center;
    font-size: 12px;
  }
  .el-carousel__arrow--left{
    left: 0;
  }
  .el-carousel__arrow--right{
    right: 0;
  }
  .el-carousel__item{
    width: 90%;
    left: 5%;
  }
</style>