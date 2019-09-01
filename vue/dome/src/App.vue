<template>
  <div id="app">
    <!--<img src="./assets/logo.png"> -->   <!--所有的页面  的公共的logo  -->
    <router-view/> <!--所有的页面  以视图形式插入进来-->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style >
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px ;
}
</style>
