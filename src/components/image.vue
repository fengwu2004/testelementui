<template>
  <div class="main">
    <image-cropper></image-cropper>
  </div>
</template>

<script>

  import { default as ImageCropper } from '@/components/imageCropper'

  export default {
    components: { ImageCropper },

  }

</script>

<style rel="stylesheet/scss" scoped lang="scss">

  .main {

    max-width: 800px;
    margin: 10rem auto;
  }
</style>
