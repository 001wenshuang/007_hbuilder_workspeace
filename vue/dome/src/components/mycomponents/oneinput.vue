<template>
	<div id="app">
		<h1 v-show="rce">input 的使用  watch </h1>
		请输入:<input type="text" name="ceshi" id="ceshi" v-model="zifu" />
	</div>
	
</template>

<script>


	export default {
		name: 'oneinput',
		pageTitle: 'oneinput组件',
		props: {

		},
		components: { //引入组件时要在这里添加

		},

		data() {
			return {
				
				rce: true,
				zifu:""
			}
		},

		mounted() { //加载完了之后 可以执行的方法
			//加载完成后 input 获取到方法

		},
		created() { //创建的时候执行的方法
		
		},

		watch : { // 核心是实时 监听  摸个 值发生 变化 就会触发值对应的方法
				zifu(val){
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
	input{
		border: solid blue 2px;
	}
</style>