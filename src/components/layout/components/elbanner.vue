<template>
    <div class="banner">
      <div class="swiper-container">
        <ul class="swiper-wrapper">
          <li v-for="item in items" class="swiper-slide">
            <a href="">
              <picture class="itemture">
                <source type="image/webp" :srcset="item.url">
                <img class="image" :src="item.url">
              </picture>
              <div class="pic-info" v-if="item.title" :style="item.color ? {color: item.color}:{}">
                <h4>{{item.title}}</h4>
                <p>{{item.subtitle}}</p>
              </div>
            </a>
          </li>
        </ul>
        <div class="swiper-pagination"></div><!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
      </div>
    </div>
</template>

<script>
import Swiper from "swiper"
import 'swiper/dist/css/swiper.css'
export default {
  name: "elbanner",
  data() {
    return{
      items:[
        { url:'./static/images/banner/1.jpg',
          title: '乌鲁木齐',
          subtitle:'一生只得去的目的地之一'
        },{ url:'./static/images/banner/2.jpg',
          title: ''
        },{ url:'./static/images/banner/3.webp',
          title: '香港',
          subtitle:'世界是本书，从这里读起'
        },{ url:'./static/images/banner/4.webp',
          title: '广州',
          subtitle:'超值特惠门票任性玩',
          color: '#2196f3'
        },{ url:'./static/images/banner/5.webp',
          title: '珠海',
          subtitle:'不可忽视的身边美景',
          color: '#009688'
        },{ url:'./static/images/banner/6.webp',
          title: ''
        }
      ]
    }
  },
  created() {},
  methods: {
      _initSwiper() {
        let mySwiper = new Swiper('.swiper-container', {
          loop:true,
          autoplay: {
            disableOnInteraction: false,    // 用户操作swiper之后，是否禁止autoplay
          },
          pagination: {
            el: '.swiper-pagination'
          }
        })
      }
  },
  mounted() {
      this._initSwiper()
  }
}
</script>

<style lang="scss" scoped>
.banner{
  max-width: 100%;
  height: .95rem;
  overflow: hidden;
}
 .image{
    width: 100%;
  }
  .pic-info{
    position: absolute;
    left: -.5rem;
    top: 0.1rem;
    width: 100%;
    height: 0.68rem;
    color: #fff;
  }
  .pic-info h4{
    font-size: .28rem;
  }
  .pic-info p{
    font-size: .12rem;
  }
</style>
