<template>
  <transition name="fade" mode="out-in">
    <div class="content">
      <span class="redstar">*</span><span>通知内容</span><span class="subtitle">(限2000个字)</span>
      <div class="richtextinput">
        <rich-text-editor :text="content" @editorChange="editorChange"></rich-text-editor>
      </div>
    </div>
  </transition>
</template>

<script>

  import richTextEditor from '@/components/richTextEditor'

  export default {
    components: { richTextEditor },
    data() {
      return {
        content:'',
      }
    },
    methods: {
      editorChange(html) {

        this.content = html

        console.log(html)
      },
    }
  }
</script>

<style scoped rel="stylesheet/scss" lang="scss">

  .navibar {

    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid #D0D5E5;
  }

  .createmessageprocess {

    position: relative;
    left: -25%;
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .line {

      margin: 0 2rem;
      width: 50px;
      height: 1px;
      background: #D0D5E5;
    }

    span {

      font-size: 0.8rem;
      color: deepskyblue;
    }
  }

  .content {

    width: 50%;
    margin: 2rem auto;
  }

  .richtextinput {

    margin-top: 1rem;
    height: 24rem;
  }

  .btns {

    margin-top: 2rem;
    display: flex;
    justify-content: center;
  }

  .redstar {

    color: #FF6050;
    position: relative;
    left: -1rem;
    line-height: 1rem;
    height: 1rem;
  }

  .subtitle {

    color: #AAB6CC;
    font-size: 0.8rem;
    font-weight: normal;
    margin-left: 1rem;
  }

  $fontcolor:#16325C;

  span {

    color: $fontcolor;
    font-size: 0.9rem;
    font-weight: bold;
    position: relative;
    left: -0.2rem;
  }

</style>
