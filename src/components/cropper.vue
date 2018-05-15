<template>
  <div style="width: 40%;margin: 10rem auto;">
    <div>
      <img id="image" src="../assets/images/timg.jpg" alt="Picture" style="max-width: 100%;">
    </div>
    <div style="width: 460px;height: 160px;overflow: hidden">
      <img id="preview">
    </div>
  </div>
</template>

<script>
  import './cropper.css'
  import Cropper from 'cropperjs'

  function each(arr, callback) {
    var length = arr.length;
    var i;

    for (i = 0; i < length; i++) {
      callback.call(arr, arr[i], i, arr);
    }

    return arr;
  }

  export default {
    mounted() {

      var image = document.getElementById('image');

      var preview = document.getElementById('preview');

      var cropper = new Cropper(image, {
        aspectRatio:69/24,
        ready: function () {

          preview.src = image.src
        },
        crop: function (e) {

          var data = e.detail;

          var cropper = this.cropper;

          var imageData = cropper.getImageData();

          var previewWidth = 460;

          var imageScaledRatio = data.width / previewWidth;

          preview.style.width = imageData.naturalWidth / imageScaledRatio + 'px';

          preview.style.height = imageData.naturalHeight / imageScaledRatio + 'px';

          preview.style.marginLeft = -data.x / imageScaledRatio + 'px';

          preview.style.marginTop = -data.y / imageScaledRatio + 'px';
        }
      });
    },
  }
</script>

<style scoped rel="stylesheet/scss" lang="scss">


</style>
