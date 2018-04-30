<template>
  <div>
    <div style="display: flex;flex-direction: column;align-items: center">
      <div>
        <croppa v-model="myCroppa" :height="240" :width="690"></croppa>
      </div>
      <div style="width: 690px">
         <el-slider v-model="zoom"></el-slider>
      </div>
    </div>
    <el-button @click="uploadCroppedImage">上传</el-button>
  </div>
</template>

<style>

</style>

<script>
  export default {
    methods:{
      uploadCroppedImage() {
        this.myCroppa.generateBlob(
          blob => {
            console.log(blob)
            // write code to upload the cropped image file (a file is a blob)
          },
          'image/jpeg',
          0.8
        ); // 80% compressed jpeg file
      }
    },
    data() {
      return {
        myCroppa:{},
        zoom:0
      }
    },
    watch:{
      zoom:function(newValue, oldValue) {

        console.log(newValue, oldValue)

        if (newValue > oldValue) {

          this.myCroppa.zoomOut()
        }
        else {

          this.myCroppa.zoomIn()
        }
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
