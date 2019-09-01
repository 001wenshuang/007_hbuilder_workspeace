import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CeShi from '@/components/CeShi'
import Dome from '@/components/pages/dome/Dome'  //页面所在路径
import Dome02 from '@/components/pages/dome/Dome02'  //页面所在路径
import dongtaihezimoxing from '@/components/mycomponents/dongtaihezimoxing'  //页面所在路径
import login from '@/components/login'
import myselect from '@/components/mycomponents/myselect'  //页面所在路径
import tuozhuai from '@/components/tuozhuai'
import HomeSwiper from '@/components/HomeSwiper'
Vue.use(Router)


export default new Router({
	mode:'history',  //http://localhost:8080/#/ceshi  这个配置是 去除＃号的
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },

  {
      path: '/tuozhuai',
      name: 'tuozhuai',
      component: tuozhuai
    },
    {
      path: '/ceshi',//配置核心映射网址的地方
      name: 'CeShi',  //
      component: CeShi //这里是导入的元素对象
    },
    {
      path: '/dome',//配置核心映射网址的地方
      name: 'Dome',  //
      component: Dome //这里是导入的元素对象
    },
       {
      path: '/dome02',//配置核心映射网址的地方
      name: 'Dome02',  //
      component: Dome02 //这里是导入的元素对象
    },
      {
      path: '/login',//配置核心映射网址的地方
      name: 'login',  //
      component: login //这里是导入的元素对象
    },
     {
      path: '/dongtaihezimoxing',//配置核心映射网址的地方
      name: 'dongtaihezimoxing',  //
      component: dongtaihezimoxing //这里是导入的元素对象
    },
        {
      path: '/HomeSwiper',//配置核心映射网址的地方
      name: 'HomeSwiper',  //
      component: HomeSwiper //这里是导入的元素对象
    },
    {
      path: '/myselect',//配置核心映射网址的地方
      name: 'myselect',  //
      component: myselect //这里是导入的元素对象
    }
  ]
})
