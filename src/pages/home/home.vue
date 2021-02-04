<template>
  <div class="home">
    <div class="title">首页旨在演示H5端常见坑点</div>
    <div>
      <span>快速调用电话</span>
      <a href="tel:10086">呼叫10086</a>
    </div>
    <div>
      <span>快速调用短信</span>
      <a href="sms:10086">发送短信给10086</a>
    </div>
    <div>
      <span>快速调用邮箱</span>
      <a href="mailto:ljx199703@gmail.com">发送邮件给Alvis Lee</a>
    </div>
    <div>
      <span>选择或拍摄照片</span>
      <input type="file" accept="image/*" />
    </div>
    <div>
      <span>选择或拍摄视频</span>
      <input type="file" accept="video/*" />
    </div>
    <div>
      <span>多选文件</span>
      <input type="file" multiple />
    </div>
    <div>
      <span>弹出电话键盘</span>
      <input type="tel" />
    </div>
    <div>
      <span>弹出纯数字键盘</span>
      <input pattern="\d*" />
    </div>
    <div>
      <span>URL Scheme</span>
      <a href="alipays://platformapi/startapp?appId=60000002">打开支付宝的蚂蚁森林</a>
    </div>
    <div>
      <span>关闭输入框首字母大写纠正</span>
      <input autocapitalize="off" autocorrect="off" />
    </div>
    <!-- 自适应背景 -->
    <div class="background-image"></div>
    <!-- 非body元素滚动 -->
    <div class="scroll">
      <div class="content">
        <div class="child-content">
          <div class="wtf-content"></div>
        </div>
      </div>
    </div>
    <div class="no-long-press">
      <span>禁止长按操作和用户选择</span>
      <img src="../../assets/images/apple.jpg" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    beforeRouteEnter (to, from, next) {
      next()
    },
  }
</script>

<style lang="scss" scoped>
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      flex: 0 0 1rem;
      line-height: 1rem;
      color: var(--theme);
      font-weight: bold;
    }
    .background-image {
      width: 4rem;
      flex: 0 0 4rem;
      background: url('../../assets/images/apple.jpg') no-repeat center/100% 100%;
      margin-bottom: .6rem;
    }
    .scroll {
      width: 100%;
      flex: 0 0 6rem;
      overflow: auto;
      margin-bottom: .6rem;
      .content {
        width: 100%;
        height: 20rem;
        overflow: hidden;
        background-color: var(--theme);
      }
      .child-content {
        width: 100%;
        height: 3rem;
        overflow: auto;
        /* 禁止滚动传播 */
        overscroll-behavior: contain;
        margin-top: 2rem;
      }
      .wtf-content {
        width: 100%;
        height: 5rem;
        background-color: deeppink;
      }
    }
    .no-long-press {
      width: 5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: .6rem;
      -webkit-touch-callout: none;
      user-select: none;
      span {
        margin-bottom: .2rem;
      }
      img {
        width: 100%;
      }
    }
    > div:not(.title):not(.background-image):not(.scroll):not(.no-long-press) {
      flex: 0 0 2rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      span {
        margin-bottom: .2rem;
      }
      a {
        color: var(--theme);
      }
    }
  }
</style>