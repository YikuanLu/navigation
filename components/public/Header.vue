<template>
  <div class="header">
    <div class="container">
      <div class="logo fl">
        <img src="@/assets/img/home_db_logo.png" alt />
        <span>电竞导航</span>
      </div>
      <div class="fr rightBox">
        <span @click="collection">
          <i class="iconfont iconshoucang-chanpinxiangqing"></i>
          收藏导航
        </span>
        <span>
          <i class="iconfont iconlianxi"></i>
          联系我们
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    collection () {
      if (window.sidebar && window.sidebar.addPanel) { // Mozilla Firefox Bookmark
        window.sidebar.addPanel(document.title, window.location.href, '')
      } else if (window.external && ('AddFavorite' in window.external)) { // IE Favorite
        window.external.AddFavorite(location.href, document.title)
      } else if (window.opera && window.print) { // Opera Hotlist
        this.title = document.title
        return true
      } else { // webkit - safari/chrome
        alert('Press ' + (navigator.userAgent.toLowerCase().includes('mac') ? 'Command/Cmd' : 'CTRL') + ' + D to bookmark this page.')
      }
    }
  }
}
</script>
<style lang="less" scoped>
.header {
  // width: 100%;
  height: 80px;
  background-color: #2400bb;
  .logo {
    letter-spacing: 0;
    transform: translateY(25%);
    img {
      width: 52px;
      margin-right: 8px;
    }
    span {
      font-size: 20px;
      color: #fff;
      font-weight: bold;
    }
  }
  .rightBox {
    margin-top: 29px;
    span {
      cursor: pointer;
      color: #fff;
      font-size: 14px;
      margin-right: 20px;
      i.iconfont {
        font-size: 14px;
        color: #fff;
      }
    }
  }
}
</style>
