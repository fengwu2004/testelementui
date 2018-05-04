<template>
  <div>
    <div id="mescroll" class="mescroll">
      <!--展示上拉加载的数据列表-->
      <ul id="dataList" class="data-list" v-cloak>
        <li v-for="pd in pdlist">
          <p class="pd-name">{{pd.pdName}}</p>
        </li>
      </ul>
    </div>
  </div>

</template>

<style>

</style>

<script>
  import MeScroll from 'mescroll.js'
  import pdlist1 from './pdlist1'

  function getListDataFromNet(pageNum,pageSize,successCallback,errorCallback) {
    //延时一秒,模拟联网
    setTimeout(function () {

      console.log(pdlist1)

      var data = pdlist1

      var listData=[];//模拟分页数据

      for (var i = (pageNum - 1) * pageSize; i < pageNum * pageSize; i++) {

        if (i == data.length) {

          break;
        }

        listData.push(data[i]);
      }

      successCallback&&successCallback(listData);//成功回调
    },500)
  }


  export default {
    data() {
      return {
        mescroll: null,
        pdlist: pdlist1,
        show:true
      }
    },
    mounted: function() {
      //创建MeScroll对象,down可以不用配置,因为内部已默认开启下拉刷新,重置列表数据为第一页
      //解析: 下拉回调默认调用mescroll.resetUpScroll(); 而resetUpScroll会将page.num=1,再执行up.callback,从而实现刷新列表数据为第一页;
      var self = this;

      self.mescroll = new MeScroll("mescroll", { //请至少在vue的mounted生命周期初始化mescroll,以确保您配置的id能够被找到

        up: {
          callback: self.upCallback,

          // isBounce: false, //此处禁止ios回弹,解析(务必认真阅读,特别是最后一点): http://www.mescroll.com/qa.html#q10

          // toTop:{ //配置回到顶部按钮
          //   src : "../res/img/mescroll-totop.png", //默认滚动到1000px显示,可配置offset修改
          // },
          // empty:{ //配置列表无任何数据的提示
          //   warpId:"dataList",
          //   icon : "../res/img/mescroll-empty.png" ,
          // },
        }
      });

    },
    methods: {
      //上拉回调 page = {num:1, size:10}; num:当前页 ,默认从1开始; size:每页数据条数,默认10
      upCallback: function(page) {
        //联网加载数据
        var self = this;

        getListDataFromNet(page.num, page.size, function(curPageData) {

          if(page.num == 1) self.pdlist = [];

          self.pdlist = self.pdlist.concat(curPageData);

          self.mescroll.endSuccess(curPageData.length);

        }, function() {

          self.mescroll.endErr();
        });
      },
    },
  }
</script>

<style scoped>

  * {
    margin: 0;
    padding: 0;
    -webkit-touch-callout:none;
    -webkit-user-select:none;
    -webkit-tap-highlight-color:transparent;
  }
  body{background-color: white}
  ul{list-style-type: none}
  a {text-decoration: none;color: #18B4FE;}

  /*vue*/
  [v-cloak] {
    display: none;
  }
  /*模拟的标题*/
  .header{
    z-index: 9990;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 44px;
    line-height: 44px;
    text-align: center;
    border-bottom: 1px solid #eee;
    background-color: white;
  }
  .header .btn-left{
    position: absolute;
    top: 0;
    left: 0;
    padding:12px;
    line-height: 22px;
  }
  /*mescroll滚动的区域*/
  .mescroll{
    position: fixed;
    top: 0px;
    bottom: 0;
    height: auto;
  }
  /*展示上拉加载的数据列表*/
  .data-list li{
    position: relative;
    padding: 10px 8px 10px 10px;
    border-bottom: 1px solid #eee;
  }
  .data-list .pd-img{
    position: absolute;
    left: 18px;
    top: 18px;
    width: 80px;
    height: 80px;
  }
  .data-list .pd-name{
    font-size: 16px;
    line-height: 20px;
    height: 40px;
    overflow: hidden;
  }
  .data-list .pd-price{
    margin-top: 8px;
    color: red;
  }
  .data-list .pd-sold{
    font-size: 12px;
    margin-top: 8px;
    color: gray;
  }

</style>
