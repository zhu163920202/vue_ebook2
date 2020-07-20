<template>
  <div class="ebook">
    <div id="read">
    </div>
  </div>
</template>
<script>
import Epub from 'epubjs'
global.ePub = Epub
export default {
  name: 'Ebook',
  mounted () {
    this.book = new Epub('/2018_Book_BigDataInContext.epub')
    console.log(this.book)
    this.book.renderTo('read', {
      width: window.innerWidth,
      height: window.innerHeight
    }).display()
  }
}
</script>
<style lang='scss' scoped>

</style>
