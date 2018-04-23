<template>
  <div>
    <navigation-link url="/hello">
      <div>AAAA</div>
      <span>GOGOGO</span>
    </navigation-link>
  </div>
</template>

<style>

</style>

<script>
  import { default as navigationLink } from './slot'

  export default {
    components: { navigationLink },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
