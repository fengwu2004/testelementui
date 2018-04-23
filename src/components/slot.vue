<template>
  <div>
    <a v-bind:href="url" class="nav-link">
      <!--<slot></slot>-->
    </a>
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
