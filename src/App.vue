<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import {remChange} from '@/utils/remChange.js'
export default {
  name: 'App',
  created() {
    remChange()
    window.addEventListener('resize', remChange) // 适配rem的值
  }
}
</script>

<style lang="scss" >
  *{
    padding: 0;
    margin: 0;
  }
  ul,li{
    height: 100%;
    list-style: none;
  }
  html, body,#app{
    width: 100%;
    height: 100%;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top:.52rem;
}
</style>
