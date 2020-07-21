<template>
  <div class="ebook">
    <ebook-title></ebook-title>
    <ebook-reader></ebook-reader>
    <ebook-menu></ebook-menu>
  </div>
</template>
<script>
  import EbookTitle from '../components/ebook/EbookTitle'
  import EbookMenu from '../components/ebook/EbookMenu'
  import EbookReader from '../components/ebook/EbookReader'
export default {
  components: {
    EbookReader,
    EbookTitle,
    EbookMenu
  }
}
</script>
<style lang='scss' scoped>

</style>
