import Vue from 'vue'
import Router from 'vue-router'
// 组件
import Index from '@/components/Index'
import Login from '@/components/Login'
import Register from '@/components/Register'

import MemberCenter from '@/components/member/MemberCenter'
import PersonalData from '@/components/member/membercenter/personaldata.vue'
import AccountSecurity from '@/components/member/membercenter/accountSecurity.vue'
import ClassesRecord from '@/components/member/membercenter/classesRecord.vue'
import StudyRecord from '@/components/member/membercenter/studyRecord.vue'
import OrderRecord from '@/components/member/membercenter/orderRecord.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Index
    },
    {
      path: '/login',
      name: '登录',
      component: Login
    },
    {
      path: '/register',
      name: '注册',
      component: Register
    },
    {
      path: '/memberCenter',
      name: '用户中心',
      component: MemberCenter,
      children:[{
        path:'/',
        component:PersonalData,
      },{
        path:'/personaldata',
        component:PersonalData,
      },{
        path:'/accountsecurity',
        component: AccountSecurity,
      },{
        path:'/classesrecord',
        component: ClassesRecord,
      },{
        path:'/studyrecord',
        component: StudyRecord,
      },{
        path:'/orderrecord',
        component: OrderRecord, 
      }]
    },
  ]
})
