<template>
	<div id="app">
		<h1 v-show="rce">自定义Select 组件  循环遍历 watch的使用</h1>
		<select name="nihao" v-model="getselected" >
			<option v-for="(student,index) in studentlist" :value="index">{{student.name}}</option>

		</select>
	</div>

</template>

<script>
	import mock from '@/assets/datamodel/mock.js' //导入虚拟数据

	export default {
		name: 'myselect',
		pageTitle: 'myselect组件',
		props: {

		},
		components: { //引入组件时要在这里添加

		},

		data() {
			return {
				studentlist: mock.student.data.list,
				rce: true,
				getselected:""
			}
		},

		mounted() { //加载完了之后 可以执行的方法
			//加载完成后 input 获取到方法

		},
		created() { //创建的时候执行的方法
			console.log(this.studentlist)
		},

		watch : { // 核心是实时 监听  摸个 值发生 变化 就会触发值对应的方法
				getselected(val){
					console.log(val);
				}
		},
		computed: { //通过传值动态控制样式的   显示

		},
		methods: {

			toDetail() {

			},

			cancel() {
				console.log("oncancel");
			},
			confirm() {
				console.log("onconfirm");
			},

			inclick() {
				console.log("inclick");
			}

		}
	}
</script>

<style>
	select {
		width: 40%;
		height: 30px;
		-webkit-appearance: none;
		border: 0px;
		background-color: #f6f6f6;
		font-size: 14px;
		color: #bgb1b1;
		background: url("../../assets/logo.png") no-repeat right;
		background-size: 30px 30px;
	}
</style>