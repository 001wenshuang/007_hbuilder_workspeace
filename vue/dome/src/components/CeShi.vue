<template>
	<div id="app">

		<Rating></Rating>
		<h1>我的测试页面</h1>
		<Rating></Rating>
		<oneinput></oneinput>

		<passwordinput securitycode="Y" inputpasswordlength="6" passwordhide="Y" numberorString="number" setbgcolor="red" @tomsgnumberval="passval"></passwordinput>

		<dongtaihezimoxing></dongtaihezimoxing>
		<myselect></myselect>

		<h1>点击并且传递值  tab 变量</h1>
		<div class="ul-seji" style="background-color: blue;">
			<div class="df" v-for="(sit,index) in sitlist" @click="tab=index">
				8888
			</div>
		</div>

		<h1>页面跳转01</h1>
		<router-link to='dome'><button>点我跳转到dome页面</button></router-link>
		<h1>页面跳转02</h1>
		<button @click="hreftwo" class="test-one">点我到第二个页面dome</button>

		<div @click="goOff()">返回上一页</div>

		<div @click="back()"> 返回上一页，如果没有上一页返回首页</div>
		
		<a href="http://localhost:8084/return/hello'"><h1>请求后台</h1></a>
		
	</div>
</template>

<script>
	import Rating from './Rating' //导入组件

	import oneinput from './mycomponents/oneinput' //导入组件

	import passwordinput from './mycomponents/password-input' //导入组件

	import dongtaihezimoxing from './mycomponents/dongtaihezimoxing' //导入组件

	import myselect from './mycomponents/myselect' //导入组件

	export default {
		name: 'CeShi',
		components: {
			Rating, //启用组件
			oneinput,
			passwordinput,
			dongtaihezimoxing,
			myselect

		},

		data() {
			return {
				msg: 'Wp',
				sitlist: [1, 2, 3, 5, 8, 2, 4, 5],
				tab: ""
			}
		},
		mounted() { //加载完了之后 可以执行的方法
			//加载完成后 input 获取到方法
			
				//发送get请求   Spring_boot_jsp_dome 项目
			this.$http.get('http://localhost:8084/return/hello').then(response => {
				console.log(response.data);
				
					console.log("获取到后台数据");
				// get body data
				// this.someData = response.body;

			}, response => {
				console.log("error");
				console.log("get请求出现错误error");
			});

		},
		methods: {
			passval(data) {
				console.log("已经实现了父子组件传值" + "------------------" + data)
			},
			hreftwo() {

				this.$router.push({
					path: '/dome'
				})

			},
			goOff() {
				this.$router.go(-1);
			},
			back() {
				if(window.history.length <= 1) {
					this.$router.push({
						path: '/'
					})
					return false
				} else {
					this.$router.go(-1)
				}
			}
	
		},
		watch: { // 核心是实时 监听  摸个 值发生 变化 就会触发值对应的方法
			tab(val) {
				console.log(val + "tab 这个值发生变化");
			}
		},
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--scoped 屏蔽样式-->
<style>
	body {
		margin: 0px;
		width: 100%;
		height: auto;
	}
	
	h1,
	h2 {
		font-weight: normal;
	}
	
	ul {
		list-style-type: none;
		padding: 0;
	}
	
	li {
		display: inline-block;
		margin: 0 10px;
	}
	
	a {
		color: #42b983;
	}
</style>