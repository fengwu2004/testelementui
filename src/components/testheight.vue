<template>
  <div class="main">
    <div class="navbar"></div>
    <div class="content">
      <div class="table">
        <div v-for="item in list">B</div>
      </div>
      <div class="page">这是分页</div>
    </div>
  </div>
</template>

<script>

  let list = ['A', 'A','A','A','A', 'A','A','A','A', 'A','A','A','A','A','A','A','A','A','A','A','A','A','A','A','A','A','A','A','A','A', 'A','A']
  export default {

    data() {
      return {
        list:list
      }
    }
  }

</script>

<style scoped>

  .main {

    background: red;
    width: 500px;
    height: 700px;
    position: relative;
  }

  .navbar {

    background: aqua;
    height: 2rem;
  }

  .table {

    width: 100%;
    max-height: calc(100% - 4rem);
    overflow-y: scroll;
    background: #65aadd;
  }

  .page {

    margin: 1rem auto;
    height: 2rem;
    background: green;
    line-height: 2rem;
  }

  .content {

    margin-top: 2rem;
    background-color: rebeccapurple;
    position: relative;
    height: calc(100% - 2rem - 2rem);
  }
</style>

