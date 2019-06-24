<template>
    <div class="sections">
      <section id="special">
        <div class="top">
          <h2>
            <p>
              还剩<span>16</span><i>:</i><span>40</span><i>:</i><span>21</span>
            </p>
          </h2>
          <div class="pic">
            <em>限量100份</em>
          </div>
          <div class="massages">
            <h3>【暑期预售】福建·武夷山休闲旅居，包含：九曲度假酒店住宿+每日自助早餐+站点往返接送，2人起订哦~</h3>
            <div class="price">
              <em>¥</em><i>399.00</i>起
              <span>更多抢购<b></b></span>
            </div>
          </div>
        </div>
        <div class="left">
          <div class="intro">
            <h3>1元玩景点</h3>
            <p>PLUS会员</p>
          </div>
          <img src="/static/images/sections/section1/1.png"/>
        </div>
        <div class="right">
          <div class="intro">
            <h3>出境特卖</h3>
            <p>每日上新</p>
          </div>
          <img src="/static/images/sections/section1/2.png"/>
        </div>
      </section>
      <section id="appLoge">
        <img src="/static/images/sections/section2/1.jpg"/>
      </section>
      <section id="recommend">
        <h2>
          热烈推荐
        </h2>
        <div class="selections">
          <ul>
            <li  v-for="item in items">
              <span >{{item}}</span>
            </li>
            <li>
              <span>
                <i v-for="i in 3"></i>
              </span>
            </li>
          </ul>
        </div>
        <ul class="moreplaces">
          <li v-for="item in pics">
            <div class="warm">
              <b>{{item.desc}}</b>
              <em></em>
            </div>
            <p>{{item.text}}</p>
            <img :src="item.url">
          </li>
        </ul>
        <div class="btn" href="">查看更多玩法</div>
      </section>
      <section id="goodness">
        <ul>
          <li v-for="item in goodness">
            <i :style="getUrl(item.position)"></i>
              <p>{{item.title}}</p>
              <span>{{item.subtitle}}</span>
          </li>
        </ul>
      </section>
      <section id="bottom">
        <ul>
          <li v-for="item in bottoms">
            <img :src="item.url">
            <p>{{item.text}}</p>
          </li>
        </ul>
        <div class="bottom-text">
          <a>电脑版</a>
          <a>简体中文</a>
          <a>意见反馈</a>
        </div>
      </section>
      <div id="alive-btn"></div>
    </div>
</template>

<script>
    export default {
        name: "sections",
      data(){
          return{
            items:['曼谷','巴厘岛','大阪','冲绳'],
            pics:[
              {
              url:'./static/images/sections/section3/mp1.jpg',
              desc: '古镇',
              text: '今年最火的十大古镇'
            },{
              url:'./static/images/sections/section3/mp2.jpg',
              desc: '海岛',
              text: '适合秋冬出游的海岛'
            },{
              url:'./static/images/sections/section3/mp3.jpg',
              desc: '自驾游',
              text: '中国八大经典自驾游路线'
            },{
              url:'./static/images/sections/section3/mp4.jpg',
              desc: '盘点',
              text: '十月旅行目的地推荐'
            }],
            goodness:[
              {
                position: '0.01rem -0.46rem',
                title:'价格公正',
                subtitle:'价格公开透明，请安心购买'
              },{
                position: '-0.261rem -0.46rem',
                title:'产品丰富',
                subtitle:'出行产品，全品类覆盖，一站式服务'
              },{
                position: '-0.535rem -0.46rem',
                title:'品质保证',
                subtitle:'精挑细选，产品优选，放心出行'
              },{
                position: '-0.8rem -0.46rem',
                title:'专业顾问',
                subtitle:'24小时专业客服，一对一服务'
              }
            ],
            bottoms:[
              {
                url:'./static/images/sections/bottom/1.png',
                text:'客服电话'
              },{
                url:'./static/images/sections/bottom/2.png',
                text:'下载客户端'
              },{
                url:'./static/images/sections/bottom/3.png',
                text:'我的同程'
              }
            ]
          }
      },
      methods: {
          getUrl(position){
            return `background:url(./static/images/sections/section3/jlt.png) no-repeat ${position}/ 1.1rem `
          }
      }
    }
</script>

<style lang="scss" scoped>
  .sections{
    overflow: hidden;
  }
  $border_top: .1rem solid #e8e8e8;
  #special{
    max-width: 100%;
    height: 2.41rem;
    border-top: $border_top;
    box-sizing: border-box;
    .right img, .left img{
      width: .55rem;
      height: .55rem;
      float: right;
      margin-right: .1rem;
      margin-top: .08rem;
    }
    .intro {
      float: left;
      padding: .15rem;
      p{
        font-size: .1rem;
        margin-top: .05rem;
      }
    }
    .left{
      float: left;
      width: 49%;
      border-top: 1px solid #e8e8e8;
      border-right: 1px solid #e8e8e8;
      height: .75rem;
        h3{font-size: .16rem; }
        p{
          border: 1px solid orange;
          border-radius: .1rem;
          color: orange;}
    }
    .right{
      float: right;
      width: 49%;
      border-top: 1px solid #e8e8e8;
      height: .75rem;
        h3{
          font-size: .16rem;
        }
        p{
          border: 1px solid orangered;
          border-radius: .1rem;
          color: orangered;
        }
    }
    .top{
      max-width: 100%;
      height: 1.66rem;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      padding: .2rem .15rem;
      h2{
        height: .225rem;
        margin-bottom: .15rem;
        background: url("~@/assets/images/jlt.png") no-repeat -.1rem -0.145rem/ 1.6rem;
        p{
          text-align: right;
          font-size: .14rem;
          color: #929090;
          i{
            text-decoration: none;
          }
          span{
            display: inline-block;
            width: .24rem;
            height: .2rem;
            line-height: .2rem;
            text-align: center;
            color: #fff;
            background-color: #666;
            /*border: 1px solid #666;*/
            border-radius: .05rem;
          }
          span:nth-child(1){
            margin-left: .09rem;
          }
        }
      }
      .pic{
        position: relative;
        float: left;
        width: 1.24rem;
        height: 1rem;
        background-color: aquamarine;
        background: url("~@/assets/images/timer.jpg") no-repeat  center/cover;
        em{
          position: absolute;
          left: 0;
          display: inline-block;
          width: auto;
          height: auto;
          padding: .03rem .08rem;
          background-color: red;
          color: #fff;
          font-size: .12rem;
        }
      }
      .massages{
        position: relative;
        float: right;
        width: 2.07rem;
        height: 1rem;
        /*background-color:aqua;*/
        h3{
          font-size: .16rem;
          text-overflow: ellipsis;
          font-weight: normal;
          word-break: break-all;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
        .price{
          position: absolute;
          bottom: 0;
          right: 0;
          font-size: .12rem;
          /*background-color: cornflowerblue;*/
          width: 100%;
          height: .24rem;
          line-height: .24rem;
          text-align: left;
          em,i{
            display: inline-block;
            font-size: .18rem;
            /*font-weight: bold;*/
            color: red;
          }
          i{
            margin-right: .05rem;
          }
          span,b{
            display: inline-block;
            float: right;
          }
          b:after{
            content: '>';
            display: inline-block;
            padding-left: .05rem;
          }
        }
      }
    }
  }
  #appLoge{
    max-width: 100%;
    height: .95rem;
    border-top: $border_top;
    box-sizing: border-box;
    img{
      width: 100%;
      height: 100%;
      vertical-align: top;
    }
  }
  #recommend {
    max-width: 100%;
    height: 4.8rem;
    border-top: $border_top;
    box-sizing: border-box;
      h2{
        width: 100%;
        height: .24rem;
        font-size: .18rem;
        color: #ff6215;
        margin-top: .2rem;
      }
     h2:before{
       content: '';
       display: inline-block;
       height: .20rem;
       width: .20rem;
       vertical-align: middle;
       background: url("~@/assets/images/jlt.png") -0.1rem -0.44rem/1.58rem no-repeat;
     }
    .selections{
      max-width: 100%;
      height: 1.11rem;
      /*border: 1px solid #0f0;*/
      box-sizing: border-box;
      margin: .16rem .05rem .05rem .1rem;
      border-bottom: 1px solid #e8e8e8;
      ul{
        width: 100%;
        line-height: 0;
        text-align: left;
        li{
          display: inline-block;
          width: 25%;
          height: .4rem;
          line-height: 0;
          text-align: left;
          span{
            display: inline-block;
            width: 95%;
            background-color: aliceblue;
            border-radius: .2rem;
            text-align: center;
            height: .3rem;
            font-size: .14rem;
            padding-top: 18%;
            box-sizing: border-box;
            i{
              display: inline-block;
              width: .07rem;
              height: .07rem;
              background-color: #2c3e50;
              border-radius: 50%;
              margin-right: .03rem;
            }
          }
        }
      }
    }

    .moreplaces{
      box-sizing:border-box;
      max-width: 100%;
      height: 2.3rem;
      margin:.18rem .05rem .1rem .15rem;

      li{
        position: relative;
        box-sizing:border-box;
        width: 1.67rem;
        height: 1.1rem;
        margin-right: .1rem;
        margin-bottom: .1rem;
        background-color: cornflowerblue;
        border-radius: .05rem 0 0 0;
        img{
          width: 100%;
          border-radius: .05rem ;
        }
        .warm{
          position: absolute;
          left: 0;
          top: 0;
          border-radius: .05rem 0 0 0;
          b{
            float: left;
            width: auto;
            font-size: .05rem;
            color: #fff;
            background-color: red;
            border-radius: .05rem 0 0 0;
          }
          em{
            display: inline-block;
            float: right;
            width: 0;
            height: 0;
            border: .08rem solid transparent;
            border-top-color: red;
            border-left-color: red;
          }
        }

        p{
          display: inline-block;
          position: absolute;
          bottom: .04rem;
          left: .05rem;
          font-size: .14rem;
          color: #fff;
          overflow: hidden;
        }
      }
      li:nth-child(2n){
        float: right;
      }
      li:nth-child(2n + 1){
        float: left;
      }

    }
    .btn{
      font-size: .2rem;
      color: #00a0ff;
      margin-bottom: .2rem;
    }
  }
  #goodness{
    max-width: 100%;
    height: 2.885rem;
    border-top: $border_top;
    padding-left: .3rem;
    ul{
      width: 100%;
      height: 100%;
    }
    li{
      position: relative;
      width: 100%;
      max-height: 25%;
      padding: .15rem;
      line-height: 0;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      color: #c9bdaf;

      i{
        position: absolute;
        left: 0;
        vertical-align: middle;
        display: inline-block;
        width: .30rem;
        height: .30rem;
      }
      p{
        position: absolute;
        left: .5rem;
        top: .22rem;
        font-size: .16rem;
      }
      span{
        position: absolute;
        left: .5rem;
        display: inline-block;
        top: .45rem;
        font-size: .08rem;
      }
    }
  }
  #bottom{
    max-width: 100%;
    height: 1.05rem;
    background-color: #e8e8e8;
    ul{
      width: 100%;
      height: .55rem;
      display: flex;
      padding: 0 0.5%;
      li{
        width: 33%;
        line-height: .25rem;
        img{
          width: .23rem;
          height: .23rem;
        }
        p{
          width: 100%;
          font-size: .14rem;
          color: #aaa;
        }
      }
    }
    .bottom-text{
      display: flex;
      max-width: 100%;
      height: .33rem;
      margin-top: .15rem;
      font-size: .16rem;
      justify-content: center;
      align-items: center;
      a{
        display: inline-block;
        width: .61rem;
        font-size: .08rem;
      }
      a:nth-of-type(2){
        width: auto;
      }
      a:nth-of-type(2):before{
        display: inline-block;
        content: '';
        width: .1rem;
        height: .1rem;
        margin-right: .08rem;
        background: url("~@/assets/images/zhg.png");
      }
      a:nth-of-type(2):after{
        display: inline-block;
        content: '';
        width: .08rem;
        height: .05rem;
        margin-right: .08rem;
        background: url("~@/assets/images/xlk.png");
      }
    }
  }
  #alive-btn{
    position: fixed;
    bottom: .8rem;
    right: 0;
    width: .6rem;
    height: .5rem;
    background: url("~@/assets/images/special.png") no-repeat center/ .6rem;
  }
</style>
