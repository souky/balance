import Vue from 'vue'
import Router from 'vue-router'
// 组件
import Index from '@/components/Index'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Forget from '@/components/Forget'
import allClassMore from '@/components/class/AllClassMore.vue'

import MemberCenter from '@/components/member/MemberCenter'
import Notic from '@/components/member/notic'//个人消息中心



import LiveRoom from '@/components/live/LiveRoom'
import AllClass from '@/components/class/AllClass'
import AllFile from '@/components/file/AllFile'
import Living from '@/components/live/living.vue'
import Playing from '@/components/live/playing.vue'

Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
    {
      path: '/index',
      name: '首页',
      component: Index
    },
     {
      path: '/',
      name: '首页',
      component: Index
    },
    {
      path: '/Forget',
      name: '忘记密码',
      component: Forget
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
      path: '/memberCenter/:part',
      component: MemberCenter,
//    children:[
//    {
//      path:'/personaldata',
//      name: '个人资料',
//      component:PersonalData,
//    },{
//      path:'/accountsecurity',
//      name: '',
//      component: AccountSecurity,
//    },{
//      name: '',
//      path:'/classesrecord',
//      component: ClassesRecord,
//    },{
//      name: '',
//      path:'/studyrecord',
//      component: StudyRecord,
//    },{
//      name: '',
//      path:'/orderrecord',
//      component: OrderRecord, 
//    }]
    },
    {
      path: '/liveRoom',
      name: '直播间',
      component: LiveRoom
    },
    {
      path: '/notic',
      name: '信息中心',
      component: Notic
    },
    {
      path: '/allClass',
      name: '所有课程',
      component: AllClass
    },
    {
      path: '/allClassMore/:part',
      component: allClassMore,
    },
    {
      path: '/allClassMore',
      name:'课程详情',
      component: allClassMore
    },
    {
      path: '/living',
      component: Living
    },
    {
      path: '/living/:part',
      component: Playing,
    },
    {
      path: '/playing',
      component: Playing
    },
    {
      path: '/playing/:part',
      component: Living,
    },
    {
      path: '/allFile',
      name: '所有教辅',
      component: AllFile
    }
  ]
})
