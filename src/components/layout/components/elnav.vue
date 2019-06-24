<template>
    <div id="nav">
      <div class="mainNav">
        <ul>
            <li  v-for="item in topItem">
              <!--<a href="">-->
                <img :src="item.url"/>
                <p>{{item.desc}}</p>
              <!--</a>-->
            </li>
        </ul>
      </div>
      <div class="subNav">
        <ul>
          <li  v-for="item in bottomItem">
            <!--<a href="">-->
            <img :src="item.url"/>
            <p>{{item.desc}}</p>
            <!--</a>-->
          </li>
        </ul>
      </div>
    </div>
</template>
<script>
  export default {
    name: "elnav",
    data(){
      return {
        topItem:[
          {
            url:'./static/images/nav/top/1.png',
            desc: '火车票'
          },{
            url:'./static/images/nav/top/2.png',
            desc: '机票'
          },{
            url:'./static/images/nav/top/3.png',
            desc: '酒店住宿'
          },{
            url:'./static/images/nav/top/4.png',
            desc: '景点门票'
          },
        ],
        bottomItem:[
          {
            url:'./static/images/nav/bottom/1.png',
            desc: '火车票 船票'
          },{
            url:'./static/images/nav/bottom/2.png',
            desc: '周边自由行'
          },{
            url:'./static/images/nav/bottom/3.png',
            desc: '周边跟团游'
          },{
            url:'./static/images/nav/bottom/4.png',
            desc: '国内游'
          },{
            url:'./static/images/nav/bottom/5.png',
            desc: '游轮'
          }, {
            url:'./static/images/nav/bottom/6.png',
            desc: '出境游'
          },{
            url:'./static/images/nav/bottom/7.png',
            desc: '海外玩乐'
          },{
            url:'./static/images/nav/bottom/8.png',
            desc: '签证'
          },{
            url:'./static/images/nav/bottom/9.png',
            desc: '全球Wifi'
          },{
            url:'./static/images/nav/bottom/10.png',
            desc: '全部服务'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
 #nav{
   overflow: hidden;
   box-sizing:border-box;
   max-width: 100%;
   height: 2.95rem;
   padding: .15rem .1rem;
 }
  .mainNav{
    height: .98rem;
    width: 100%;
    ul{
      width: 100%;
      display: flex;
      justify-content: center;
      align-items:center;
    }
    li{
      display: inline-block;
      width: 25%;
      line-height: .3rem;
      text-align: center;
    }
    img{
      width: .5rem;
      height: .5rem;
      vertical-align: middle;
    }
    p{
      display: inline-block;
      font-size: .16rem;
      vertical-align: middle;
    }
  }
  .subNav{
    height:1.67rem;
    border-top: .003rem solid #ccc;

    ul{
      width: 100%;
      line-height: .3rem;
    }
    li{
      display: inline-block;
      width: 20%;
      height: auto;
      line-height: .3rem;
      text-align: center;
    }
    img{
      width: .3rem;
      height: .3rem;
      vertical-align: middle;
    }
    p{
      display: inline-block;
      font-size: .12rem;
      vertical-align: middle;
    }
  }

</style>
