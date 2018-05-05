<template>
  <div class="page">
    <div class="wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
      <mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange" ref="loadmore">
        <div class="list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
          <li v-for="item in list" class="listitem">{{ item }}</li>
        </div>
        <div slot="top" class="mint-loadmore-top">
          <span v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus === 'drop' }">↓</span>
          <span v-show="topStatus === 'loading'">
            <mt-spinner type="snake"></mt-spinner>
          </span>
        </div>
        <div v-show="loading" class="page-infinite-loading">
          <div>
            <mt-spinner type="fading-circle"></mt-spinner>
          </div>
          <span style="color: red">加载中...</span>
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

  .page-infinite-loading {
    text-align: center;
    height: 50px;
    line-height: 50px;

    div {
      display: inline-block;
      vertical-align: middle;
      margin-right: 5px;
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
        moveTranslate: 0,
        loading:false,
      };
    },

    methods: {
      loadMore() {
        console.log('loadmore')
        this.loading = true;
        setTimeout(() => {
          let last = this.list[this.list.length - 1];
          for (let i = 1; i <= 10; i++) {
            this.list.push(last + i);
          }
          this.loading = false;
        }, 2500);
      },
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
