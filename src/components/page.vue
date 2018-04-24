<template>
  <div style="width: 80%;margin: auto;">
    <el-pagination background layout="prev, pager, next" :total="900" page-size="100"></el-pagination>
    <my-page-wiget></my-page-wiget>
  </div>
</template>

<style>

</style>

<script>

  import MyPageWiget from '@/components/MyPageWidget'

  export default {
    components: { MyPageWiget },
    data() {
      return {
        tableData: [{
          index:1,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          index:2,
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          index:3,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          index:4,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        show:true
      }
    },
    methods:{
      cellstyle({row, rowIndex, columnIndex}) {

        return {textAlign:'left'}
      },
      handleEdit(index, row) {

        console.log(index, row);
      },
      handleDelete(index, row) {

        console.log(index, row);
      }
    }
  }
</script>

<style scoped>

</style>
