<template>
  <div>
    <div>ABCDE</div>
    <button title="导航" @click="click">导航</button>
  </div>
</template>

<style>

</style>

<script>
  export default {

    methods:{
      click() {

        this.$router.push({ name: 'go' })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
