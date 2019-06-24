<template>
  <div>
    <el-header></el-header>
    <Elbanner></Elbanner>
    <elnav></elnav>
    <sections></sections>
    <footer>@2019同程旅游</footer>
  </div>
</template>

<script>

import Header from "./components/header";
import Elbanner from "./components/elbanner";
import Elnav from "./components/elnav";
import Sections from "./components/sections";
export default {
  name: 'HelloWorld',
  components: {
    Sections,
    Elnav,
    Elbanner,
    'el-header':Header},
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  div{
    width: 100%;
    overflow-x: hidden;
  }
  footer{
    height: .3rem;
    font-size: .08rem;
    color: #aaa;
    background-color: #e8e8e8;
  }
</style>
