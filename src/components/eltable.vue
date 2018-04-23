<template>
  <div style="width: 80%;margin: auto; display: flex; flex-direction: column">
    <el-table :data="tableData" size="mini" :show-header="show" :header-row-style="headerrow" :cell-style="cellstyle">
      <el-table-column prop="index" label="" width="30"></el-table-column>
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div>
      <el-pagination :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next" :total="4000">
      </el-pagination>
    </div>
  </div>

</template>

<style>

</style>

<script>
  export default {
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
      },
      headerrow({row, rowIndex}) {

        if (rowIndex === 0) {

          return {backgroundColor:'blue'}
        }
      }
    }
  }
</script>

<style scoped>

  .el-table >>> th {

      background: #d0d5e5;
  }
</style>
