<template>
  <div class="header">
    <div class="localCity">
      <span>珠海</span>
    </div>
    <h2 class="search">
      <span>目的地/酒店/景点/关键字</span>
    </h2>
    <a href="" class="user"></a>
  </div>
</template>

<script>
export default {
    name: "elheader"
}
</script>

<style lang="scss" scoped>
.header{
  position: fixed;
  bottom: 0;
  top: 0;
  z-index: 100;
  display: flex;
  height: .52rem;
  line-height: .52rem;
  width: 100%;
  background-color: #fff;
  padding: .08rem .04rem;
  box-sizing:border-box;
  border-bottom: 1px solid #fff;
  box-shadow: 0 2px 10px #aaa;
}
  .localCity{
    width: .54rem;
    height: .33rem;
    line-height: .33rem;
    margin-right: 0.10rem;
    font-size: .14rem;
    box-sizing:border-box;
    text-align: center;
    /*color: #44c7ba;*/
  }
  .localCity  > span:after {
    content: '';
    display: inline-block;
    width: .14rem;
    height: .14rem;
    background: url("~@/assets/images/header/select.png") no-repeat .04rem .06rem/.10rem;
  }
  .search{
    width: 2.61rem;
    height: .33rem;
    line-height: .33rem;
    /*border: 1px solid  #0f0;*/
    font-size: .14rem;
    font-weight: normal;
    -webkit-border-radius: 90rem;
    -moz-border-radius: 90rem;
    border-radius: 90rem;
    background-color:rgba(220,222,226, 0.6);
  }
  .search >span:before{
    display: inline-block;
    content: '';
    width: .14rem;
    height: .14rem;
    background: url("~@/assets/images/header/search.png") no-repeat bottom/.12rem;
  }
  .user{
    width: .28rem;
    height: .22rem;
    /*border: 1px solid #0f0;*/
    padding-left: .08rem;
    font-size: .22rem;
    margin-top: .02rem;
    background: url("~@/assets/images/header/user.png") no-repeat bottom/contain;
  }

</style>
