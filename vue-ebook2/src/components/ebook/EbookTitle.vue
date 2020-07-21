<template>
  <transition name="slide-down">
    <div class="title-wrapper" v-show="menuVisiable">
      <div class="left">
        <div class="icon-back" @click="back"></div>
      </div>
      <div class="right">
        <div class="icon-wrapper">
          <span class="icon-shelf"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-cart"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-more"></span>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters(['menuVisiable'])
    },
    methods: {
      back () {
        console.log('back')
      }
    }
  }
</script>
<style lang='scss' scoped>
  @import '../../assets/styles/global.scss';
  .title-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: px2rem(48);
    background: white;
    z-index: 1;
    box-shadow: 0 px2rem(8) px2rem(8) rgba(0,0,0,.15);
    display: flex;
    font-size: px2rem(20);
    .left {
      //存在剩余空间不扩大 空间不足不缩小 分配多余空间前项目占据的主轴空间
      flex: 0 0 px2rem(60);
      @include center;
    }
    .right {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      .icon-wrapper {
        flex: 0 0 px2rem(40);
        @include center;
        .icon-cart,
        .icon-shelf {
          font-size: px2rem(22);
        }
      }
    }
  }
</style>
