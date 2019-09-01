<template>
   <div class="swiper">
     <!--<swiper :options="swiperOption">
       <swiper-slide v-for="(page, index) of pages" :key="index">
         <div class="swiper-content"  v-for="item of page" :key="item.id">
           <div class="content-img">
             <img :src="baseimageurl + item.image_url" class="img" style="width: 50px; height: 50px">
           </div>
           <p class="content-title">{{item.title}}</p>
         </div>
       </swiper-slide>
       <div class="swiper-pagination"></div>
     </swiper>
     <div class="swiper-bottom"></div>-->
     <h1>dfe</h1>
   </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      baseimageurl: 'https://fuss10.elemecdn.com',
      swiperOption: {
        pagination: '.swiper-pagination',
        autoplay: false
      }
    }
  },
//分页计算
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<!--
<style lang="stylus" scoped>
  .swiper >>> .swiper-container
    height: 0
    padding-bottom: 65%
    .swiper-content
      position: relative
      top: 43px
      overflow: hidden
      float: left
      width: 25%
      height: 0
      padding-bottom: 25%
      color:gray
      font-size:13px
      .content-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        box-sizing: border-box
        padding: .1rem
        .img
          display: block
          margin: 0 auto
          height: 100%
      .content-title
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: .44rem
        line-height: .44rem
        text-align: center
  .swiper-bottom
    width: 100%
    height:15px
    background:whitesmoke
</style>-->