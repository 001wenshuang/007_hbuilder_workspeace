<template>
	<div id="app">
		<h1>vue post请求后台</h1>
		<form @submit.prevent="postsubmit">
			<div class="field">
				姓名：
				<input type="text" v-model="user.username">
			</div>

			<div class="field">
				密码：
				<input type="text" v-model="user.password">
			</div>
				<div class="field">
				年龄：
				<input type="text" v-model="user.age">
			</div>

	<div class="field">
				小名：
				<input type="text" v-model="user.name">
			</div>


			<input type="submit" value="提交">
		</form>
	</div>
</template>

<script>
	export default {
		name: 'login',
		pageTitle: 'login组件',
		props: {

		},
		components: { //引入组件时要在这里添加

		},

		data() {
			return {

				rce: true,
				zifu: "",

				user: {
					username: "",
					password: "",
					age: "",
					name: ""
				}

			}
		},

		mounted() { //加载完了之后 可以执行的方法
			//加载完成后 input 获取到方法

		},
		created() { //创建的时候执行的方法
				
		},

		watch: { // 核心是实时 监听  摸个 值发生 变化 就会触发值对应的方法

		},
		computed: { //通过传值动态控制样式的   显示

		},
		methods: {

			postsubmit() {//post 请求提交到后台数据
				
				console.log("提交表单数据")
				//json化
				var formData = JSON.stringify(this.user); // 这里才是你的表单数据

				this.$http.post('http://localhost:8084/return/loginbypost1', formData).then((response) => {
					// success callback
					console.log(response.data);
				}, (response) => {
					console.log("error");
					// error callback
				});
			}
		}

	
	}
</script>

<style>

</style>