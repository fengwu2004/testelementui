<template>
  <div class="main">
    <div>
      <span>主题图片</span>
      <div class="imagecroppaouter">
        <div class="croppabound">
          <div style="border: 1px dashed #D0D5EF;height: 160px">
            <croppa
              canvas-color="white"
              v-model="croppa"
              :show-remove-button="false"
              :placeholder-font-size="20"
              placeholder="点击上传"
              @new-image="onImageAttatched"
              @image-remove="onImageRemoved"
              :height="160" :width="460">
            </croppa>
          </div>
        </div>
        <div style="display: flex;width: 100%;justify-content: center;margin-top: 0.5rem" :style="{visibility:imageAttacted ? 'visible' : 'hidden'}">
          <el-button @click="outputImg" size="mini">确定</el-button>
          <el-button @click="cancelImg" size="mini">取消</el-button>
        </div>
      </div>
      <div style="margin-top: 1rem;">
        <span class="helpertip">为了更好的显示在捷生活APP首页的信息卡片列表里面，图片尺寸要求</span><span class="focustip">长宽690*240px</span>
      </div>
    </div>
    <div v-show="dataUrl != null">
      <span>手机效果预览</span>
      <div class="imgpreview">
        <img :src="dataUrl" width="230" height="80"/>
      </div>
      <div style="margin-top: 1rem;">
        <span class="helpertip">系统自动按指定尺寸生成</span>
      </div>
    </div>
  </div>
</template>

<script>

  import { picFile } from "@/api/fileupload";

  export default {
    mounted() {

      console.log('imagecropper')
    },
    methods:{
      uploadCroppedImage() {
        this.croppa.generateBlob(
          blob => {
            console.log(blob)
            // write code to upload the cropped image file (a file is a blob)
          },
          'image/jpeg',
          0.8
        ); // 80% compressed jpeg file
      },
      outputImg() {

        let dataUrl = this.croppa.generateDataUrl()

        this.croppa.generateBlob(blob => {

          let formData = new FormData()

          formData.append('file', blob)

          picFile(formData).then(() => {

            this.dataUrl = dataUrl
          })
        })
      },
      cancelImg() {

        this.croppa.remove()

        this.dataUrl = null
      },
      onImageAttatched() {

        this.imageAttacted = true
      },
      onImageRemoved() {

        this.imageAttacted = false
      },
    },
    data() {
      return {
        croppa:{},
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
    width: 100%;
    height: 240px;
    max-width: 600px;
  }

  .croppabound {

    display: flex;
    justify-content: center;
    align-items: center;
    width: 600px;
    height: 240px;
  }

  .imgpreview {

    background: #FFFFFF;
    box-shadow: 0 8px 20px 0 #D9D9DD;
    border-radius: 8px;
    padding: 1rem;
    align-self: flex-start;
  }

  .main {

    display: flex;
    justify-content: space-between;
  }

  $fontcolor:#16325C;

  span {

    color: $fontcolor;
    font-size: 0.9rem;
    font-weight: bold;
    position: relative;
    left: -0.2rem;
  }

  .helpertip {

    color: #445577;
    font-size: 0.7rem;
    font-weight: normal;
  }

  .focustip {

    color: black;
    font-size: 0.7rem;
    font-weight: normal;
  }
</style>
