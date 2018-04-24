<template>
  <div style="width: 80%;margin: auto; display: flex; flex-direction: column">
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column prop="address" label="地址" :formatter="formatter"></el-table-column>
      <el-table-column prop="tag" label="标签" width="100" :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]" :filter-method="filterTag" filter-placement="left">
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.tag === '家' ? 'primary' : 'success'"
            close-transition>{{scope.row.tag}}
          </el-tag>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top: 1rem">
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
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          tag: '家'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          tag: '公司'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          tag: '家'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          tag: '公司'
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
      headerrowclass() {

        return {backgroundColor:'red'}
      },
      formatter(row, column) {
        return row.address;
      },
      filterTag(value, row) {
        return row.tag === value;
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      }
    }
  }
</script>

<style scoped>

</style>
