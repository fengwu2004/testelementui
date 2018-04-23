<template>
  <div class="main">
    <div class="left">
      <span class="pageinfo">共有124条,每页显示: </span>
      <el-select size="mini" v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div class="right">
      <el-pagination :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="prev, pager, next" :total="4000"></el-pagination>
    </div>
  </div>

</template>

<style>

</style>

<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '15条'
        }, {
          value: '选项2',
          label: '25条'
        }, {
          value: '选项3',
          label: '35条'
        }, {
          value: '选项4',
          label: '45条'
        }, {
          value: '选项5',
          label: '55条'
        }],
        value:'选项5',
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

  .main {

    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .main > .left > .pageinfo {

    font-size: 0.8rem;
  }

  .el-select >>> .el-input {
    width:100px
  }

</style>
