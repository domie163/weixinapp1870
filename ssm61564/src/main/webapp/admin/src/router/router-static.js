import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import discusschanpinxinxi from '@/views/modules/discusschanpinxinxi/list'
    import news from '@/views/modules/news/list'
    import chanpinxinxi from '@/views/modules/chanpinxinxi/list'
    import chanpinfenlei from '@/views/modules/chanpinfenlei/list'
    import yonghu from '@/views/modules/yonghu/list'
    import orders from '@/views/modules/orders/list'
    import chanpinfuwu from '@/views/modules/chanpinfuwu/list'
    import yuyuexinxi from '@/views/modules/yuyuexinxi/list'
    import config from '@/views/modules/config/list'
    import fuwuleixing from '@/views/modules/fuwuleixing/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/discusschanpinxinxi',
        name: '产品信息评论',
        component: discusschanpinxinxi
      }
      ,{
	path: '/news',
        name: '公告信息',
        component: news
      }
      ,{
	path: '/chanpinxinxi',
        name: '产品信息',
        component: chanpinxinxi
      }
      ,{
	path: '/chanpinfenlei',
        name: '产品分类',
        component: chanpinfenlei
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
        path: '/orders/:status',
        name: '订单管理',
        component: orders
      }
      ,{
	path: '/chanpinfuwu',
        name: '产品服务',
        component: chanpinfuwu
      }
      ,{
	path: '/yuyuexinxi',
        name: '预约信息',
        component: yuyuexinxi
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/fuwuleixing',
        name: '服务类型',
        component: fuwuleixing
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
