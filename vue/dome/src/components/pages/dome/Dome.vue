<template>
	
	<div class="app">
		<h1>拖拽组件</h1>
		  <vuedraggable class="wrapper" v-model="list" >
  		
  		
    <transition-group>
    
      <div v-for="(item,index) in list" :key="index" class="item">
        <p>{{item}}</p>
        <span class="fet">年度</span>
      </div>
    </transition-group>
  </vuedraggable>
	</div>

</template>

<script>
//	自带的拖拽组件
import vuedraggable from 'vuedraggable';

export default {
  name: 'dome',
  components: {vuedraggable},
  props: {
  },
  data() {
    return {
      list: [1,2,34,4,54,5]
    }
  },
  updated() {
  	//拖拽之后 这个 list   顺序会发生改变
    console.log(this.list)
  },
  methods: {
  }
}
</script>
<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
}
.item{
  width: 300px;
  height: 50px;
  background-color: #42b983;
  color: #ffffff;
}
</style>