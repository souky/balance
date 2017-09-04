import Vue from 'vue'
import App from './App'
import router from './router'

import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import '../static/css/main.css'
import '../static/css/apps.css'
import axios from 'axios'

/* vue配置 */
Vue.config.debug = process.env.NODE_ENV !== 'production'
Vue.config.productionTip = false

/* 附加插件 */
Vue.use(VueRouter)
Vue.use(ElementUI)

/* axios配置 */
axios.defaults.withCredentials = true
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
Vue.prototype.$axios = axios

/* 时间转化 */
Vue.prototype.timeF = require('moment')

var querystring = require('querystring');
var baseUrl = "http://192.168.128.213:8080/balanced-education/study/"

/* 
 * 封装ajax
 * obj : 全局this
 * data : ajax传入后台data数据
 * address : ajax接口地址
 * fn : 成功返回方法  带参数  obj,data  obj : this data : response
 * */
Vue.prototype.postHttp = function(obj,data,address,fn){
	obj.$axios.post(baseUrl+address,querystring.stringify(data),{withCredentials : true}).then(response => {
  		if(response.data.code == "60000" || response.data.code == "50000"){
  			//obj.$router.push({ path: '/login' });
  			obj.dialogFormVisible = true;
  			obj.$notify({
		      title: '提示',
		      message:'请先登录',
		      offset: 100,
		      duration:1500,
		      type:'warning'
		    });
  		}else{
  			fn(obj,response.data);
  		}
    },response => {
    	obj.loading = false;
		obj.$notify({
	      title: '网络错误',
	      message: '网络错误',
	      offset: 100,
	      duration:1500,
	      type:'error'
	    });
	})
}

/* 
 * 封装提示
 * obj : 全局this
 * title : 标题
 * message : 提示内容
 * type : 提示类型  success warning error
 * */
Vue.prototype.notify_jr = function(obj,title,message,type){
	obj.$notify({
      title: title,
      message: message,
      offset: 100,
      duration:1500,
      type:type
    });
}

/*设置cookie*/



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
