<template>
  <div style="width: 400px;margin: 10rem; display: flex;align-items: center">
    <span style="width: 80px">新密码</span>
    <el-popover
      placement="right"
      width="200"
      trigger="focus">
      <span style="font-size: 0.6rem">密码长度6-18位,字母，数组，标点符号，不允许空格</span>
      <el-input slot="reference" style="width: 300px" type="password"></el-input>
    </el-popover>
  </div>
</template>

<style>

</style>

<script>

  // 密码长度6-14位,字母，数组，标点符号，不允许空格
  export default {

    methods:{
      handlePreview(file) {

        console.log(file)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
