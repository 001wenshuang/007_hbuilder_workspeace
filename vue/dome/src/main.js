// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Rating from './components/Rating' //导入组件
import oneinput from './components/mycomponents/oneinput' //导入组件
import passwordinput from './components/mycomponents/password-input' //导入组件
import dongtaihezimoxing from './components/mycomponents/dongtaihezimoxing' //导入组件
import myselect from './components/mycomponents/myselect' //导入组件
import VueResource from 'vue-resource'
Vue.use(VueResource);
import VueDND from 'awe-dnd'
Vue.use(VueDND)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
},
{  //每定义一个组件都要在这里进行配置
  el: '#app',
  template: '<Rating/>',
  components: { Rating }
},
{  //每定义一个组件都要在这里进行配置
  el: '#app',
  template: '<oneinput/>',
  components: { oneinput }
},
{  //每定义一个组件都要在这里进行配置
  el: '#app',
  template: '<passwordinput/>',
  components: { passwordinput }
},
{  //每定义一个组件都要在这里进行配置  才会变成组件 否则 只能是一个单独的页面
  el: '#app',
  template: '<myselect/>',
  components: { myselect }
}
)
