<template>
  <div class="article">
    <div class="container">
      <ul class="typeList">
        <li>
          关于我们
        </li>
        <li>
          关于我们
        </li>
      </ul>
      <div class="title">免责声明</div>
      <div class="content">
        1. 本网所有内容，包括： 文字、图片、音视或视频，凡来源注明：尚牛电竞的文章或作品，版权归尚牛电竞所有或尚牛电竞与作者共同所有。作者仍拥有作
        品的署名权和收益权。特殊注明版权所有的稿件除外。
        2. 思想和信息只有通过传播才能实现其社会价值。本网站致力于成为电竞信息共享平台，用户可以免费浏览所有信息。同时，我们倡导业内人士通过网络无
        障碍传播自己的观点和思想，免费共享本网站信息的同时也免费提供自己拥有的信息，以促进行业的发展。
        3. 本网欢迎其他网站转载或引用本网内容，但是下列内容除外：本网所指向的非本网内容的相关链接内容；已作出不得转载或未经许可不得转载声明的内容；
        没有本网署名或本网引用、转载的其他来源的内容。其他网站在免费转载本网站拥有版权的文章的同时，也就自动同意本网有权免费转载其网站上拥有版权
        的文章。
        4. 本网不保证所有信息、文本、图形、链接及其它项目的绝对准确性和完整性，故仅供参考使用。其中政策法规和标准的文档不可作为正式法规和标准文本
        使用。本网站对任何由于使用本网站而引起的损失，不承担责任。
        5.网上有诈骗，所有在本站刊登广告的网站和内容，一概与本站无关，请各位网友密切注意！本网站所登载的广告，均为广告客户的个人意见和表达方式，
        与本网站无任何关系。与本网站链接的广告，均不得涉及反动、迷信、淫秽、赌博等有害内容，不得违反国家法律规定，如有违者，本网站有权随时予以删
        除，并保留与有关部门合作追究的权利。本网站拒绝为任何具有赌博性质的组织进行广告链接。
        6. 如果本站部分内容侵犯了您的版权，敬请联系我们。我们将在第一时间删除相关资料并通过本站及其他渠道公开致歉,本网站上链接的非本站的网页和内容
        不受本网站的控制，本网站对其内容不负责任本网站上挂接的其他单位的网站内容由主办方负责维护，本网站对其内容不负责任。
        7. 对不遵守上述声明或其他违法、恶意使用本网内容者，本网保留追究其法律责任的权力。
        8. 我们保留随时更改我们的网站、上述版权和免责声明条款的权利。
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
.article {
  background-color: #f7f9ff;
  min-height: 600px;
  padding-top: 30px;
  .container {
    background-color: #fff;
    border-radius: 4px;
    box-shadow:0px 2px 10px 0px rgba(21,0,111,0.05);
    .typeList {
      width: 120px;
      position: absolute;
      left: 0;
      top: 0;
      margin-left: -140px;
      background-color: #fff;
      box-shadow:0px 2px 10px 0px rgba(21,0,111,0.05);
      li {
        cursor: pointer;
        padding: 17px 0;
        border-bottom: 1px solid #EDF1F5;
        font-size: 18px;
        color: #101010;
        text-align: center;
      }
      border-radius: 4px;
    }
    .title {
      position: relative;
      font-size: 18px;
      color: #101010;
      padding: 20px 36px;
      font-weight: bold;
      &::before {
        content: " ";
        position: absolute;
        width: 6px;
        height: 16px;
        background-color: #ffb400;
        border-radius: 3px;
        left: 21px;
        top: 25px;
        margin-right: 10px;
      }
    }
    .content {
      padding: 20px;
    }
  }
}
</style>
