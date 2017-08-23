<template>
	<div id="paging">
		<el-pagination v-bind:current-Page="pageIndex" v-bind:page-size="pageSize" :total="totalNumber"
	   	layout="total,sizes,prev,pager,next,jumper" v-bind:page-sizes="pageSizes"
	    v-on:size-change="sizeChange" v-on:current-change="pageIndexChange"></el-pagination>
    </div>
</template>
<script>
export default {
     data() {
        return {
          pageIndex:1,
          pageSize:10,
          //total:40,
          pageSizes:[10,20,50,100],
        }
      },
      props:['totalNumber'],
      created:function(){
      	this.totalNumber=this.total;
      },
      methods: {
      sizeChange: function (pageSize,pageIndex) {   //每页显示条数
	      this.pageSize = pageSize;
	      this.$emit('newNOdeEvents',this.pageSize,this.pageIndex);
	    },
	   pageIndexChange: function (pageIndex,pageSize) {   //第几页
	      this.pageIndex = pageIndex;
	      this.$emit('newNOdeEvents',this.pageIndex,this.pageSize);
	    },
    },
}
</script>