<template>
  <div class="home">
    <banner />
    <div class="container contentList">
      <ul class="typeList">
        <li>
          <img src="../assets/img/ex/home_fl3.png" alt />
          电竞比分
        </li>
        <li>
          <img src="../assets/img/ex/home_fl3.png" alt />
          电竞比分
        </li>
      </ul>

      <itemList v-for="(item,index) in contentList" :key="index" :itemData="item" @changeTab="changeTab" />

    </div>
  </div>
</template>

<script>
import Banner from '~/components/home/Banner'
import itemList from '~/components/home/ItemList'
const contentList = [
  {
    title: '电竞比分',
    typeList: [
      {
        name: 'Dota2',
        link: '#'
      },
      {
        name: '自走棋',
        link: '#'
      }
    ],
    list: [
      {
        name: '尚牛电竞',
        imgUrl: ''
      },
      {
        name: '玩加电竞',
        imgUrl: ''
      },
      {
        name: '电竞比分网',
        imgUrl: ''
      },
      {
        name: '电竞比分网',
        imgUrl: ''
      },
      {
        name: '电竞比分网',
        imgUrl: ''
      }
    ]
  }
]

export default {
  components: {
    Banner,
    itemList
  },
  data () {
    return {
      contentList
    }
  },
  methods: {
    changeTab (val) {
      console.log(val)
    }
  }
}
</script>
<style lang="less" scoped>
.home {
  background-color: #f7f9ff;
}

.typeList {
  position: absolute;
  width: 120px;
  left: 0;
  top: 30px;
  margin-left: -150px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 2px 10px 0px rgba(21, 0, 111, 0.05);
  li {
    text-align: center;
    padding: 12px 0;
    border-bottom: 1px solid #edf1f5;
    font-size: 16px;
    color: #555555;
    font-weight: bold;
    cursor: pointer;
    img {
      width: 18px;
      margin-right: 10px;
    }
  }
}

.contentList {
  padding: 30px 0;
  position: relative;
}
</style>
