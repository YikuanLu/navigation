<template>
  <div class="banner">
    <div class="container">
      <div class="title">电竞资源导航</div>
      <div class="searchBox">
        <i class="iconfont iconlianxi"></i>
        <input v-model="search" placeholder="请输入搜索内容" type="text" />
        <button @click="toSearch">搜索</button>
      </div>
      <div class="radioBox">
        <myRadio v-model="radio" :options="options" />
      </div>
    </div>
  </div>
</template>
<script>
import myRadio from '~/components/public/Radio'
export default {
  components: {
    myRadio
  },
  data () {
    return {
      search: '',
      radio: 'baidu',
      options: [
        {
          name: '百度',
          value: 'baidu'
        },
        {
          name: '搜狗',
          value: 'sougou'
        },
        {
          name: 'UC',
          value: 'uc'
        },
        {
          name: '360',
          value: '360'
        }
      ]
    }
  },
  watch: {
    radio (val) {
      console.log(val)
    }
  },
  methods: {
    toSearch () {
      switch (this.radio) {
        case 'baidu':
          window.open(`https://www.baidu.com/s?wd=${this.search}`) // 百度
          break
        case 'sougou':
          window.open(`https://www.sogou.com/web?query=${this.search}`) // 搜狗
          break
        case 'UC':
          window.open(`https://so.m.sm.cn/s?q=${this.search}`) // UC
          break
        case '360':
          window.open(`https://www.so.com/s?src=360sou_newhome&q=${this.search}`) // 360
          break
      }
    }
  }
}
</script>
<style lang="less" scoped>
.banner {
  width: 100%;
  height: 300px;
  background-image: url("../../assets/img/home_ss_bg.png");
  background-size: 100% 100%;
  padding-top: 90px;
  .title {
    text-align: center;
    font-size: 30px;
    color: #fff;
    font-weight: bold;
    margin-bottom: 30px;
  }
  .searchBox {
    width: 700px;
    margin: 0 auto;
    position: relative;
    word-spacing: -6px;
    .iconfont {
      position: absolute;
      font-size: 12px;
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
      color: #888888;
    }
    input {
      background-color: #fff;
      font-size: 12px;
      width: 620px;
      height: 36px;
      padding: 12px 10px 12px 32px;
      border-radius: 4px 0 0 4px;
      border: none;
      outline: none;
      vertical-align: middle;
    }
    button {
      font-size: 14px;
      font-weight: bold;
      width: 80px;
      height: 36px;
      font-size: 12px;
      border-radius: 0 4px 4px 0;
      border: none;
      outline: none;
      vertical-align: middle;
      cursor: pointer;
      background-color: #ffb400;
      color: #fff;
    }
  }
  .radioBox {
    width: 700px;
    margin: 9px auto;
  }
}
</style>
