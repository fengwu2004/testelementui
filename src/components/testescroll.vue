<template>
  <div class="page">
    <div class="wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
      <mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange" :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" ref="loadmore">
        <div class="list">
          <li v-for="item in list" class="listitem">{{ item }}</li>
        </div>
        <div slot="top" class="mint-loadmore-top">
          <span v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus === 'drop' }">↓</span>
          <span v-show="topStatus === 'loading'">
            <mt-spinner type="snake"></mt-spinner>
          </span>
        </div>
        <div slot="bottom" class="mint-loadmore-bottom">
          <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↓</span>
          <span v-show="bottomStatus === 'loading'">
            <mt-spinner type="snake"></mt-spinner>
          </span>
        </div>
      </mt-loadmore>
    </div>
  </div>
</template>

<style rel="stylesheet/scss" lang="scss" scoped>

  .page {

    .wrapper {
      margin-top: -1px;
      overflow: scroll;
    }

    .loadmore {

      width: 100%;
      overflow-x: hidden;
    }
  }

  .mint-spinner {
    display: inline-block;
    vertical-align: middle;
  }

  .listitem {

    height: 50px;
    line-height: 50px;
    border-bottom: solid 1px #eee;
    text-align: center;

    &:first-child {
      border-top: solid 1px #eee;
    }
  }

  .list {

    li {

      list-style-type:none;
    }
  }

  .loading-background{
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    transition: .2s linear;
  }

  .mint-loadmore-top, .mint-loadmore-bottom {
    span {
      display: inline-block;
      transition: .2s linear;
      vertical-align: middle;

    .is-rotate {
      transform: rotate(180deg);
    }
  }
  }
</style>

<script type="text/babel">
  export default {
    data() {
      return {
        list: [],
        topStatus: '',
        bottomStatus:'',
        wrapperHeight: 0,
        translate: 0,
        moveTranslate: 0
      };
    },

    methods: {
      handleTopChange(status) {
        this.moveTranslate = 1;
        this.topStatus = status;
      },
      handleBottomChange(status){
        this.bottomStatus = status;
      },
      translateChange(translate) {
        const translateNum = +translate;
        this.translate = translateNum.toFixed(2);
        this.moveTranslate = (1 + translateNum / 70).toFixed(2);
      },
      loadTop() {
        setTimeout(() => {
          let firstValue = this.list[0];
          for (let i = 1; i <= 10; i++) {
            this.list.unshift(firstValue - i);
          }
          this.$refs.loadmore.onTopLoaded();
        }, 1500);
      },
      loadBottom() {

        setTimeout(() => {

          this.$refs.loadmore.onBottomLoaded()
        }, 1000)
      }
    },

    created() {
      for (let i = 1; i <= 20; i++) {
        this.list.push(i);
      }
    },

    mounted() {
      this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
    }
  };
</script>
