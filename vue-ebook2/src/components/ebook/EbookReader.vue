<template>
  <div class="ebook-reader">
    <!-- 电子书展示 -->
    <div id="read">
    </div>
    <ebook-menu></ebook-menu>
  </div>
</template>
<script>
  import { ebookMixin } from '../../utils/mixin'
  import Epub from 'epubjs'
  global.ePub = Epub
  export default {
    mixins: [
      ebookMixin
    ],
    methods: {
      prevPage () {
        this.rendition.prev()
        this.hideTitleAndMenu()
      },
      nextPage () {
        this.rendition.next()
        this.hideTitleAndMenu()
      },
      toggleTitileAndMenu () {
        // 通过分发调用actions中的setMenuVisiable
        this.$store.dispatch('setMenuVisiable', !this.menuVisiable)
      },
      hideTitleAndMenu () {
        this.$store.dispatch('setMenuVisiable', false)
      },
      initEpub () {
        // 静态资源路径
        const url = 'http://10.133.154.1:8081/epub/' + this.fileName + '.epub'
        // console.log(url)
        this.book = new Epub(url)
        this.rendition = this.book.renderTo('read', {
          width: window.innerWidth,
          height: window.innerHeight
        })
        this.rendition.display()
        // 向iframe中添加手势 touchstart touchend
        this.rendition.on('touchstart', event => {
          this.touchStartX = event.changedTouches[0].clientX
          this.touchStartTime = event.timeStamp
        })
        this.rendition.on('touchend', event => {
          const offsetX = event.changedTouches[0].clientX - this.touchStartX
          const time = event.timeStamp - this.touchStartTime
          // 如果手势移动距离>40且时间<500ms认为手势有效进行翻页，否则认为无滑动操作，作为屏幕点击操作
          if (offsetX > 40 && time < 500) {
            this.prevPage()
          } else if (offsetX < -40 && time < 500) {
            this.nextPage()
          } else {
            this.toggleTitileAndMenu()
          }
          // Unable to preventDefault inside passive event listener invocation.
          // event.preventDefault() 新版的Google已经默认阻止了该行为
          // 阻止事件传播
          event.stopPropagation()
        })
      }
    },
    mounted () {
      // 用于接收动态路由参数
      const fileName = this.$route.params.fileName.split('|').join('/')
      // 通过store.dispatch来分发dispatch（调用actions）setFileName返回一个promise对象
      this.$store.dispatch('setFileName', fileName).then(() => {
        this.initEpub()
      })
    }
  }
</script>
<style lang='scss' scoped>

</style>
