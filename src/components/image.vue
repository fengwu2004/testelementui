<template>
  <div class="main">
    <image-cropper rel="imagecropperref"></image-cropper>
  </div>
</template>

<script>

  import { default as ImageCropper } from '@/components/imageCropper'

  export default {
    components: { ImageCropper },
    mounted() {

      console.log(this.$refs.imagecropperref)

      console.log('mounted image')
    }
  }

</script>

<style rel="stylesheet/scss" scoped lang="scss">

  .main {

    max-width: 800px;
    margin: 10rem auto;
  }
</style>
