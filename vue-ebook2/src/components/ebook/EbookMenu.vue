<template>
  <div class="menu-bar">
    <transition name="slide-up">
      <div class="menu-wrapper" v-show="menuVisiable">
        <div class="icon-wrapper">
          <span class="icon-menu" @click="showSetting(4)"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-progress" @click="showSetting(3)"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-bright" @click="showSetting(2)"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-A" @click="showSetting(1)"></span>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters([
        'menuVisiable'
      ])
    },
    methods: {
      showSetting (index) {
      }
    }
  }
</script>
<style lang='scss' scoped>
  @import '../../assets/styles/global.scss';
  .menu-bar {
    .menu-wrapper {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: px2rem(48);
      display: flex;
      box-shadow: 0 px2rem(-8) px2rem(8) rgba(0,0,0,.15);
      background: white;
      z-index: 1;
      font-size: px2rem(20);
      @include center;
      .icon-wrapper {
        flex: 1;
        @include center;
        .icon-progress {
          font-size: px2rem(24);
        }
        .icon-bright {
          font-size: px2rem(22);
        }
      }
    }
  }
</style>
