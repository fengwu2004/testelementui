<template>
  <div class="main">
    <image-cropper rel="imagecropperref" init-url="https://github.com/fengwu2004/testelementui/blob/master/static/picture.jpg?raw=true"></image-cropper>
  </div>
</template>

<script>

  import { default as ImageCropper } from '@/components/imageSpecialCropper'

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

    /*max-width: 900px;*/
    position: absolute;
    left: 10rem;
    top: 10rem;
  }
</style>
