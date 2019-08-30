<template>
  <div class="itemList clearfix">
    <div class="header clearfix">
      <div class="title fl">{{ itemData.title }}</div>
      <!-- 游戏类型切换 -->
      <div v-if="itemData.typeList&&itemData.typeList.length > 0" class="fl type">
        <a v-for="(item,i) in itemData.typeList" :key="i" href=" JavaScript:;" @click="changeTab(i)">{{ item.name }}</a>
      </div>
    </div>
    <!-- 跳转链接  -->
    <a href="#">
      <div v-for="(item,i) in itemData.list" :key="i" class="item fl">
        <img src="../../assets/img/ex/1.png" alt />
        <span>{{ item.name }}</span>
      </div>
    </a>
  </div>
</template>
<script>
export default {
  props: {
    itemData: {
      type: Object,
      required: true
    }
  },
  data () {
    return {}
  },
  methods: {
    changeTab (index) {
      this.$emit('changeTab', index)
    }
  }
}
</script>
<style lang="less" scoped>
.itemList {
  padding: 0 10px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 2px 10px 0px rgba(21, 0, 111, 0.05);
  .header {
    position: relative;
    padding: 20px 10px;
    &::before {
      content: " ";
      display: block;
      background-color: #ffb400;
      width: 6px;
      height: 16px;
      // left: 0;
      // top: 21px;
      float: left;
      margin-right: 12px;
      margin-top: 5px;
      border-radius: 3px;
    }
    .title {
      font-size: 18px;
      color: #101010;
      font-weight: bold;
      margin-right: 10px;
    }
    .type {
      a {
        display: inline-block;
        line-height: 17px;
        font-size: 14px;
        color: #555555;
        padding: 4px 8px;
        margin: 0 4px;
        text-decoration: none;
      }
      a.active {
        color: #fff;
        background-color: #ffb400;
        border-radius: 100px;
      }
    }
  }
  .item {
    width: 275px;
    margin: 0 10px 30px;
    padding: 20px 16px;
    border: 1px solid #e5ecf2;
    border-radius: 4px;
    color: #101010;
    transition: background-color 0.3s, color 0.3s, transform 0.3s;
    &:hover {
      background-color: #ffb400;
      color: #fff;
      transform: translate(0, -10px);
    }
  }
}
</style>
