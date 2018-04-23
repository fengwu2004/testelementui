<template>
  <div>
    <div>SKEDI</div>
    <button title="Next" @click="click">NEXT</button>
  </div>
</template>

<style>

</style>

<script>
  export default {

    methods:{
      click() {

        this.$router.push({ name: 'hello' })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
