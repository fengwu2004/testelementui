<template>
  <div>
    <div class="imagecroppaouter">
      <img v-show="imageAttacted" id="imagecropper_item" :src="dataUrl" alt="Picture" style="max-width: 100%;">
      <div v-show="!imageAttacted" style="display: flex;height: 100%;align-items: center;justify-content: center;" @click="upload">
        <input id="addfile-btn" class="sr-only" type="file" style="display: none" accept=".jpg,.jpeg,.png,.gif,.bmp,.tiff" @change="imagechange"/>
        <span style="font-size: 2rem">点击上传</span>
      </div>
    </div>
    <div style="width: 460px;height: 160px;overflow: hidden">
      <img id="imagecropperpreview"/>
    </div>
  </div>
</template>

<script>

  import './cropper.css'
  import Cropper from 'cropperjs'

  export default {
    methods:{
      upload() {

        document.getElementById("addfile-btn").click();
      },
      imagechange() {

        let file = document.getElementById("addfile-btn").files[0]

        this.imageAttacted = true

        this.dataUrl = URL.createObjectURL(file)

        this.$nextTick(() => {

          this.onimageChange()
        })
      },
      onimageChange() {

        if (this.cropper) {

          this.cropper.destroy()
        }

        let image = document.getElementById('imagecropper_item')

        let preview = document.getElementById('imagecropperpreview')

        preview.src = image.src

        let aspectRatio = 690/240

        this.cropper = new Cropper(image, {
          aspectRatio,
          ready(e) {

          },
          crop(e) {

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
        })
      },
    },
    data() {
      return {
        cropper:null,
        dataUrl:null,
        imageAttacted:false,
      }
    },
  }
</script>

<style rel="stylesheet/scss" scoped lang="scss">

  .imagecroppaouter {

    background: #E0E5EE;
    border: 1px solid #D0D5E5;
    height: 240px;
    width: 690px;
  }

  .sr-only {

    display: inline-block;
    width: 100%;
    height: 100%;
  }

  img {

    max-width: 100%;
  }

</style>
