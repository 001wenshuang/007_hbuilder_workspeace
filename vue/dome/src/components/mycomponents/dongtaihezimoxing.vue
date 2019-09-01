<template>
	<div id="app">
		<h1>动态盒子模型</h1>
		<h3>聚拢居中 横向 和纵向</h3>
		<div class="fa01">
			<div class="son-01">
			
			</div>
			
			<div class="son-01">
				
			</div>
			<div class="son-01">
				
			</div>
			<div class="son-01">
				
			</div>
		</div>
		
		<h3>动态平均分配盒子</h3>
		<div class="fa02">
			<div class="son-03">
				
			</div>
			
			<div class="son-04">
				
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
	.fa01{
		display: flex;
		width: 100%;
		height: 200px;
		justify-content: center;
		align-items: center;
	}
	.son-01{
		display: block;
		width: 30px;
		height: 30px;
		border: solid blue 2px;
	}
	.fa02{
		display: -webkit-box;
		width: 100%;
		height: auto;
	}
	.son-03{
		display: block;
		height: 30px;
		border: solid red 1px;
		-webkit-box-flex: 1;
	}
	.son-04{
		display: block;
		height: 30px;
		border: solid red 1px;
		-webkit-box-flex: 3;
	}
</style>