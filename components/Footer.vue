<template>
  <div class="footer">
    <div class="container clearfix">
      <ul class="typeList fl">
        <li class="item">
          <a href="#">友情链接</a>
        </li>
        <li class="item">
          <a href="#">友情链接</a>
        </li>
        <li class="item">
          <a href="#">友情链接</a>
        </li>
        <li class="item">
          <a href="#">友情链接</a>
        </li>
      </ul>
    </div>
    <div class="bottonProtocol">
      <div class="container">
        Copyright © 2019-2019 Xiamen Siguan TECHNOLOGY Co.,
        <span>Ltd.版权所有Powered by EyouCms<br />闽ICP备案中</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.footer {
  background-color: #303030;
  .container {
    padding: 30px 0;
    ul.typeList {
      width: 25%;
      li {
        padding: 4px 0;
        &:first-child {
          margin-bottom: 20px;
          a {
            color: #cccccc;
          }
        }
        a {
          font-weight: bold;
          font-size: 14px;
          color: #888888;
        }
      }
    }
  }
  .bottonProtocol {
    border-top: 1px solid #2a2a2a;
    .container {
      text-align: center;
      color: #888888;
      font-size: 12px;
      padding: 27px 0;
    }
  }
}
</style>
